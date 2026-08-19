import logomarcaInlineMono from "../../assets/hero/logo.svg";
import heroImage from "../../assets/hero/hero-photo.png";

import { Icon } from "@iconify/react";

export default function Hero() {
    return (
        <section id="hero" className="flex flex-col items-start gap-18 px-32 py-18">
            <div className="flex flex-row gap-8 items-center justify-between w-full">
                <img src={logomarcaInlineMono} alt="Logomarca Colorida" className="h-8" />

                <div className="flex flex-row gap-8 items-center justify-center font-bricolage text-2xl text-white">
                    <nav className="flex items-center justify-center divide-x-2 divide-dotted divide-white/25 *:px-4">
                        <a href="#hero">Início</a>
                        <a href="#sobre">Sobre o Curso</a>
                        <a href="#disciplinas">Disciplinas</a>
                        <a href="#professores">Professores</a>
                        <a href="#trajetoria">Trajetória</a>
                    </nav>

                    <a
                        href="#vem-ser-ds"
                        className="
                        bg-white hover:bg-transparent
                        text-black hover:text-white
                        font-light hover:font-black

                        border-solid border-2 border-white/30
                        text-center
                        min-w-64

                        px-6 py-2 rounded-full
                        transition-all ease-out duration-300"
                    >
                        Conheça Mais
                    </a>
                </div>
            </div>

            <div className="flex flex-row gap-16">
                <div className="flex flex-col gap-8 text-left flex-4 pt-12">
                    <span className="font-syne font-bold text-7xl text-white">
                        Seu futuro
                        <br />
                        começa
                        <br />
                        <span className="text-white/70">com a escolha</span>
                        <br />
                        certa.
                    </span>

                    <p className="font-dm-sans text-white/75 text-2xl ">
                        Construa hoje a base do futuro que você imagina, criando
                        <br />
                        ideias, caminhos e oportunidades que irão transformar a<br />
                        sua jornada
                    </p>

                    <div className="flex flex-row gap-3 w-fit font-bricolage font-bold text-white text-lg align-middle">
                        <a
                            href="#sobre"
                            className="bg-signature-purple-300 rounded-xl flex justify-center items-center grid-flow-col gap-2 px-8 py-4"
                        >
                            <span>Quero conhecer melhor</span>
                            <Icon icon="lucide:arrow-right" width="20" />
                        </a>

                        <a
                            href="#disciplinas"
                            className="border-white/30 border-2 rounded-xl flex justify-center items-center grid-flow-col gap-2 px-8 py-4"
                        >
                            <span>Ver Disciplinas</span>
                            <Icon icon="lucide:arrow-down" width="20" />
                        </a>
                    </div>
                </div>

                <div className="flex-5">
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </section>
    );
}
