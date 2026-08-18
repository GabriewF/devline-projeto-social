import TeacherCard from "../ui/TeacherCard"
import fabio from '../../assets/avatars/Fabio.png'
import vidal from '../../assets/avatars/Vidal.png'
import naisa from '../../assets/avatars/Naisa.png'
import cleydson from '../../assets/avatars/Cleydson.png'


export default function Teachers() {
    return (
        <div className="bg-linear-to-r from-[#5500FF] from-0% via-[#0041CC] via-50% to-[#0A0A0A] to-100% text-white min-h-screen flex flex-col items-center">

            <div className="flex flex-col items-center mt-10 font-bold ">
                <h1 className="text-[3rem]">
                    Conheça nossos <span className="text-[#8E7BFF]">professores</span>
                </h1>

                <p className="text-[20px] text-white/50 text-center">
                    Professores experientes, fascinados por tecnologia e preparados para guiar<br />
                 você na sua trajetória
                </p>

            </div>

            <div className="flex flex-row gap-5 relative -bottom-30">
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
