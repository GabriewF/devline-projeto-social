import logomarcaInlineColor from "../assets/logomarca+inline-color.svg";
import logomarcaInlineMono from "../assets/logomarca+inline-mono.svg";

import { Icon } from "@iconify/react";

export default function Index() {
    return (
        <main>
            <section className="flex flex-col items-start gap-18 px-32 py-18">
                <img src={logomarcaInlineColor} alt="Logomarca Colorida" className="h-12" />

                <div className="flex flex-col gap-8 text-left">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border-white/20 border w-fit">
                        <i className="rounded-full bg-green-500 h-2 w-2" />
                        <span className="font-dm-sans font-medium text-xs text-white">INSCRIÇÕES ABERTAS · dezembro 2026.2</span>
                    </div>

                    <span className="font-syne font-bold text-8xl text-white">
                        Seu futuro<br />
                        começa<br />
                        <span className="text-white/70">com a escolha</span><br/>
                        certa.
                    </span>

                    <p className="font-dm-sans text-white/75 text-2xl ">
                        Construa hoje a base do futuro que você imagina, criando<br />
                        ideias, caminhos e oportunidades que irão transformar a<br />
                        sua jornada
                    </p>

                    <div className="flex flex-row gap-4 w-fit font-bricolage font-bold text-white text-xl align-middle">
                        <a href="#" className="bg-purple-700 rounded-xl grid place-center grid-flow-col gap-2 px-8 py-4">
                            <span>Quero conhecer melhor</span>
                            <Icon icon="lucide:arrow-right" className="self-center" width="20" />
                        </a>

                        <a href="#" className="border-white/30 border-2 rounded-xl grid place-center grid-flow-col gap-2 px-8 py-4">
                            <span>Ver Disciplinas</span>
                            <Icon icon="lucide:arrow-down" className="self-center" width="20" />
                        </a>
                    </div>
                </div>
            </section>

            <footer className="bg-black h-max flex flex-row justify-center items-center gap-10 py-12">
                <img src={logomarcaInlineMono} alt="Logomarca Monocromática" className="h-6" />

                <i className="border border-white/25 rounded-full h-12" />

                <p className="font-bricolage font-light text-2xl text-white/70">
                    Seu futuro começa com a escolha <span className="font-bold">certa</span>.
                </p>
            </footer>
        </main>
    )
}
