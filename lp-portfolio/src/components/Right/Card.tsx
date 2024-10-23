interface Education {
    period:string;
    subject:string;
    description:string;
    skills:string[]
}

export default function Card({period, subject, description, skills}:Education) {

    //Sa fac skill urile diferit

    return (
        <div className="flex items-start ">
            <div className="w-[30%] txt">
                <p>{period}</p>
            </div>
            <div className="w-[70%]">
                <p className="text-xl">{subject}</p>
                <p className="txt">{description}</p>
                <p className="text-[#fcd34d]">{skills}</p>
            </div>
        </div>
    )
}
