import Card from "./Card";
import CV from '../../../public/files/Popa_Laurențiu_CV.pdf'

const experience:{
  period:string;
  subject:string;
  description:string;
  skills:string[]}[] = [
  {
    "period" :"2023 - PRESENT",
    "subject" : "Master in Software Development and Business Information Systems",
    "description" : "Learned a lot of things iaibal",
    "skills" : ["Team work", "BI"]
  },
  {
    "period" :"2019 - 2023",
    "subject" : "Bachelor in Computer Science",
    "description" : "Learned a lot of things iaibal",
    "skills" : ["Javascript", "Python"]
  }
]


export default function Experience() {

  const Cards = experience.map(i => (
    <Card period={i.period} subject={i.subject} description={i.subject} skills={i.skills}/>
  ))

  return (
    <div className="">
      {Cards}
      <a className="hover:text-[#fcd34d] cursor-pointer lg:px-8" href={CV} download="Popa Laurențiu CV" target="_blank">View Resume ↗</a>
    </div>
  )
}
