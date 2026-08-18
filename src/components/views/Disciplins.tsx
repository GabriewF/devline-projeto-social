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
            label: "Programação Web",
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

    return (
        <div className="flex items-start justify-center text-white flex-col">
            <div className="h-[236px] flex items-center justify-center flex-col w-screen">
                <h1 className="text-[72px] font-extrabold">
                    Disciplinas <span className="text-[#8E7BFF]">Abordadas</span>{" "}
                </h1>
                <p className="text-[30px]">Algumas das principais materias </p>
            </div>
            <div className="flex flex-1 items-center justify-center w-screen">
                <div className="flex ">
                    <button>
                        <Icon icon="ic:round-play-arrow" className="rotate-180" width={60} height={60} />
                    </button>
                    <div className="flex items-center justify-start gap-[20px]">
                        {items
                            .filter((_, index) => index >= startIndex && index <= lastIndex)
                            .map((v) => (
                                <CardDiscipline icon={v.icon} label={v.label} />
                            ))}
                    </div>
                    <button>
                        <Icon icon="ic:round-play-arrow" width={60} height={60} />
                    </button>
                </div>
            </div>
        </div>
    );
}
