import { motion } from "framer-motion";
import CardDiscipline from "../ui/DisciplinesCard";

export default function Disciplins() {
    const items = [
        {
            icon: "heroicons:cpu-chip-20-solid",
            label: "AMC",
        },
        {
            icon: "griddy-icons:python",
            label: "Lógica de Programação",
        },
        {
            icon: "akar-icons:html-fill",
            label: (
                <span>
                    Programação
                    <br />
                    Web
                </span>
            ),
        },
        {
            icon: "file-icons:arduino",
            label: "Sistema Embarcados",
        },
        {
            icon: "zondicons:network",
            label: "Redes",
        },
        {
            icon: "boxicons:mobile",
            label: "Desenvolvimento Mobile",
        },
    ];

    return (
        <div
            id="disciplinas"
            className="flex flex-col items-start justify-center gap-12 font-bricolage text-center text-white"
        >
            {/* Bloco de Título com Scroll Reveal */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center justify-center w-full"
            >
                <h1 className="text-5xl font-extrabold">
                    Disciplinas <span className="text-signature-purple-500">Abordadas</span>{" "}
                </h1>
                <p className="text-2xl text-inherit/60">
                    Conheça algumas das principais matérias que fazem parte
                    <br />
                    da nossa formação em <span className="text-signature-purple-200">Desenvolvimento de Sistemas</span>.
                </p>
            </motion.div>

            {/* Carrossel com Scroll Reveal e atraso na animação */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex justify-center w-full"
            >
                <div className="flex w-[70%] gap-5 py-6 overflow-hidden mask-x mask-x-from-95% scrollbar-none">
                    <div className="flex shrink-0 items-center gap-5 animate-slide-infinite">
                        {items.map((v, index) => (
                            <CardDiscipline
                                key={`first-${index}`}
                                icon={v.icon}
                                label={v.label}
                            />
                        ))}
                    </div>

                    <div className="flex shrink-0 items-center gap-5 animate-slide-infinite">
                        {items.map((v, index) => (
                            <CardDiscipline
                                key={`second-${index}`}
                                icon={v.icon}
                                label={v.label}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
