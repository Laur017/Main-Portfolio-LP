import WorkCard from "./WorkCard"

const work:{
  image:string;
  subject:string;
  link:string;
  description:string;
  skills:string[]}[] = [
  {
    "image" :"2023 - PRESENT",
    "subject" : "Master in Software Development and Business Information Systems",
    "link":"",
    "description" : "Learned a lot of things iaibal",
    "skills" : ["Team work", "BI"]
  },
  {
    "image" :"2023 - PRESENT",
    "subject" : "Master in Software Development and Business Information Systems",
    "link":"",
    "description" : "Learned a lot of things iaibal",
    "skills" : ["Team work", "BI"]
  },
  {
    "image" :"2023 - PRESENT",
    "subject" : "Master in Software Development and Business Information Systems",
    "link":"",
    "description" : "Learned a lot of things iaibal",
    "skills" : ["Team work", "BI"]
  },
]


export default function Projects() {

  const Work = work.map(i => (
    <WorkCard image = {i.image} subject = {i.subject} link = {i.subject} description={i.description} skills={i.skills}/>
  ))

  return (
    <div>
      {Work}
    </div>
  )
}
