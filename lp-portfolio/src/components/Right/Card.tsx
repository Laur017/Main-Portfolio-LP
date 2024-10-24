interface Education {
    period:string;
    subject:string;
    description:string;
    skills:string[]
}

export default function Card({period, subject, description, skills}:Education) {

    const Skill = skills.map(i => (
        <p>{i}</p>
    ))

    return (
        <div className="flex items-start lg:py-8 education-card">
            <div className="w-[30%] txt lg:px-8">
                <p>{period}</p>
            </div>
            <div className="w-[70%] lg:flex lg:flex-col lg:gap-[1rem]">
                <p className="text-xl">{subject}</p>
                <p className="txt">{description}</p>
                <p className="skills">{Skill}</p>
            </div>
        </div>
    )
}
