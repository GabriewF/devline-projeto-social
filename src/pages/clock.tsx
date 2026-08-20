import { useEffect, useState } from "react";
import Footer from "../components/ui/Footer";
import { Icon } from "@iconify/react";
import moment from "moment-timezone";
import "moment-timezone/builds/moment-timezone-with-data";

interface NTPState {
    time: Date;
    offset: number;
    source: "cloudflare-prod" | "local-dev" | "local-fallback";
    latency: number;
}

export default function Clock() {
    const [state, setState] = useState<NTPState>({
        time: new Date(),
        offset: 0,
        source: import.meta.env.DEV ? "local-dev" : "local-fallback",
        latency: 0,
    });
    const [isSyncing, setIsSyncing] = useState(true);

    const syncWithNTP = async () => {
        setIsSyncing(true);

        if (import.meta.env.DEV) {
            const localTime = moment().tz("America/Sao_Paulo");
            setState({
                time: localTime.toDate(),
                offset: 0,
                source: "local-dev",
                latency: 0,
            });
            setIsSyncing(false);
            return;
        }

        try {
            const startTime = performance.now();
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);

            const response = await fetch(`${window.location.origin}/cdn-cgi/trace`, {
                method: 'GET',
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (response.ok) {
                const text = await response.text();
                const endTime = performance.now();
                const latency = endTime - startTime;

                const match = text.match(/^ts=([\d.]+)/m);
                if (match) {
                    const cloudflareTimeInMs = parseFloat(match.toString()) * 1000;
                    const adjustedServerTime = cloudflareTimeInMs + (latency / 2);
                    const offset = adjustedServerTime - Date.now();

                    setState({
                        time: new Date(adjustedServerTime),
                        offset: offset,
                        source: "cloudflare-prod",
                        latency: Math.round(latency),
                    });
                    setIsSyncing(false);
                    return;
                }
            }
        } catch (error) {
            console.warn("Falha ao sincronizar com Cloudflare, usando fallback local.", error);
        }

        const fallbackTime = moment().tz("America/Sao_Paulo");
        setState({
            time: fallbackTime.toDate(),
            offset: 0,
            source: "local-fallback",
            latency: 0,
        });
        setIsSyncing(false);
    };

    useEffect(() => {
        syncWithNTP();

        let lastUpdate = performance.now();
        const displayInterval = setInterval(() => {
            const now = performance.now();
            const elapsed = now - lastUpdate;
            lastUpdate = now;

            setState(prev => ({
                ...prev,
                time: new Date(prev.time.getTime() + elapsed),
            }));
        }, 1000);

        const syncInterval = setInterval(syncWithNTP, 60000);

        return () => {
            clearInterval(displayInterval);
            clearInterval(syncInterval);
        };
    }, []);

    const formattedTime = state.time.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    const formattedDate = state.time.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const getStatusTooltip = () => {
        if (isSyncing) return "Sincronizando horário com a rede...";
        if (state.source === "local-dev") return "Modo Desenvolvimento: Exibindo hora local do PC";
        if (state.source === "cloudflare-prod") return `Sincronizado via Cloudflare NTP. Latência: ${state.latency}ms RTT`;
        return "Falha de rede: Exibindo horário de fallback do dispositivo";
    };

    return (
        <div className="relative flex flex-col min-h-screen font-bricolage text-white select-none antialiased">
            <div
                className="absolute top-24 right-24 flex items-center gap-3 text-white/30 transition-opacity duration-200 hover:opacity-100"
                title={getStatusTooltip()}
            >
                <Icon
                    icon={state.source === "cloudflare-prod" ? "mdi:server-network" : "mdi:laptop"}
                    className="text-lg"
                />

                <Icon
                    icon={isSyncing ? "mdi:loading" : "mdi:circle"}
                    className={`text-[10px] ${isSyncing ? "animate-spin text-white/40" : "text-emerald-500/80"}`}
                />
            </div>

            <main className="flex flex-col grow items-center justify-center px-24">
                <section id="relogio" className="flex flex-col items-center w-full max-w-[90vw] text-center">
                    <h1 className="leading-none select-none tabular-nums text-[20vw] font-extrabold tracking-tight text-white opacity-60 sm:text-[19vw] md:text-[18vw]">
                        {formattedTime}
                    </h1>
                    <p className="mt-6 text-[4vw] font-light capitalize tracking-wide text-white/50 sm:text-[3vw] md:text-[2vw]">
                        {formattedDate}
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
}
