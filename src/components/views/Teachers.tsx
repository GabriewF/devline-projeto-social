import TeacherCard from "../ui/TeacherCard";
import fabio from "../../assets/avatars/Fabio.png";
import vidal from "../../assets/avatars/Vidal.png";
import naisa from "../../assets/avatars/Naisa.png";
import cleydson from "../../assets/avatars/Cleydson.png";

export default function Teachers() {
    return (
        <div id="professores" className="flex flex-col items-center gap-16 font-bricolage text-white">
            <div className="flex flex-col items-center font-bold">
                <h1 className="text-5xl">
                    Conheça Nossos <span className="text-signature-purple-500">Professores</span>
                </h1>

                <p className="text-center text-2xl font-light text-white/60">
                    Professores experientes, apaixonados por tecnologia e prontos para
                    <br />
                    transformar conhecimento em oportunidades para o seu futuro.
                </p>
            </div>

            <div className="flex flex-row gap-8 px-24">
                <TeacherCard
                    name="Fabio Fernandes"
                    image={fabio}
                    about="Professor técnico responsável pelas disciplinas de POO e APS, com foco nos principais conteúdos e práticas abordados ao longo do curso."
                />

                <TeacherCard
                    name="J. Vidal"
                    image={vidal}
                    about="Professor técnico e ex-coordenador da área, responsável por disciplinas e projetos voltados ao desenvolvimento de startups e sistemas embarcados."
                />

                <TeacherCard
                    name="Naisa Melo"
                    image={naisa}
                    about="Professora e atual coordenador da área, responsável pela formação e orientação dos alunos em tecnologias de redes e desenvolvimento web."
                    rounded
                />

                <TeacherCard
                    name="Cleydson Oliveira"
                    image={cleydson}
                    about="Professor responsável pelo ensino de Desenvolvimento Mobile e Banco de Dados, preparando os alunos para criar aplicações e trabalhar com o gerenciamento"
                    rounded
                />
            </div>
        </div>
    );
}
