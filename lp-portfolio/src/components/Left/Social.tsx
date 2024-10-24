import Git from '../../assets/icons/github.png'
import Linkedin from '../../assets/icons/linkedin.png'
import Leetcode from '../../assets/icons/leetcode.png'
import Instagram from '../../assets/icons/instagram.png'
import Gmail from '../../assets/icons/email.png'

const links:string[] = ['https://github.com/Laur017','https://www.linkedin.com/in/laurentiu-popa-325a64156/','https://leetcode.com/u/Laur017/','https://www.instagram.com/popa_laurentiu_/']

export default function Social() {
  const goTo = (n:number) =>{
    window.open(links[n])
  }
  return (
    <div className='flex gap-[1rem] items-center'>
        <p className='size-10 cursor-pointer' onClick={()=>goTo(0)}><img src={Git} /></p>
        <p className='size-10 cursor-pointer' onClick={()=>goTo(1)}><img src={Linkedin} /></p>
        <p className='size-10 cursor-pointer' onClick={()=>goTo(2)}><img src={Leetcode} /></p>
        <p className='size-10 cursor-pointer' onClick={()=>goTo(3)}><img src={Instagram} /></p>
        <a className='size-10 cursor-pointer' href='mailto:popa.laur.01@gmail.com'><img src={Gmail} /></a>
    </div>
  )
}
