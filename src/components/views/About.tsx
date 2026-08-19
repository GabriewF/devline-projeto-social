export default function About() {
    const imagesIndex = new Array(16).fill(0);

    return (
        <div id="sobre" className="flex flex-col gap-8 w-full">
            <div className="flex flex-col items-center text-white font-bricolage">
                <h1 className="text-[3rem] font-extrabold [font-optical-size:6rem]">
                    Sobre o curso de <span className="text-signature-purple-500">Desenvolvimento de Sistemas</span>
                </h1>

                <p className="text-[25px] text-center text-white/60">
                    Se criatividade e tecnologia fazem parte de você, o curso de{" "}
                    <span className="text-signature-purple-200">
                        Desenvolvimento de
                        <br /> Sistemas
                    </span>{" "}
                    é a oportunidade perfeita para transformar suas ideias em soluções reais
                </p>
            </div>

            <div className="py-6 flex flex-1 items-center justify-center px-10">
                <div
                    className="
                    flex
                    w-4/5 py-6
                    items-center justify-start

                    mask-x
                    mask-x-from-95%

                    overflow-y-visible
                    overflow-x-auto

                    scrollbar-none
                "
                >
                    <div className="flex shrink-0 items-center animate-slide-infinite-slow">
                        {imagesIndex.map((_, index) => (
                            <img
                                className="
                                    w-[320px]
                                    object-cover
                                    aspect-3/4

                                    px-2.5

                                    rounded-[20px]
                                    snap-center
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    shrink-0
                                    will-change-transform

                                    transform-gpu
                                    origin-center
                                "

                                src={`/imgs/about/${index}.png`}
                                alt="Imagens"
                                key={index}
                            />
                        ))}
                    </div>

                    <div className="flex shrink-0 items-center animate-slide-infinite-slow">
                        {imagesIndex.map((_, index) => (
                            <img
                                className="
                                    w-[320px]
                                    object-cover
                                    aspect-3/4

                                    px-2.5

                                    rounded-[20px]
                                    snap-center
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    shrink-0
                                    will-change-transform

                                    transform-gpu
                                    origin-center
                                "

                                src={`/imgs/about/${index}.png`}
                                alt="Imagens"
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
