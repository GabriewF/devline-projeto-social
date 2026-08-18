


export default function About() {

    const imagesIndex = new Array(20).fill(0)

    return (
        <div className="flex items-start justify-center flex-col h-screen">
            <div className="flex items-center justify-center w-screen flex-col text-white">
                <h1 className="text-[72px] font-extrabold">Sobre o curso de <span className="text-[#8E7BFF]">Desenvolvimento de Sistemas</span></h1>
                <p className="text-[30px] text-center text-color">Se você gosta de criatividade e tecnologia, o curso de <span className="text-[#7F00FF]">desenvolvimento de sistemas</span> é o melhor para transformar ideias em realidade</p>
            </div>
            <div className="flex flex-1 items-center justify-center px-[40px]">
                <div className="flex items-center justify-center gap-[72px] overflow-x-scroll scrollbar-none snap-mandatory">
                    {
                        imagesIndex.map((_, index) => (
                            <img 
                                className="w-[426px] h-[568px] rounded-[10px] snap-center"
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