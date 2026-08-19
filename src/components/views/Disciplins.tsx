import CardDiscipline from "../ui/DisciplinesCard";

export default function Disciplins() {
    const items = [
        {
            icon: "heroicons:cpu-chip-20-solid",
            label: "AMC",
        },
        {
            icon: "griddy-icons:python",
            label: "Lógica de Programação",
        },
        {
            icon: "akar-icons:html-fill",
            label: (
                <span>
                    Programação
                    <br />
                    Web
                </span>
            ),
        },
        {
            icon: "file-icons:arduino",
            label: "Sistema Embarcados",
        },
        {
            icon: "zondicons:network",
            label: "Redes",
        },
        {
            icon: "boxicons:mobile",
            label: "Desenvolvimento Mobile",
        },
    ];

    return (
        <div
            id="disciplinas"
            className="flex flex-col gap-12 items-start justify-center text-white text-center font-bricolage"
        >
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="text-5xl font-extrabold">
                    Disciplinas <span className="text-signature-purple-500">Abordadas</span>{" "}
                </h1>
                <p className="text-2xl text-inherit/60">
                    Conheça algumas das principais matérias que fazem parte
                    <br />
                    da nossa formação em <span className="text-signature-purple-200">Desenvolvimento de Sistemas</span>.
                </p>
            </div>

            <div className="flex w-full justify-center">
                <div className="flex w-[70%] overflow-hidden scrollbar-none mask-x mask-x-from-95%">
                        
                    <div className="flex shrink-0 items-center gap-5 animate-slide-infinite">
                        {items.map((v, index) => (
                            <CardDiscipline
                                key={`first-${index}`}
                                icon={v.icon}
                                label={v.label}
                            />
                        ))}
                    </div>

                    <div className="flex shrink-0 items-center gap-5 animate-slide-infinite">
                        {items.map((v, index) => (
                            <CardDiscipline
                                key={`second-${index}`}
                                icon={v.icon}
                                label={v.label}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
