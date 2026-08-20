interface TProps {
    children: React.ReactNode;
}

export default function TrajectoryItem(props: TProps) {
    return (
        <div className="flex flex-col max-w-md gap-8 even:col-start-1 even:text-right odd:col-start-3 odd:text-left">
            {props.children}
        </div>
    );
}
