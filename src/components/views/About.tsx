export default function About() {
    const imagesIndex = new Array(16).fill(0);

    return (
        <div id="sobre" className="flex flex-col w-full gap-8">
            <div className="flex flex-col items-center font-bricolage text-white">
                <h1 className="font-extrabold text-[3rem] [font-optical-size:6rem]">
                    Sobre o curso de <span className="text-signature-purple-500">Desenvolvimento de Sistemas</span>
                </h1>

                <p className="text-center text-[25px] text-white/60">
                    Se criatividade e tecnologia fazem parte de você, o curso de{" "}
                    <span className="text-signature-purple-200">
                        Desenvolvimento de
                        <br /> Sistemas
                    </span>{" "}
                    é a oportunidade perfeita para transformar suas ideias em soluções reais
                </p>
            </div>

            <div className="flex flex-1 items-center justify-center px-10 py-6 overflow-x-hidden">
                <div className="flex items-center justify-start w-4/5 py-6 overflow-y-visible mask-x mask-x-from-95% scrollbar-none">
                    <div className="flex shrink-0 items-center animate-slide-infinite">
                        {imagesIndex.map((_, index) => (
                            <img
                                key={index}
                                src={`/imgs/about/${index}.png`}
                                alt="Imagens"
                                className="shrink-0 origin-center snap-center w-[320px] aspect-3/4 px-2.5 object-cover rounded-[20px] transform-gpu will-change-transform transition-all duration-300 hover:scale-105"
                            />
                        ))}
                    </div>

                    <div className="flex shrink-0 items-center animate-slide-infinite">
                        {imagesIndex.map((_, index) => (
                            <img
                                key={index}
                                src={`/imgs/about/${index}.png`}
                                alt="Imagens"
                                className="shrink-0 origin-center snap-center w-[320px] aspect-3/4 px-2.5 object-cover rounded-[20px] transform-gpu will-change-transform transition-all duration-300 hover:scale-105"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
