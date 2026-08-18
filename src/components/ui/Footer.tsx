import logomarcaInlineMono from "../../assets/logomarca+inline-mono.svg";

export default function Footer() {
    return (
        <footer className="bg-black h-max flex flex-row justify-center items-center gap-10 py-12">
            <img src={logomarcaInlineMono} alt="Logomarca Monocromática" className="h-6" />

            <i className="border border-white/25 rounded-full h-12" />

            <p className="font-bricolage font-light text-2xl text-white/70">
                Seu futuro começa com a escolha <span className="font-bold">certa</span>.
            </p>
        </footer>
    )
}