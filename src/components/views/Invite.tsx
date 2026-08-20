import TurmaPhoto from "../../assets/avatars/turma.png";

export default function Invite() {
    return (
        <div id="vem-ser-ds" className="flex flex-col items-center top-100% font-bricolage text-white">
            <h1 className="mt-10 text-[3rem] font-bold">
                Agora é com você, vem ser <span className="text-[#8E7BFF]">DS</span>
            </h1>
            <p className="text-center text-[1.5rem] font-light">
                Descubra novas possibilidades, desenvolva seus talentos, explore diferentes
                <br />
                caminhos e transforme seus conhecimentos em experiências que podem
                <br />
                abrir portas para o seu futuro.
            </p>
            <img src={TurmaPhoto} alt="Foto da Turma DS" className="mt-10 w-250" />
        </div>
    );
}
