import { Icon } from "@iconify/react";

interface Props {
    icon:string;
    label:string;
}

export default function CardDiscipline({ label, icon }: Props) {

    return (
        <div className="flex items-center justify-center w-[310px] h-[360px] rounded-[10px] flex-col gap-[20px] bg-[#0A0A1A]">
            <Icon icon={icon} color="white" height={"141"} width={"141"} />
            <h2 className="text-[35px] text-center">{ label }</h2>
        </div>
    )
}