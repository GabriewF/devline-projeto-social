


export default function About() {

    const imagesIndex = new Array(20).fill(0)

    return (
        <div className="flex flex-col ">
            <div className="flex flex-col items-center text-white font-bricolage">
                <h1 className="text-[72px] font-extrabold [font-optical-size:6rem]">Sobre o curso de <span className="text-[#8E7BFF]">Desenvolvimento de Sistemas</span></h1>
                <p className="text-[30px] text-center text-white/60">Se você gosta de criatividade e tecnologia, o curso de <span className="text-[#7F00FF]">desenvolvimento de sistemas</span> é o melhor para transformar ideias em realidade</p>
            </div>

            <div className="flex flex-1 items-center justify-center px-10">
                <div className="flex items-center justify-center gap-18 overflow-x-scroll scrollbar-none snap-mandatory">
                    {
                        imagesIndex.map((_, index) => (
                            <img
                                className="w-106 h-142 rounded-[10px] snap-center"
                                src={`/imgs/about/${index}.png`}
                                alt="Imagens"
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
