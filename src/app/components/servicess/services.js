import React from 'react'
import Image from 'next/image';
import "./style.css";
import { Almarai } from "next/font/google";

import front from './icons/front.png'
import back from './icons/backend.png'
import fullStack from './icons/fullStack.png'
import mobile from './icons/mobile.png'
import uiUx from './icons/ui-design.png'
import security from './icons/cyber-security.png'
import pc from './icons/pc.png'
import child from './icons/child.png'


const almarai = Almarai({
  subsets: ['arabic'],
  weight: '400'
})
function Services() {

  const service = [
    {
      icon: front,
      title: 'Front End Development',
      text: 'بناء وتطوير الواجهات الاماميه لمواقع الانترنت'
    },
    {
      icon: back,
      title: 'Back End Development',
      text: 'بناء وتطوير الواجهات الخلفيه لمواقع الانترنت'
    },
    {
      icon: fullStack,
      title: 'Full Stack Development',
      text: 'بناء وتطوير الواجهات والخلفيه والاماميه لمواقع الانترنت'
    },
    {
      icon: mobile,
      title: 'Mobile Application',
      text: ' بناء وتطوير تطبيقات الجوال لأنظمة التشغيل المختلفة'
    },
    {
      icon: uiUx,
      title: 'UI / UX Design',
      text: 'تصميم الواجهات الاماميه لمواقع الانترنت والتطبيقات'
    },

    {
      icon: security,
      title: 'Cyber Security',
      text: 'تأمين المواقع والتطبيقات والأنظمه من الإختراق'
    },
    {
      icon: pc,
      title: 'Computer basics',
      text:'تعلم اساسيات الكمبيوتر وعلم الحاسوب من الصفر'
    },
    {
      icon: child,
      title: 'Programming for children',
      text:'تعليم البرمجة للأطفال لجميع الأعمار والمستويات'
    },
  ]


  let mediaText = 'max-[550px]:text-[15px] max-[712px]:text-[15px] max-[471px]:text-[14px] max-[471px]:m-0'
  let mediaTitle = 'max-[550px]:text-[17px] max-[712px]:text-[17px] max-[471px]:text-[15px]'

  return (
    <div className=' w-full relative '>
    
    <div id='services' className='gray w-full bg-[#1d25367a] backdrop-blur-md py-24 flex flex-col items-center justify-center mt-[100px] relative z-50'>
      <p className='bg-[#faa000] h-[3px]  w-[10%] '></p>
      <h1 className='title text-[#eef6ff]  text-[35px] mt-4 '>الخدمات التي نقدمها</h1>
      <p className='text text-[22px] text-[#9da1a7] text-center max-[500px]:text-[16px] max-[500px]:w-[70%]'> مجموعة الكورسات والدورات التدريبيه التي نقدمها من خلال جو اسكريبت</p>

      {/* cards */}
      <div className='flex items-center justify-center  flex-wrap gap-5 max-[712px]:gap-1 mt-16 max-[673px]:grid max-[673px]:grid-cols-2 place-items-center max-[673px]:w-[95%] max-[673px]:gap-2'>
        {
          service.map((item, index) => (
            <div key={index} className='card w-[330px] backdrop-blur-sm max-h-[250px] bg-[#111827] rounded-[10px] shadow-[#9292920c] shadow-lg px-4 py-9 flex flex-col justify-center cursor-default border-[1px] border-[#848d9778]  hover:scale-[1.02] transition-all delay-75 max-[712px]:w-[220px]  max-[550px]:h-auto  max-[471px]:h-[200px] max-[673px]:w-full'>
              <Image src={item.icon} width={50} className='h-[50px] p-1 scale-[1.2] max-[471px]:scale-[.9] max-[471px]:mb-[-8px]' alt='' />
              <p className={`text-[21px] text-[#faa000] mt-4 font-bold ${mediaTitle} `}>{item.title}</p>
              <p id='line' className='bg-[#faa000] h-[.5px] w-[30%] transition-all delay-75'></p>
              <p className={`text text-[18.5px] text-[#9da1a7] text-start mt-5 ${mediaText}`}>{item.text}</p>
            </div>
          ))
        }
      </div>
    </div>
      {/* circle */}
      <div className='w-[72px] h-[72px] rounded-full bg-gradient-to-r bg-[#fa9e00] absolute left-[30%]  top-[-30px] z-1 '></div>
      <div className='w-[72px] h-[72px] rounded-full bg-gradient-to-r  from-[#FAA000] to-[#FFD12D] absolute right-[30%] bottom-[-30px] z-1'></div>
    
    </div>
  )
}

export default Services
