interface CardProp {
    name: string;
    image: string;
    about: string;
    rounded?: boolean;
}

export default function TeacherCard({ name, image, about, rounded }: CardProp) {
    return (
        <div className="flex flex-col items-center justify-start gap-4 max-w-64 px-4 py-10 rounded-2xl border border-indigo-500/20 bg-indigo-950/80 text-white shadow-[0_0_15px] shadow-indigo-700/50 backdrop-blur-sm transition-transform duration-300 wrap-break-word hover:scale-105">
            <img src={image} alt={name} className={`w-24 ${rounded ? "rounded-full" : ""}`} />

            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h1 className="text-2xl">{name}</h1>
                <p className="text-sm font-light text-white/70">{about}</p>
            </div>
        </div>
    );
}
