const links:string[] = ['https://github.com/Laur017','https://www.linkedin.com/in/laurentiu-popa-325a64156/','https://leetcode.com/u/Laur017/','https://www.instagram.com/popa_laurentiu_/']

export default function Social() {
  const goTo = (n:number) =>{
    window.open(links[n])
  }
  return (
    <div className='flex gap-[1rem] items-center'>
        <p className='size-10 cursor-pointer' onClick={()=>goTo(0)}><img className='git-img' /></p>
        <p className='size-10 cursor-pointer' onClick={()=>goTo(1)}><img className="linkedin-img" /></p>
        <p className='size-10 cursor-pointer' onClick={()=>goTo(2)}><img className="leetcode-img" /></p>
        <p className='size-10 cursor-pointer' onClick={()=>goTo(3)}><img className="instagram-img" /></p>
        <a className='size-10 cursor-pointer' href='mailto:popa.laur.01@gmail.com'><img className="mail-img"/></a>
    </div>
  )
}
