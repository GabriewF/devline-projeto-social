import logomarcaInlineMono from "../../assets/logomarca+inline-mono.svg";

export default function Footer() {
    return (
        <footer className="flex flex-row items-center justify-center gap-10 py-12">
            <img src={logomarcaInlineMono} alt="Logomarca Monocromática" className="h-6" />

            <i className="h-12 rounded-full border border-white/25" />

            <p className="font-bricolage text-2xl font-light text-white/70">
                Seu futuro começa com a escolha <span className="font-bold">certa</span>.
            </p>
        </footer>
    );
}
