'use client'
// import React, { useState } from 'react'
import Link from 'next/link';

import { IoIosImages } from "react-icons/io";
import { GrAppsRounded } from "react-icons/gr";
import { RiHome2Line } from "react-icons/ri";
import { IoIosDesktop  } from "react-icons/io";
import { RiApps2AddLine } from "react-icons/ri";


function Sidebar() {
  
  const links = [
    {
      title: 'الصفحة الرئسية',
      icon: <RiHome2Line size={20}  className='' />,
      url: '#',
    },
    {
      title: 'الكواليس',
      icon: <IoIosImages size={20} />,
      url: '#',

    },
    {
      title: 'الكورسات',
      icon: <IoIosDesktop  size={20} />,
      url: '#'
    },
    {
      title: 'المشاريع',
      icon: <GrAppsRounded size={20} />,
      url: '#'
    },
    {
      title: 'مواقع وادوات',
      icon:'',
      url: '/web-and-tools'
    },
  ]

  return (
    <div className='w-60 h-[87vh] z-50  shadow-md dark:bg-[#17191a] flex flex-col gap-2 items-start px-4 pt-2 '>
      {
        links.map((link, index) => (
          <Link key={index} href={link.url} className={` w-[90%] flex items-center gap-2 px-2 py-1 hover:mr-2 dark:hover:text-[#e8e8e8] dark:text-gray-100 hover:bg-[#a1a1a124] rounded-md font-medium transition-[all_.2s]`}>
            {link.icon}
            {link.title}
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar




