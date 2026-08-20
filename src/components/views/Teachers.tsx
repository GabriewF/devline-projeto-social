import TeacherCard from "../ui/TeacherCard";
import fabio from "../../assets/avatars/Fabio.png";
import vidal from "../../assets/avatars/Vidal.png";
import naisa from "../../assets/avatars/Naisa.png";
import cleydson from "../../assets/avatars/Cleydson.png";
import { motion, type Variants } from "framer-motion";

export default function Teachers() {
    // Animação para o container dos cards (gerencia o tempo de aparição em cascata)
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15, // Atraso entre a aparição de cada card
            },
        },
    };

    // Animação individual para cada card
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            },
        },
    };

    return (
        <div
            id="professores"
            className="flex flex-col items-center gap-16 font-bricolage text-white"
        >
            {/* Bloco de Título */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center font-bold"
            >
                <h1 className="text-5xl">
                    Conheça Nossos <span className="text-signature-purple-500">Professores</span>
                </h1>

                <p className="text-center text-2xl font-light text-white/60">
                    Professores experientes, apaixonados por tecnologia e prontos para
                    <br />
                    transformar conhecimento em oportunidades para o seu futuro.
                </p>
            </motion.div>

            {/* Grid/Linha dos Cards com Animação em Cascata */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-row gap-8 px-24"
            >
                <motion.div variants={cardVariants}>
                    <TeacherCard
                        name="Fabio Fernandes"
                        image={fabio}
                        about="Professor técnico responsável pelas disciplinas de POO e APS, com foco nos principais conteúdos e práticas abordados ao longo do curso."
                    />
                </motion.div>

                <motion.div variants={cardVariants}>
                    <TeacherCard
                        name="J. Vidal"
                        image={vidal}
                        about="Professor técnico e ex-coordenador da área, responsável por disciplinas e projetos voltados ao desenvolvimento de startups e sistemas embarcados."
                    />
                </motion.div>

                <motion.div variants={cardVariants}>
                    <TeacherCard
                        name="Naisa Melo"
                        image={naisa}
                        about="Professora e atual coordenador da área, responsável pela formação e orientação dos alunos em tecnologias de redes e desenvolvimento web."
                        rounded
                    />
                </motion.div>

                <motion.div variants={cardVariants}>
                    <TeacherCard
                        name="Cleydson Oliveira"
                        image={cleydson}
                        about="Professor responsável pelo ensino de Desenvolvimento Mobile e Banco de Dados, preparando os alunos para criar aplicações e trabalhar com o gerenciamento"
                        rounded
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
