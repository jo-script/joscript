'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from './icon/jologo.svg'
import { BsList } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi2";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { GrAppsRounded } from "react-icons/gr";
import Theme from '../theme/Theme';


function Nav() {

  const linksStyle = ' px-3 h-9 text-[#c4cad1] text-[17px]  text-center leading-9 cursor-pointer rounded-md border-[#0000] hover:border-[#848d9778] border-[1px] transition-all delay-75  '

  let [openSide, setOpenSide] = useState(false)
  let [scroll, setScroll] = useState(false)
  // open side bare
  const openSdeBare = () => {
     setOpenSide(!openSide)
  }

  // window.onscroll = () => {
  //   window.scrollY > 50 ?  setScroll(true) : setScroll(false)
  // }

  return (
    <div className={` ${scroll ? 'shadow-md' : 'shadow-[0]'} w-full h-[80px] border-[#848d9778]  border-b-[1px]  bg-[#0d1117] flex items-center justify-between gap-3 px-[5%] fixed top-0 z-[444]`}>
      {/* logo */}
      <a href='/' className='flex items-center justify-between gap-3'>
        <Image src={logo} alt="" width={30} height={30} />
        <h3 className='text-[#c4cad1] text-[25px]'>joscript</h3>
      </a>

      {/* links */}
      <div className='w-full flex items-center gap-[3%] text-white max-[1000px]:hidden ' style={{ direction: 'rtl' }}>
        <a href="#home" className={linksStyle}>الصفحة الرئيسية</a>
        <a href="#services" className={linksStyle}><button>الخدمات</button></a>
        <a href="#projects" className={linksStyle}><button>المشاريع</button></a>
        <a href="#teamwork" className={linksStyle}><button>فريق ألعمل</button></a>
        <a href="" className={linksStyle}>حول joscript</a>
      </div>

      {/* icon list */}
      <BsList onClick={openSdeBare} className='scale-[2.3] cursor-pointer text-[#0c0c0c]  min-[1000px]:hidden' />
      <Theme />

      {/* side bare */}
      <div className={`${openSide ? 'w-72' : 'w-0 p-0'} h-[89.5vh] pt-7 text-[18px] bg-white shadow-2xl absolute right-0 top-[75px] transition-all ease-in-out delay-150 overflow-hidden min-[1131px]:hidden z-[100]`} style={{direction:'rtl'}}>
        <nav onClick={openSdeBare}>
          <div className="flex flex-col items-end justify-end gap-3 w-[90%] " style={{direction:'rtl'}}>
            <p className=" flex items-center gap-5 justify-start pl-[15px] w-full px-10 hover:bg-gray-200 rounded-md transition-all delay-75"> <HiOutlineHome className="scale-[2] text-[#faa000]" /> <a href="#home" className="py-2 inline-block w-full">الصفحة الرئيسية</a></p>
            <p className=" flex items-center gap-5 justify-start pl-[15px] w-full px-10 hover:bg-gray-200 rounded-md transition-all delay-75"> <LiaHandsHelpingSolid   className="scale-[2] text-[#faa000]" /> <a href="#services" className="py-2 inline-block w-full">الخدمات</a></p>
            <p className=" flex items-center gap-5 justify-start pl-[15px] w-full px-10 hover:bg-gray-200 rounded-md transition-all delay-75"> <GrAppsRounded  className="scale-[2] text-[#faa000]" /> <a href="#projects" className="py-2 inline-block w-full">المشاريع</a></p>
          </div>
        </nav>
      </div>
      <div onClick={openSdeBare}  className={`${openSide ? 'w-full' : 'w-0'}  h-[100vh]  min-[1131px]:w-0  flex flex-col items-center  shadow-md absolute  top-[80px] right-0 transition-all delay-100 z-[0]`}></div>

    </div>
  )
}

export default Nav;
