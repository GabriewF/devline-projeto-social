interface CardProp{
    name: string,
    image: string,
    about: string,
    rounded?: boolean
}

export default function TeacherCard({ name, image, about, rounded }: CardProp){
    return(
        <div className="
            bg-indigo-950/80
            text-white
            backdrop-blur-sm

            border border-indigo-500/20

            rounded-2xl p-6
            flex gap-4 items-center justify-start flex-col
            w-80.5 h-100 wrap-break-word
            transition-transform duration-300
            hover:scale-105

            shadow-[0_0_15px]
            shadow-indigo-700/50
        ">
            <img src={image} alt={name} className={`w-29 h-30 ${rounded ? "rounded-full" : ""}`}/>

            <div className="flex flex-col items-center text-center justify-center gap-4">
                <h1 className="text-3xl">{name}</h1>
                <p className='text-white/70 text-[16px] text-center font-light'>{about}</p>
            </div>
        </div>
    )
}
