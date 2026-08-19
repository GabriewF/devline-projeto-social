import TurmaPhoto from "../../assets/avatars/turma.png"
export default function Invite() {
  return (
    <div className="font-bricolage top-100% text-white min-h-screen flex flex-col items-center">
    <h1 className="mt-10 font-bold text-[3rem]">Agora é com você, vem ser <span className="text-[#8E7BFF]">DS</span></h1>
    <p className="font-light text-[1.5rem] text-center">Descubra novas possibilidades, desenvolva seus talentos, explore diferentes<br/> 
caminhos e transforme seus conhecimentos em experiências que podem<br/>
abrir portas para o seu futuro.</p>
    <img src={TurmaPhoto} alt="Foto da Turma DS" className="w-250 mt-10" />
    </div>
  );
}