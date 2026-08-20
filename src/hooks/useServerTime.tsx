import { useCallback, useEffect, useRef, useState } from "react";

export type ClockSource =
    | "server-sync"
    | "local-dev"
    | "local-fallback";

export type SyncStatus =
    | "syncing"
    | "synced"
    | "fallback"
    | "local";

interface ServerTimeState {
    offset: number;
    source: ClockSource;
    status: SyncStatus;
    latency: number;
}

interface TimeSample {
    offset: number;
    latency: number;
}

const SYNC_INTERVAL_MS = 120_000;
const SYNC_TIMEOUT_MS = 4_000;
const SAMPLE_COUNT = 3;
const DISPLAY_INTERVAL_MS = 50;

export function useServerTime(
    syncIntervalMs: number = SYNC_INTERVAL_MS,
) {
    const [time, setTime] = useState<Date>(() => new Date());

    const [syncState, setSyncState] = useState<ServerTimeState>({
        offset: 0,
        source: import.meta.env.DEV
            ? "local-dev"
            : "local-fallback",
        status: import.meta.env.DEV
            ? "local"
            : "syncing",
        latency: 0,
    });

    const offsetRef = useRef(0);
    offsetRef.current = syncState.offset;

    const controllerRef = useRef<AbortController | null>(null);

    /**
     * Faz uma única medição HTTP do horário do servidor.
     *
     * Isso não é NTP.
     * É uma estimativa de offset baseada no header HTTP Date
     * e no midpoint do RTT.
     */
    const measureSample = useCallback(
        async (signal: AbortSignal): Promise<TimeSample> => {
            const startWall = Date.now();
            const startPerf = performance.now();

            const response = await fetch(window.location.origin, {
                method: "HEAD",
                signal,
                cache: "no-store",
            });

            const elapsed = performance.now() - startPerf;

            if (!response.ok) {
                throw new Error(
                    `Falha na resposta HTTP: ${response.status}`,
                );
            }

            const dateHeader = response.headers.get("Date");

            if (!dateHeader) {
                throw new Error(
                    "Cabeçalho HTTP Date ausente",
                );
            }

            const serverTimeMs = new Date(
                dateHeader,
            ).getTime();

            if (!Number.isFinite(serverTimeMs)) {
                throw new Error(
                    "Cabeçalho HTTP Date inválido",
                );
            }

            /*
             * Estimativa do instante intermediário da comunicação.
             *
             * startWall:
             *   relógio de parede no início da requisição.
             *
             * elapsed:
             *   RTT medido com performance.now().
             *
             * midpointWall:
             *   estimativa do instante em que o servidor
             *   estava no meio da comunicação.
             */
            const midpointWall =
                startWall + elapsed / 2;

            const offset =
                serverTimeMs - midpointWall;

            return {
                offset,
                latency: Math.round(elapsed),
            };
        },
        [],
    );

    /**
     * Sincroniza o relógio com o servidor.
     *
     * São feitas três amostras sequenciais.
     * A amostra com menor RTT é utilizada como referência.
     */
    const syncTime = useCallback(async () => {
        if (import.meta.env.DEV) {
            setSyncState({
                offset: 0,
                source: "local-dev",
                status: "local",
                latency: 0,
            });

            return;
        }

        /*
         * Se já existe uma sincronização em andamento,
         * cancela imediatamente.
         */
        controllerRef.current?.abort();

        const controller = new AbortController();
        controllerRef.current = controller;

        const timeoutId = setTimeout(() => {
            controller.abort();
        }, SYNC_TIMEOUT_MS);

        setSyncState((previous) => ({
            ...previous,
            status: "syncing",
        }));

        try {
            let bestSample: TimeSample | null = null;

            for (let i = 0; i < SAMPLE_COUNT; i++) {
                if (controller.signal.aborted) {
                    return;
                }

                try {
                    const sample =
                        await measureSample(
                            controller.signal,
                        );

                    if (
                        bestSample === null ||
                        sample.latency <
                        bestSample.latency
                    ) {
                        bestSample = sample;
                    }
                } catch (error) {
                    if (
                        error instanceof DOMException &&
                        error.name === "AbortError"
                    ) {
                        return;
                    }

                    /*
                     * Uma amostra individual pode falhar.
                     * As próximas ainda podem funcionar.
                     */
                }
            }

            if (
                controller.signal.aborted ||
                bestSample === null
            ) {
                return;
            }

            setSyncState({
                offset: bestSample.offset,
                source: "server-sync",
                status: "synced",
                latency: bestSample.latency,
            });
        } catch (error) {
            if (
                error instanceof DOMException &&
                error.name === "AbortError"
            ) {
                return;
            }

            console.warn(
                "Falha na sincronização com o servidor. Usando horário local.",
                error,
            );

            setSyncState((previous) => ({
                ...previous,
                source: "local-fallback",
                status: "fallback",
                latency: 0,
            }));
        } finally {
            clearTimeout(timeoutId);

            if (
                controllerRef.current ===
                controller
            ) {
                controllerRef.current = null;
            }
        }
    }, [measureSample]);

    /**
     * Sincronização inicial + periódica.
     */
    useEffect(() => {
        void syncTime();

        const intervalId = setInterval(() => {
            void syncTime();
        }, syncIntervalMs);

        return () => {
            clearInterval(intervalId);
            controllerRef.current?.abort();
        };
    }, [syncTime, syncIntervalMs]);

    /**
     * Atualização visual do relógio.
     *
     * 20 FPS é suficiente para exibir milissegundos
     * visualmente sem voltar ao custo de 60 FPS.
     *
     * O próximo tick é sempre recalculado a partir
     * do relógio absoluto, portanto não há acúmulo
     * de drift.
     */
    useEffect(() => {
        let timeoutId: ReturnType<
            typeof setTimeout
        >;

        const tick = () => {
            const synchronizedTimestamp =
                Date.now() + offsetRef.current;

            setTime(
                new Date(synchronizedTimestamp),
            );

            const now = Date.now();

            const nextDelay =
                DISPLAY_INTERVAL_MS -
                (now % DISPLAY_INTERVAL_MS);

            timeoutId = setTimeout(
                tick,
                nextDelay,
            );
        };

        tick();

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return {
        time,
        offset: syncState.offset,
        source: syncState.source,
        status: syncState.status,
        latency: syncState.latency,
    };
}
