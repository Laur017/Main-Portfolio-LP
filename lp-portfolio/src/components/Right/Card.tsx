interface Education {
    period:string;
    subject:string;
    description:string;
    skills:string[]
}

export default function Card({period, subject, description, skills}:Education) {
    return (
        <div className="flex items-start ">
            <div className="w-[30%]">
                <p>{period}</p>
            </div>
            <div className="w-[70%]">
                <p className="text-xl">{subject}</p>
                <p>{description}</p>
                <p className="bg-green-100">{skills}</p>
            </div>
        </div>
    )
}
