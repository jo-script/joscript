'use client'
import React, { useState } from 'react'
import Links from './links'
import { RiHome2Line, RiWhatsappFill } from "react-icons/ri";
import { MdOutlineFacebook } from "react-icons/md";
import Link from 'next/link';


function Sidebar() {
  const links = [
    {
      title: 'الصفحة الرئسية',
      icon: <RiHome2Line size={20}  className='' />,
      url: '#',
    },
    {
      title: 'الكورسات',
      icon: <MdOutlineFacebook size={20} />,
      url: '#',

    },
    {
      title: 'المشاريع',
      icon: <MdOutlineFacebook size={20} />,
      url: '#'
    },
    {
      title: 'مسارات التعلم',
      icon: <MdOutlineFacebook size={20} />,
      url: '#'
    },
    {
      title: 'مواقع وادوات',
      icon: <MdOutlineFacebook size={20} />,
      url: '/web-and-tools'
    },
  ]

  return (
    <div className='w-60 h-[87vh] backdrop-blur-sm bg-white/5 shadow-md dark:bg-[#17191a] flex flex-col gap-2 items-start px-4 pt-2 '>
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




