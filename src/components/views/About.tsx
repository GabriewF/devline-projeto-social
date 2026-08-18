import { useState } from "react"



export default function About() {

    const imagesIndex = new Array(20).fill(0)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="flex flex-col h-screen w-full">
            <div className="h-[236px] flex flex-col items-center text-white font-bricolage">
                <h1 className="text-[3rem] font-extrabold [font-optical-size:6rem]">Sobre o curso de <span className="text-[#8E7BFF]">Desenvolvimento de Sistemas</span></h1>
                <p className="text-[25px] text-center text-white/60">Se você gosta de criatividade e tecnologia, o curso de <span className="text-[#7F00FF]">desenvolvimento de sistemas</span> é o melhor para transformar ideias em realidade</p>
            </div>

            <div className="flex flex-1 items-center justify-center px-10">
                <div 
                    className="flex items-center justify-start gap-18 overflow-x-scroll scrollbar-none snap-x snap-mandatory w-[78%] h-full px-5"
                    onScroll={(e) => {
                        const container = e.currentTarget

                        const itemWidth = 320
                        const gap = 72
                        const step = itemWidth + gap

                        const index = Math.round(container.scrollLeft / step)

                        setActiveIndex(index + 1)
                    }}
                >

                    
                    {
                        imagesIndex.map((_, index) => (
                            <img
                                className={`
                                    w-80 h-100 
                                    rounded-[20px] 
                                    snap-center
                                    transition-all
                                    duration-700
                                    
                                    ${index == activeIndex && 'scale-110'}
                                `}
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
