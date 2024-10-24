interface Work {
    image:string;
    subject:string;
    link:string;
    description:string;
    skills:string[]
}

export default function WorkCard({image, subject, link, description, skills}:Work) {
    const Skill = skills.map(i => (
        <p>{i}</p>
    ))
    return (
        <div className="flex items-start ">
            <div className="w-[30%] txt">
                <img src={image} />
            </div>
            <div className="w-[70%]">
                <p className="text-xl">{subject}</p>
                <p className="txt">{description}</p>
                <p className="text-[#fcd34d] skills">{Skill}</p>
            </div>
        </div>
    )
}
