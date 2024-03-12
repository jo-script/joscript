import React from 'react'
import Image from 'next/image';
import web from './imgs/web-development.svg'
function HomePage() {
  return (
    <div id='home' className=' w-full mt-28 px-[7%] flex justify-between items-center gap-10 max-[1130px]:flex-col-reverse max-[1130px]:mt-16 ' >

      <Image src={web} alt='' width={600} />
      <div className='text-end max-[1130px]:text-center ' >
        <h1 className='text-[#FAA000] text-[48px] max-[523px]:text-[44px]'>joscript</h1>
        <h1 className='title text-[#eef6ff] text-[48px] mb-[10px] max-[523px]:text-[44px]'>أكاديمية لتعليم <span className='text-[#FAA000] '>البرمجة</span> </h1>
        {/* <br/> */}
        <p className=' text text-[#9da1a7] text-[23px] max-[500px]:text-[20px]'>نهدف إلى نشر المعرفة البرمجية ومساعدة الآخرين على تعلمها</p>
        <p className=' text text-[#9da1a7] text-[23px] max-[500px]:text-[20px]'>نسعى لتوفير بيئة تعليمية إيجابية وداعمة للطلاب من جميع المستويات، من المبتدئين إلى المتقدمين</p>
        <br />
        <br />
        <div className='flex items-center justify-end gap-7'>
          <button className='w-[140px] h-[45px] text-[19px] text-[#faa000]  hover:bg-[#faa000] border-[1px] border-[#faa000] text-center leading-[40px] rounded-md hover:text-[#0c0c0c] shadow-[0_0_8px_0_#FA000] hover:shadow-[#fa9e0063] transition-all delay-75 '><a href="https://forms.microsoft.com/r/ELP7xVcXbS" target='_blank'>سجل معنا</a>  </button>
          <button className='w-[140px] h-[45px] text-[18px]  bg-[#faa000] text-center leading-[40px] rounded-md text-[#0c0c0c] shadow-[0_0_8px_0_#FA000] hover:shadow-[#fa9e00] transition-all delay-75 '><a href="https://www.facebook.com/profile.php?id=61553287433285&locale=ar_AR" target='_blank'>تواصل معنا</a>  </button>
        </div>
      </div>


    </div>
  )
}

export default HomePage;
