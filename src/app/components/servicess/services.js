import React from 'react'
import Image from 'next/image';
import "./style.css";
import { Almarai } from "next/font/google";

import front from './icons/front.svg'


const almarai = Almarai({
  subsets: ['arabic'],
  weight: '400'
})
function Services() {

  const service = [
    {
      icon: front,
      title: 'Front End Development',
      text: 'تصميم وتطوير الواجهات الاماميه لمواقع الانترنت باستخدام احدث الادوات والتقنيات'
    },
    {
      icon: front,
      title: 'Back End Development',
      text: 'تصميم وتطوير الواجهات الاماميه لمواقع الانترنت باستخدام احدث الادوات والتقنيات'
    },
    {
      icon: front,
      title: 'Full Stack Development',
      text: 'تصميم وتطوير الواجهات الاماميه لمواقع الانترنت باستخدام احدث الادوات والتقنيات'
    },
    {
      icon: front,
      title: 'Mobile Application',
      text: 'تصميم وتطوير الواجهات الاماميه لمواقع الانترنت باستخدام احدث الادوات والتقنيات'
    },
    {
      icon: front,
      title: 'UI / UX Design',
      text: 'تصميم وتطوير الواجهات الاماميه لمواقع الانترنت باستخدام احدث الادوات والتقنيات'
    },

    {
      icon: front,
      title: 'Cyber Security',
      text: 'تصميم وتطوير الواجهات الاماميه لمواقع الانترنت باستخدام احدث الادوات والتقنيات'
    },
    {
      icon: front,
      title: 'Front End Development',
      text: 'تصميم وتطوير الواجهات الاماميه لمواقع الانترنت باستخدام احدث الادوات والتقنيات'
    },
    {
      icon: front,
      title: 'Front End Development',
      text: 'تصميم وتطوير الواجهات الاماميه لمواقع الانترنت باستخدام احدث الادوات والتقنيات'
    },
  ]

  return (
    <div id='services' className='w-full bg-[#F0F0F0] px-[0%] py-24 flex flex-col items-center justify-center mt-[100px] relative'>
      <p className='bg-[#faa000] h-[3px] w-[10%] '></p>
      <h1 className='text-[#0c0c0c] text-[35px] mt-4 '>الخدمات التي نقدمها</h1>
      <p className='text-[22px] text-[#4A5568] text-center'>joscript مجموعة الكورسات والدورات التدريبيه التي نقدمها من خلال </p>

      {/* cards */}
      <div className='flex items-center justify-center  flex-wrap gap-5 max-[712px]:gap-1 max-[471px]:gap-1 mt-16 '>
        {
          service.map((item, index) => (
            <div id='card' key={index} className='w-[330px] h-auto bg-[#ffffff] rounded-[10px] shadow-[#00000015] shadow-lg px-4 py-9 flex flex-col justify-center cursor-pointer border-[1px] hover:border-[#fa9e00bc] hover:scale-[1.03] transition-all delay-75 max-[712px]:w-[220px]  max-[550px]:h-auto  max-[471px]:h-[200px]  max-[471px]:w-[135px]  '>
              <Image src={item.icon} className='border-[1px] border-[#FAA000] rounded-full p-1 scale-[1.2] max-[471px]:scale-[.9] max-[471px]:mb-[-8px]' alt='' />
              <p className='text-[21px] text-[#faa000] mt-4 font-bold max-[550px]:text-[17px] max-[712px]:text-[17px] max-[471px]:text-[14px]'>{item.title}</p>
              <p id='line' className='bg-[#faa000] h-[.5px] w-[30%] transition-all delay-75 '></p>
                <p id='text' className='text-[18.5px] text-[#4A5568] text-start  mt-5 max-[550px]:text-[15px] max-[712px]:text-[15px] max-[471px]:text-[12px] max-[471px]:m-0'>{item.text}</p>
            </div>
          ))
        }
      </div>


      <div className='w-[72px] h-[72px] rounded-full bg-gradient-to-r from-[#FAA000] to-[#FFD12D]  absolute left-[30%]  top-[-35px] z-[-1] '></div>
      <div className='w-[72px] h-[72px] rounded-full bg-gradient-to-r from-[#FAA000] to-[#FFD12D]  absolute right-[30%]  bottom-[-35px] z-[-1] '></div>

    </div>
  )
}

export default Services
