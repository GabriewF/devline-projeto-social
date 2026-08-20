import logomarcaInlineMono from "../../assets/hero/logo.svg";
import heroImage from "../../assets/hero/hero-photo.png";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col items-start gap-18 px-32 py-18"
        >
            {/* Header / Navbar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-row items-center justify-between w-full gap-8"
            >
                <img src={logomarcaInlineMono} alt="Logomarca Colorida" className="h-8" />

                <div className="flex flex-row items-center justify-center gap-8 font-bricolage text-2xl text-white">
                    <nav className="flex items-center justify-center divide-x-2 divide-dotted divide-white/25 *:px-4">
                        <a href="#hero">Início</a>
                        <a href="#sobre">Sobre o Curso</a>
                        <a href="#disciplinas">Disciplinas</a>
                        <a href="#professores">Professores</a>
                        <a href="#trajetoria">Trajetória</a>
                    </nav>

                    <a
                        href="#vem-ser-ds"
                        className="min-w-64 px-6 py-2 rounded-full border-2 border-solid border-white/30 bg-white text-center font-light text-black transition-all duration-300 ease-out hover:bg-transparent hover:font-black hover:text-white"
                    >
                        Conheça Mais
                    </a>
                </div>
            </motion.div>

            {/* Conteúdo Principal */}
            <div className="flex flex-row gap-16">
                {/* Lado Esquerdo - Texto e CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col flex-4 gap-8 pt-12 text-left"
                >
                    <span className="font-syne text-7xl font-bold text-white">
                        Seu futuro
                        <br />
                        começa
                        <br />
                        <span className="text-signature-purple-500/70">com a escolha</span>
                        <br />
                        certa.
                    </span>

                    <p className="font-dm-sans text-2xl text-white/75">
                        Conheça o curso de <i><b>Desenvolvimento de Sistemas</b></i><br />
                        e descubra <i><b>novas possibilidades</b></i> para o seu <i><b>futuro</b></i>.
                    </p>

                    <div className="flex flex-row w-fit gap-3 align-middle font-bricolage text-xl font-bold text-white">
                        <a
                            href="#sobre"
                            className="flex items-center justify-center grid-flow-col gap-2 px-8 py-4 rounded-full bg-signature-purple-300"
                        >
                            <span>Quero conhecer melhor</span>
                            <Icon className="w-7 h-7 p-1 rounded-full bg-white text-signature-purple-300" icon="lucide:arrow-right" />
                        </a>
                    </div>
                </motion.div>

                {/* Lado Direito - Imagem */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex-5"
                >
                    <img src={heroImage} alt="" />
                </motion.div>
            </div>
        </section>
    );
}
