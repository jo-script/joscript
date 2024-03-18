'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from './icon/jologo.svg'
import { BsList } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi2";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { GrAppsRounded } from "react-icons/gr";
import { PiPathLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

import Theme from '../theme/Theme';



function Nav() {

  const linksStyle = ' px-3 pb-2 pt-1 text-[#c4cad1] text-[17px] flex items-center text-center cursor-pointer rounded-md border-[#0000] hover:border-[#848d9778] border-[1px]'

  let [openSide, setOpenSide] = useState(false)
  let [moreOption, setMoreOption] = useState(false)

  // open side bare
  const openSdeBare = () => setOpenSide(!openSide)


  return (
    <div id='nav' className={` nav  bg-[#111827] w-full h-[80px] border-[#848d9778]  border-b-[1px]  flex items-center justify-between gap-3 px-[5%] fixed top-0 z-[444]`}>
      {/* logo */}
      <a href='/' className='flex items-center justify-between gap-3'>
        <Image src={logo} alt="" width={30} height={30} />
        <h3 className='link text-[#c4cad1] text-[25px]'>joscript</h3>
      </a>

      {/* links */}
      <div className=' min-[1000px]:w-full flex items-center min-[1000px]:flex-row-reverse justify-between gap-[3%]'>
        <Theme />

        <div id='links' className='w-full flex items-center gap-[3%] text-white max-[1000px]:hidden ' style={{ direction: 'rtl' }}>
          <a href="/" className={linksStyle}> <button className='link'>الصفحةالرئيسية</button></a>
          <a href="#services" className={linksStyle}><button className='link'>الخدمات</button></a>
          <a href="#projects" className={linksStyle}><button className='link'>المشاريع</button></a>
          <a href="#roadmap" className={linksStyle}><button className='link'>مسارات التعلم</button></a>
          <a href="#footer" className={linksStyle}><button className='link'>التواصل</button></a>

        </div>



        {/* icon list */}
        <BsList onClick={openSdeBare} className='link scale-[2.3] cursor-pointer text-[#b0bbc8] ml-10  min-[1000px]:hidden' />
      </div>

      {/* back option div */}
      <div onMouseOver={() => setMoreOption(!moreOption)} className={` ${moreOption ? ' h-[100vh] w-full' : 'h-0 w-0'} absolute top-[80px] left-0 transition-[all_.3s] overflow-hidden`}></div>

      {/* side bare */}
      <div className={`${openSide ? 'w-72' : 'w-0 p-0'} h-[89.5vh] pt-7 text-[18px] bg-[#19202b] shadow-2xl absolute right-0 top-[75px] transition-all ease-in-out delay-150 overflow-hidden min-[1131px]:hidden z-[100]`} style={{ direction: 'rtl' }}>
        <nav onClick={openSdeBare}>
          <div className="flex flex-col items-end justify-start gap-3 pr-4 w-[90%] " style={{ direction: 'rtl' }}>
            <p className=" flex items-center gap-5 justify-end pl-[15px] text-[#c4cad1] w-full px-5 hover:bg-[#3642538a] rounded-md transition-all delay-75"> <HiOutlineHome className="scale-[2] text-[#faa000]" /> <a href="/" className="py-2 inline-block w-full">الصفحة الرئيسية</a></p>
            <p className=" flex items-center gap-5 justify-start pl-[15px] text-[#c4cad1] w-full px-5 hover:bg-[#3642538a] rounded-md transition-all delay-75"> <LiaHandsHelpingSolid className="scale-[2] text-[#faa000]" /> <a href="#services" className="py-2 inline-block w-full">الخدمات</a></p>
            <p className=" flex items-center gap-5 justify-start pl-[15px] text-[#c4cad1] w-full px-5 hover:bg-[#3642538a] rounded-md transition-all delay-75"> <GrAppsRounded className="scale-[2] text-[#faa000]" /> <a href="#projects" className="py-2 inline-block w-full">المشاريع</a></p>
            <p className=" flex items-center gap-5 justify-start pl-[15px] text-[#c4cad1] w-full px-5 hover:bg-[#3642538a] rounded-md transition-all delay-75"> <PiPathLight className="scale-[2] text-[#faa000]" /> <a href="#roadmap" className="py-2 inline-block w-full">مسار التعلم</a></p>
          </div>
        </nav>
      </div>
      <div onClick={openSdeBare} className={`${openSide ? 'w-full' : 'w-0'}  h-[100vh]  min-[1131px]:w-0  flex flex-col items-center  shadow-md absolute  top-[80px] right-0 transition-all delay-100 z-[0]`}></div>

    </div>
  )
}

export default Nav;
