
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import front from './icons/front.png'
import back from './icons/backend.png'
import fullStack from './icons/fullStack.png'
import mobile from './icons/mobile.png'
import ui from './icons/ui-design.png'
function Roadmap() {


  return (
    <div className='w-full bg-[#0d1117] px-[2%] flex flex-col items-center justify-center py-24 relative'>
      <div className='w-full flex flex-col items-center'>
        <p className='bg-[#faa000] h-[3px] w-[10%] '></p>
        <h1 className='text-[#eef6ff] text-[35px] mt-4 '> المسارات التعليمية</h1>
        <p className='text-[20px] text-[#9da1a7] text-center mt-2 max-[500px]:text-[16px] max-[500px]:w-[78%]'>فريق ألعمل القائم على الإدارة والتدريس في مختلف المجالات البرمجية</p>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-5 gap-y-16 max-[712px]:gap-1 mt-16 max-[673px]:grid max-[673px]:grid-cols-2 place-items-center max-[673px]:w-[95%] max-[673px]:gap-2">

      <Link href='/components/roadmap/frontEnd' className='w-60 h-40 max-[673px]:w-full'>
          <div className=' w-full h-full flex flex-col items-center justify-center gap-2 rounded-md cursor-pointer bg-[#daf7ff31] border-[1px] border-[#6c6c6c33] backdrop-blur-md p-5 overflow-hidden relative after:content-[""] after:absolute after:top-0 after:right-0  after:w-10 after:h-10 after:bg-[#3e226c61] after:backdrop-blur-sm after:rounded-bl-full hover:text-white hover:after:w-full hover:after:h-full hover:after:rounded-none after:transition-[all_.3s] after:z-[-1] before:content-[""] before:absolute before:top-0 before:right-0  before:w-10 before:h-10 before:bg-[#610bef] before:rounded-bl-full before:transition-[all_.3s] before:z-[2] z-30 '>
            <Image src={front} width={50} alt='' />
            <h3 className='transition-[all_.3s] text-[#faa000] font-bold text-[20px] max-[500px]:text-[17px]'>Front End </h3>
          </div>
        </Link>
        <Link href='/components/roadmap/backEnd' className='w-60 h-40 max-[673px]:w-full'>
          <div className='w-full h-full flex flex-col items-center justify-center gap-2 rounded-md cursor-pointer bg-[#daf7ff31] border-[1px] border-[#6c6c6c33] backdrop-blur-md p-5 overflow-hidden relative after:content-[""] after:absolute after:top-0 after:right-0  after:w-10 after:h-10 after:bg-[#00a7fb3a] after:backdrop-blur-sm after:rounded-bl-full hover:text-white hover:after:w-full hover:after:h-full hover:after:rounded-none after:transition-[all_.3s] after:z-[-1] before:content-[""] before:absolute before:top-0 before:right-0  before:w-10 before:h-10 before:bg-[#00a6fb] before:rounded-bl-full before:transition-[all_.3s] before:z-[2] z-30 '>
            <Image src={back} width={50} alt='' />
            <h3 className='transition-[all_.3s] text-[#faa000] font-bold text-[20px] max-[500px]:text-[17px]'>Back End </h3>
          </div>
        </Link>
        <Link href='/components/roadmap/fullStack' className='w-60 h-40 max-[673px]:w-full'>
          <div className='w-full h-full flex flex-col items-center justify-center gap-2 rounded-md cursor-pointer bg-[#daf7ff31] border-[1px] border-[#6c6c6c33] backdrop-blur-md p-5 overflow-hidden relative after:content-[""] after:absolute after:top-0 after:right-0  after:w-10 after:h-10 after:bg-[#fcba0434] after:backdrop-blur-sm after:rounded-bl-full hover:text-white hover:after:w-full hover:after:h-full hover:after:rounded-none after:transition-[all_.3s] after:z-[-1] before:content-[""] before:absolute before:top-0 before:right-0  before:w-10 before:h-10 before:bg-[#fcba04] before:rounded-bl-full before:transition-[all_.3s] before:z-[2] z-30 '>
            <Image src={fullStack} width={50} alt='' />
            <h3 className='transition-[all_.3s] text-[#faa000] font-bold text-[20px] max-[500px]:text-[17px]'>Full Stack </h3>
          </div>
        </Link>
        <Link href='/components/roadmap/fullStack' className='w-60 h-40 max-[673px]:w-full'>
          <div className='w-full h-full flex flex-col items-center justify-center gap-2 rounded-md cursor-pointer bg-[#daf7ff31] border-[1px] border-[#6c6c6c33] backdrop-blur-md p-5 overflow-hidden relative after:content-[""] after:absolute after:top-0 after:right-0  after:w-10 after:h-10 after:bg-[#8ac92633] after:backdrop-blur-sm after:rounded-bl-full hover:text-white hover:after:w-full hover:after:h-full hover:after:rounded-none after:transition-[all_.3s] after:z-[-1] before:content-[""] before:absolute before:top-0 before:right-0  before:w-10 before:h-10 before:bg-[#8ac926] before:rounded-bl-full before:transition-[all_.3s] before:z-[2] z-30 '>
            <Image src={mobile} width={50} alt='' />
            <h3 className='transition-[all_.3s] text-[#faa000] font-bold text-[20px] text-center max-[500px]:text-[17px]'>Mobile Application </h3>
          </div>
        </Link> 
        <Link href='/components/roadmap/fullStack' className='w-60 h-40 max-[673px]:w-full'>
          <div className='w-full h-full flex flex-col items-center justify-center gap-2 rounded-md cursor-pointer bg-[#daf7ff31] border-[1px] border-[#6c6c6c33] backdrop-blur-md p-5 overflow-hidden relative after:content-[""] after:absolute after:top-0 after:right-0  after:w-10 after:h-10 after:bg-[#d8115a35] after:backdrop-blur-sm after:rounded-bl-full hover:text-white hover:after:w-full hover:after:h-full hover:after:rounded-none after:transition-[all_.3s] after:z-[-1] before:content-[""] before:absolute before:top-0 before:right-0  before:w-10 before:h-10 before:bg-[#d81159] before:rounded-bl-full before:transition-[all_.3s] before:z-[2] z-30 '>
            <Image src={ui} width={50} alt='' />
            <h3 className='transition-[all_.3s] text-[#faa000] font-bold text-[20px] text-center max-[500px]:text-[17px]'>UI / UX </h3>
          </div>
        </Link>

      </div>

      <div className='w-[72px] h-[72px] rounded-full bg-gradient-to-r from-[#FAA000] to-[#FFD12D]  absolute left-[30%]  top-[50%] '></div>
      <div className='w-[72px] h-[72px] rounded-full bg-gradient-to-r from-[#FAA000] to-[#FFD12D]  absolute right-[35%]  bottom-[35px] '></div>



    </div>
  )
}

export default Roadmap
