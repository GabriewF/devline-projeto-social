import { useState } from "react";
import CardDiscipline from "../ui/Disciplins/Card";
import { Icon } from "@iconify/react";

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
            label: <span>Programação<br />Web</span>,
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

    const [startIndex, setStartIndex] = useState(0);
    const [lastIndex, setlastIndex] = useState(2);

    const nextItems = () => {
        setStartIndex(startIndex + 3);
        setlastIndex(lastIndex + 3);
        console.log(items.length);
    };

    const backItems = () => {
        setStartIndex(startIndex - 3);
        setlastIndex(lastIndex - 3);
    };

    return (
        <div className="flex flex-col gap-12 items-start justify-center text-white text-center font-bricolage">
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

            <div className="flex gap-8 items-center justify-center w-full">
                <button
                    className={startIndex == 0 ? "opacity-0 cursor-default" : "opacity-100 cursor-pointer"}
                    disabled={startIndex == 0}
                    onClick={backItems}
                >
                    <Icon icon="ic:round-play-arrow" className="rotate-180" width={60} height={60} />
                </button>

                <div className="flex items-center justify-start gap-5">
                    {items
                        .filter((_, index) => index >= startIndex && index <= lastIndex)
                        .map((v) => <CardDiscipline icon={v.icon} label={v.label} />)}
                </div>

                <button
                    className={
                        lastIndex >= items.length - 1 ? "opacity-0 cursor-default" : "opacity-100 cursor-pointer"
                    }
                    disabled={lastIndex >= items.length - 1}
                    onClick={nextItems}
                >
                    <Icon icon="ic:round-play-arrow" width={60} height={60} />
                </button>
            </div>
        </div>
    );
}
