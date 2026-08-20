import { Icon } from "@iconify/react";
import type { JSX } from "react";

interface Props {
    icon: string;
    label: string | JSX.Element;
}

export default function CardDiscipline({ label, icon }: Props) {
    return (
        <div className="flex flex-col items-center justify-center gap-6 w-78 h-90 rounded-2xl bg-[#0A0A1A]/50 text-center font-bricolage transition-transform duration-275 hover:-translate-y-5">
            <Icon icon={icon} color="white" height="141" width="141" />
            <h2 className="text-4xl">{label}</h2>
        </div>
    );
}
