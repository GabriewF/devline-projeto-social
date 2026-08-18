import { Icon } from "@iconify/react";

interface Props {
    icon:string;
    label:string;
}

export default function CardDiscipline({ label, icon }: Props) {

    return (
        <div className="flex items-center justify-center w-[310px] h-[360px] rounded-[10px] flex-col gap-[20px] bg-[#0A0A1A] shadow-sm shadow-white/75  transition-transform duration-200 hover:translate-y-[-20px]">
            <Icon icon={icon} color="white" height={"141"} width={"141"} />
            <h2 className="text-[35px] text-center font-bricolage">{ label }</h2>
        </div>
    )
}