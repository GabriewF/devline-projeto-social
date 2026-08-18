import TeacherCard from "../ui/TeacherCard"
import fabio from '../../assets/avatars/Fabio.png'
import vidal from '../../assets/avatars/Vidal.png'
import naisa from '../../assets/avatars/Naisa.png'
import cleydson from '../../assets/avatars/Cleydson.png'


export default function Teachers() {
    return (
        <div className="font-bricolage text-white flex flex-col gap-16 items-center">
            <div className="flex flex-col items-center font-bold ">
                <h1 className="text-5xl">
                    Conheça Nossos <span className="text-[#8E7BFF]">Professores</span>
                </h1>

                <p className="text-xl text-white/50 text-center font-light">
                    Professores experientes, fascinados por tecnologia e preparados para guiar<br />
                 você na sua trajetória
                </p>
            </div>

            <div className="flex flex-row gap-20">
                <TeacherCard
                    name="Fabio Fernandes"
                    image={fabio}
                    about="Coordenadoras do Curso de Analise e Desenvolvimento de Sistemas"
                />

                <TeacherCard
                    name="J. Vidal"
                    image={vidal}
                    about="Coordenadoras do Curso de Analise e Desenvolvimento de Sistemas"
                />

                <TeacherCard
                    name="Naisa Melo"
                    image={naisa}
                    about="Coordenadoras do Curso de Analise e Desenvolvimento de Sistemas"
                    rounded
                />

                <TeacherCard
                    name="Cleydson Oliveira"
                    image={cleydson}
                    about="Coordenadoras do Curso de Analise e Desenvolvimento de Sistemas"
                    rounded
                />
            </div>

        </div>
    )
}
