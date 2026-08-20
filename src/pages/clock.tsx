import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import Footer from "../components/ui/Footer";
import { useServerTime } from "../hooks/useServerTime";

export default function Clock() {
    const {
        time,
        source,
        status,
        latency,
    } = useServerTime();

    const [displaySecond, setDisplaySecond] =
        useState(time.getSeconds());

    /*
     * Atualiza somente quando o segundo muda.
     * Isso permite animar a troca de HH:MM:SS
     * sem recriar o elemento a cada 50ms.
     */
    useEffect(() => {
        const second = time.getSeconds();

        if (second !== displaySecond) {
            setDisplaySecond(second);
        }
    }, [time, displaySecond]);

    const formattedTime =
        time.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        });

    const milliseconds = time
        .getMilliseconds()
        .toString()
        .padStart(3, "0");

    const formattedDate =
        time.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
        });

    const isSyncing =
        status === "syncing";

    const isServerSynced =
        source === "server-sync";

    const getStatusTooltip = () => {
        switch (status) {
            case "syncing":
                return "Sincronizando horário com o servidor...";

            case "local":
                return "Modo desenvolvimento: horário local do dispositivo";

            case "synced":
                return `Horário alinhado ao servidor HTTP. Menor RTT: ${latency}ms`;

            case "fallback":
                return "Falha na sincronização: usando horário local";

            default:
                return "";
        }
    };

    return (
        <div className="relative flex min-h-screen flex-col select-none font-bricolage text-white antialiased">
            {/* Indicador de sincronização */}
            <div
                className="absolute right-24 top-24 z-10 flex cursor-help items-center gap-3 text-white/30 transition-opacity duration-200 hover:opacity-100"
                title={getStatusTooltip()}
            >
                <Icon
                    icon={
                        isServerSynced
                            ? "mdi:server-network"
                            : "mdi:laptop"
                    }
                    className="text-lg"
                />

                <Icon
                    icon={
                        isSyncing
                            ? "mdi:loading"
                            : "mdi:circle"
                    }
                    className={`text-[10px] ${
                        isSyncing
                            ? "animate-spin text-yellow-400"
                            : "text-emerald-500/80"
                    }`}
                />
            </div>

            <main className="flex grow flex-col items-center justify-center px-24">
                <section
                    id="relogio"
                    className="flex w-full max-w-[90vw] flex-col items-center text-center"
                >
                    {/* Relógio */}
                    <div className="relative flex items-baseline justify-center">
                        <motion.h1
                            key={displaySecond}
                            initial={{
                                opacity: 0.65,
                                y: 2,
                            }}
                            animate={{
                                opacity: 0.6,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.18,
                                ease: "easeOut",
                            }}
                            className="select-none text-[20vw] font-extrabold leading-none tracking-tight text-white [font-variant-numeric:tabular-nums] sm:text-[19vw] md:text-[18vw]"
                        >
                            {formattedTime}
                        </motion.h1>

                        {/* Milissegundos */}
                        <motion.span
                            animate={{
                                opacity: 0.3,
                            }}
                            transition={{
                                duration: 0.15,
                            }}
                            className="absolute -right-[1.5vw] bottom-[1.5vw] font-mono text-[2.5vw] font-medium leading-none tabular-nums tracking-tight text-white sm:text-[2vw] md:text-[1.35vw]"
                        >
                            {milliseconds}
                        </motion.span>
                    </div>

                    {/* Data */}
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 5,
                        }}
                        animate={{
                            opacity: 0.5,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className="mt-6 text-[4vw] font-light capitalize tracking-wide text-white sm:text-[3vw] md:text-[2vw]"
                    >
                        {formattedDate}
                    </motion.p>
                </section>
            </main>

            <Footer />
        </div>
    );
}
