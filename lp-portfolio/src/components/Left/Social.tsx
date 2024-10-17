import Git from '../../assets/icons/github.png'
import Linkedin from '../../assets/icons/linkedin.png'
import Leetcode from '../../assets/icons/leetcode.png'
import Instagram from '../../assets/icons/instagram.png'
import Gmail from '../../assets/icons/email.png'

export default function Social() {
  return (
    <div className='flex gap-[1rem] items-center'>
        <p className='size-10 cursor-pointer'><img src={Git} /></p>
        <p className='size-10 cursor-pointer'><img src={Linkedin} /></p>
        <p className='size-10 cursor-pointer'><img src={Leetcode} /></p>
        <p className='size-10 cursor-pointer'><img src={Instagram} /></p>
        <p className='size-10 cursor-pointer'><img src={Gmail} /></p>
    </div>
  )
}
