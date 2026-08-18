interface CardProp{
    name: string,
    image: string,
    about: string,
    rounded?: boolean
}

export default function TeacherCard({ name, image, about, rounded }: CardProp){
    return(
        <div className="bg-indigo-950/80 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 text-white shadow-lg flex items-center justify-center flex-col w-80.5 h-100 wrap-break-word shadow-[0_0_15px_#8E7BFF]/50 transition-transform duration-300 hover:scale-[1.03] shadow-indigo-700/80">
            <img src={image} alt={name} className={`mt-[-40]w-29 h-30 ${rounded ? "rounded-full" : ""}`}/>
            <h1 className="text-[20px]">{name}</h1>
            <p className='text-white/70 text-[16px] text-center font-light'>{about} </p>
        </div>
    )
}
