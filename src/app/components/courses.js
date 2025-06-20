'use client'
import { Roboto } from 'next/font/google';

const poppins = Roboto({ subsets: ['latin'], weight: ['500'], });

import Image from 'next/image'
import React, { useState } from 'react'


function Courses() {

  const [openTap, setOpenTap] = useState()
  const [index, setIndex] = useState()

  const data = [
    {
      icon: '/icons-cu/Asset selection-bro.svg',
      title: 'Front End Development',
      description: 'بناء وتطوير الواجهات الاماميه لمواقع الانترنت',
      content: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'tailwindCss', 'ReactJs', 'NextJs', 'Git', 'GitHub', 'Problem-Solving',],
      color: ['#3b88e9', '#9162c0', '#d17724', '#449d5d'],
      background: ['#3b88e925', '#9162c025', '#d1772425', '#449d5d25']
    },
    {
      icon: '/icons-cu/Server status-pana.svg',
      title: 'Back End Development',
      description: 'بناء وتطوير الواجهات الخلفيه لمواقع الانترنت',
      content: ['Node.js', 'Express', 'MongoDb', 'Mongoose', 'Postman', 'Network', 'Algorithm',],
      color: ['#3b88e9', '#9162c0', '#d17724', '#449d5d'],
      background: ['#3b88e925', '#9162c025', '#d1772425', '#449d5d25']
    },
    {
      icon: '/icons-cu/Mobile apps-cuate.svg',
      title: 'Mobile Application',
      description: 'بناء وتطوير تطبيقات الجوال لأنظمة التشغيل المختلفة',
      content: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'tailwindCss', 'ReactJs', 'NextJs', 'Git', 'GitHub', 'Problem-Solving',],
      color: ['#3b88e9', '#9162c0', '#d17724', '#449d5d'],
      background: ['#3b88e925', '#9162c025', '#d1772425', '#449d5d25']
    },
    {
      icon: '/icons-cu/UI-UX differences-cuate.svg',
      title: 'UI / UX Design',
      description: 'تصميم الواجهات الاماميه لمواقع الانترنت والتطبيقات',
      content: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'tailwindCss', 'ReactJs', 'NextJs', 'Git', 'GitHub', 'Problem-Solving',],
      color: ['#3b88e9', '#9162c0', '#d17724', '#449d5d'],
      background: ['#3b88e925', '#9162c025', '#d1772425', '#449d5d25']
    },
    {
      icon: '/icons-cu/Learning-cuate.svg',
      title: 'Kids programming',
      description: 'تعليم البرمجة للأطفال ',
      content: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'tailwindCss', 'ReactJs', 'NextJs', 'Git', 'GitHub', 'Problem-Solving',],
      color: ['#3b88e9', '#9162c0', '#d17724', '#449d5d'],
      background: ['#3b88e925', '#9162c025', '#d1772425', '#449d5d25']
    },
    {
      icon: '/icons-cu/Cyber attack-pana.svg',
      title: 'Cyber Security',
      description: 'تأمين المواقع والتطبيقات والأنظمه من الإختراق',
      content: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'tailwindCss', 'ReactJs', 'NextJs', 'Git', 'GitHub', 'Problem-Solving',],
      color: ['#3b88e9', '#9162c0', '#d17724', '#449d5d'],
      background: ['#3b88e925', '#9162c025', '#d1772425', '#449d5d25']
    },
    {
      icon: '/icons-cu/Hand coding-bro.svg',
      title: 'Computer basics',
      description: 'تعلم اساسيات الكمبيوتر وعلم الحاسوب من الصفر',
      content: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'tailwindCss', 'ReactJs', 'NextJs', 'Git', 'GitHub', 'Problem-Solving',],
      color: ['#3b88e9', '#9162c0', '#d17724', '#449d5d'],
      background: ['#3b88e925', '#9162c025', '#d1772425', '#449d5d25']
    },

  ]

  return (
    <div id='courses' style={{ direction: 'ltr', }} className='relative w-full flex flex-col items-center justify-center gap-10'>
      <div className='w-full flex items-center justify-center flex-col text-center gap-3'>
        <p className='h-[2px] w-40 rounded-md bg-[#17191a] dark:bg-gray-100 mb-2'></p>
        <h1 className='text-3xl font-bold text-[#17191a] dark:text-gray-100'>الكورسات التي نقدمها</h1>
        <p className='text-[#2E3539] dark:text-[#bfbfbf] text-lg'>مجموعة الكورسات والدورات التدريبيه التي نقدمها من خلال جوسكريبت</p>
      </div>


      {/* background tap close  */}
      <div onClick={() => setOpenTap(!openTap)} className={`${openTap ? ' scale-1 w-full h-[100vh]' : 'scale-0 w-0 h-0'} fixed top-0 left-0 z-[9999]   backdrop-blur-sm bg-black/30`}>
      </div>



      <div className='w-full grid grid-cols-4 gap-5 max-[500px]:grid-cols-1 max-[900px]:grid-cols-2 max-[1100px]:grid-cols-3 relative '>

        {
          data.map((item, index) => (
            <div key={index} 
              className={`backdrop-blur-md bg-[#ffffff06]  hover:border-[#17191a57] dark:hover:bg-[linear-gradient(#fff1,transparent)] transition-[all_.3s] z-10 cursor-pointer border border-[rgba(255,255,255,0.1)] shadow-[0_0px_10px_rgba(0,0,0,0.15)] dark:border-[#3b3a3a] p-5 rounded-md flex flex-col items-center justify-center gap-5 text-gray-100 dark:text-gray-100 overflow-hidden`}>
              <Image src={item.icon} alt={item.title} width={120} height={120} className='scale-[1.3]' />
              <div className='flex flex-col justify-center items-center gap-3 '>
                <h1 className={`${poppins.className} m-0 text-xl text-[#17191a] dark:text-gray-100 font-bold `}>{item.title}</h1>
                <p className='w-full text-center text-[#17191a] text-md dark:text-gray-100 mt-[-10px]'>{item.description}</p>
              </div>
              {/* <div className=' flex items-center justify-center flex-wrap gap-2 '>
                {
                  item.content.map((vv, i) => (
                    <p className=' px-2 rounded-md text-sm font-semibold'
                      key={i} style={{
                        color: item.color[i % item.color.length],
                        backgroundColor: item.background[i % item.background.length],
                      }}
                    >
                      {vv}
                    </p>
                  ))
                }
              </div> */}
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default Courses
