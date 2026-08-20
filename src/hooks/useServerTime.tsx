import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

export type ClockSource =
    | "server-sync"
    | "local-fallback";

export type SyncStatus =
    | "syncing"
    | "synced"
    | "fallback";

interface TimeSample {
    offset: number;
    latency: number;
    uncertainty: number;
}

interface SyncState {
    offset: number;
    source: ClockSource;
    status: SyncStatus;
    latency: number;
    uncertainty: number;
}

interface TimeApiResponse {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    seconds: number;
    milliSeconds: number;
}

const TIME_API =
    "https://timeapi.io/api/Time/current/zone?timeZone=UTC";

const SYNC_INTERVAL_MS = 30_000;
const REQUEST_TIMEOUT_MS = 4_000;
const SAMPLE_COUNT = 3;
const DISPLAY_INTERVAL_MS = 50;

export function useServerTime(
    syncIntervalMs: number = SYNC_INTERVAL_MS,
) {
    const [time, setTime] = useState<Date>(
        () => new Date(),
    );

    const [syncState, setSyncState] =
        useState<SyncState>({
            offset: 0,
            source: "local-fallback",
            status: "syncing",
            latency: 0,
            uncertainty: 0,
        });

    /*
     * Referência do relógio sincronizado.
     *
     * Depois de sincronizado, o relógio avança
     * exclusivamente usando performance.now().
     */
    const clockRef = useRef({
        baseTime: Date.now(),
        basePerf: performance.now(),
    });

    /*
     * Indica se já tivemos uma sincronização
     * válida pelo menos uma vez.
     *
     * Uma falha posterior não deve jogar
     * o relógio de volta para o horário local.
     */
    const lastSyncRef = useRef({
        offset: 0,
        synced: false,
    });

    const abortRef =
        useRef<AbortController | null>(null);

    /**
     * Faz uma amostra do horário UTC.
     */
    const measureSample = useCallback(
        async (
            signal: AbortSignal,
        ): Promise<TimeSample> => {
            const startWall = Date.now();
            const startPerf =
                performance.now();

            const response = await fetch(
                TIME_API,
                {
                    method: "GET",
                    cache: "no-store",
                    signal,
                },
            );

            const endPerf =
                performance.now();

            if (!response.ok) {
                throw new Error(
                    `TimeAPI HTTP ${response.status}`,
                );
            }

            const data =
                (await response.json()) as TimeApiResponse;

            /*
             * A resposta informa que o horário
             * está em UTC.
             *
             * Usamos Date.UTC() diretamente para
             * não depender do timezone do computador.
             */
            const serverTime = Date.UTC(
                data.year,
                data.month - 1,
                data.day,
                data.hour,
                data.minute,
                data.seconds,
                data.milliSeconds,
            );

            if (
                !Number.isFinite(serverTime)
            ) {
                throw new Error(
                    "TimeAPI retornou horário inválido.",
                );
            }

            const rtt =
                endPerf - startPerf;

            /*
             * Estimamos o instante do servidor
             * no midpoint da comunicação.
             */
            const midpoint =
                startWall + rtt / 2;

            const offset =
                serverTime - midpoint;

            /*
             * Sem conhecer a assimetria da rede,
             * metade do RTT representa a incerteza
             * aproximada da medição.
             */
            const uncertainty =
                Math.ceil(rtt / 2);

            return {
                offset,
                latency: Math.round(rtt),
                uncertainty,
            };
        },
        [],
    );

    /**
     * Sincroniza o relógio com a TimeAPI.
     *
     * Pode ser chamada:
     *
     * - automaticamente pelo intervalo;
     * - manualmente através de resync().
     */
    const syncTime = useCallback(
        async () => {
            /*
             * Não permite duas sincronizações
             * simultâneas.
             */
            abortRef.current?.abort();

            const controller =
                new AbortController();

            abortRef.current =
                controller;

            const timeoutId =
                setTimeout(
                    () => controller.abort(),
                    REQUEST_TIMEOUT_MS,
                );

            /*
             * Se já estamos sincronizados,
             * continuamos exibindo o relógio
             * normalmente durante o resync.
             */
            setSyncState((previous) => ({
                ...previous,
                status:
                    previous.source ===
                    "server-sync"
                        ? "synced"
                        : "syncing",
            }));

            try {
                const samples: TimeSample[] =
                    [];

                /*
                 * Faz três medições.
                 */
                for (
                    let i = 0;
                    i < SAMPLE_COUNT;
                    i++
                ) {
                    if (
                        controller.signal
                            .aborted
                    ) {
                        return;
                    }

                    try {
                        const result =
                            await measureSample(
                                controller.signal,
                            );

                        samples.push(result);
                    } catch (error) {
                        if (
                            error instanceof
                                DOMException &&
                            error.name ===
                                "AbortError"
                        ) {
                            return;
                        }

                        /*
                         * Uma amostra pode falhar.
                         * As outras continuam.
                         */
                    }
                }

                if (
                    samples.length === 0
                ) {
                    throw new Error(
                        "Nenhuma amostra válida.",
                    );
                }

                /*
                 * Menor RTT = menor janela
                 * de incerteza.
                 */
                samples.sort(
                    (a, b) =>
                        a.latency -
                        b.latency,
                );

                const best =
                    samples[0];

                /*
                 * Estabelece o horário sincronizado
                 * exatamente neste instante.
                 */
                const synchronizedNow =
                    Date.now() +
                    best.offset;

                /*
                 * Nova referência monotônica.
                 */
                clockRef.current = {
                    baseTime:
                        synchronizedNow,
                    basePerf:
                        performance.now(),
                };

                lastSyncRef.current = {
                    offset: best.offset,
                    synced: true,
                };

                setSyncState({
                    offset: best.offset,
                    source: "server-sync",
                    status: "synced",
                    latency: best.latency,
                    uncertainty:
                        best.uncertainty,
                });
            } catch (error) {
                if (
                    error instanceof
                        DOMException &&
                    error.name ===
                        "AbortError"
                ) {
                    return;
                }

                console.warn(
                    "Falha na sincronização do horário:",
                    error,
                );

                /*
                 * Se já houve uma sincronização,
                 * preservamos o relógio sincronizado.
                 */
                if (
                    lastSyncRef.current
                        .synced
                ) {
                    setSyncState(
                        (previous) => ({
                            ...previous,
                            status: "synced",
                        }),
                    );

                    return;
                }

                /*
                 * Primeira sincronização falhou.
                 * Usa o relógio local como fallback.
                 */
                clockRef.current = {
                    baseTime: Date.now(),
                    basePerf:
                        performance.now(),
                };

                setSyncState({
                    offset: 0,
                    source: "local-fallback",
                    status: "fallback",
                    latency: 0,
                    uncertainty: 0,
                });
            } finally {
                clearTimeout(timeoutId);

                if (
                    abortRef.current ===
                    controller
                ) {
                    abortRef.current =
                        null;
                }
            }
        },
        [measureSample],
    );

    /**
     * Sincronização inicial + automática.
     */
    useEffect(() => {
        void syncTime();

        const intervalId =
            setInterval(
                () => void syncTime(),
                syncIntervalMs,
            );

        return () => {
            clearInterval(intervalId);
            abortRef.current?.abort();
        };
    }, [syncTime, syncIntervalMs]);

    /**
     * Atualização visual.
     *
     * performance.now() é monotônico.
     */
    useEffect(() => {
        let timeoutId:
            | ReturnType<typeof setTimeout>
            | undefined;

        const tick = () => {
            const elapsed =
                performance.now() -
                clockRef.current.basePerf;

            const timestamp =
                clockRef.current.baseTime +
                elapsed;

            setTime(
                new Date(timestamp),
            );

            timeoutId = setTimeout(
                tick,
                DISPLAY_INTERVAL_MS,
            );
        };

        tick();

        return () => {
            if (timeoutId !== undefined) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    return {
        time,
        offset: syncState.offset,
        source: syncState.source,
        status: syncState.status,
        latency: syncState.latency,
        uncertainty: syncState.uncertainty,

        /*
         * Resync manual.
         */
        resync: syncTime,
    };
}