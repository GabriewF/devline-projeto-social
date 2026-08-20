import { motion } from "framer-motion";
import TurmaPhoto from "../../assets/avatars/turma.png";

export default function Invite() {
    return (
        <div
            id="vem-ser-ds"
            className="flex flex-col items-center top-100% font-bricolage text-white"
        >
            {/* Bloco de Texto com Entrada Suave */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
            >
                <h1 className="mt-10 text-[3rem] font-bold">
                    Agora é com você, vem ser <span className="text-[#8E7BFF]">DS</span>
                </h1>
                <p className="text-[1.5rem] font-light">
                    Descubra novas possibilidades, desenvolva seus talentos, explore diferentes
                    <br />
                    caminhos e transforme seus conhecimentos em experiências que podem
                    <br />
                    abrir portas para o seu futuro.
                </p>
            </motion.div>

            {/* Imagem com Atraso e Zoom In Sutil */}
            <motion.img
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                src={TurmaPhoto}
                alt="Foto da Turma DS"
                className="mt-10 w-250"
            />
        </div>
    );
}
