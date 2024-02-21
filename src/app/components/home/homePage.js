import React from 'react'
import Image from 'next/image';
import web  from './imgs/web-development.svg'
function HomePage() {
  return (
    <div id='home' className=' w-full px-[7%] flex justify-between items-center gap-10 max-[1130px]:flex-col-reverse max-[1130px]:mt-16 ' >
      
        <Image src={web} alt='' width={600} />
        <div className='text-end max-[1130px]:text-center ' >
          <h1 className='text-[#FAA000] text-[48px] max-[523px]:text-[44px]'>joscript</h1>
          <h1  className='text-[#0c0c0c] text-[48px] mb-[10px] max-[523px]:text-[44px]'>أكاديمية لتعليم <span  className='text-[#FAA000] '>البرمجة</span> </h1>
          {/* <br/> */}
          <p className='text-[#4A5568] text-[23px] max-[500px]:text-[20px]'>نهدف إلى نشر المعرفة البرمجية ومساعدة الآخرين على تعلمها</p>
          <p className='text-[#4A5568] text-[23px] max-[500px]:text-[20px]'>نسعى لتوفير بيئة تعليمية إيجابية وداعمة للطلاب من جميع المستويات، من المبتدئين إلى المتقدمين</p>
          <br/>
          <br/>
          <button className='w-[140px] h-[45px] text-[22px]  bg-gradient-to-r from-[#FAA000] to-[#FFD12D] text-center leading-[40px] rounded-md text-[#0c0c0c] shadow-[0_0_8px_0_#FA000] hover:shadow-[#FAA000] border-[none] border-[.5px] hover:border-[#ffffff] transition-all delay-75 '><a  href="https://www.facebook.com/profile.php?id=61553287433285&locale=ar_AR" target='_blank'>تواصل معنا</a>  </button>
        </div>
        

    </div>
  )
}

export default HomePage;
