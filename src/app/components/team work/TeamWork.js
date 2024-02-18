import React from 'react'
import Image from 'next/image'
import yousef from './img/IMG_7498.JPEG'
import arrow from './img/Deco-img-arrow (1).svg'

import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function TeamWork() {

    let teamWork = [
        {
            img: yousef,
            name: "Yousef Eid",
            jop: 'المدير التنفيذي',
            whatsapp: '',
            facebook: '',
            linkedin: '',
            github: ''
        },
        {
            img: yousef,
            name: "Yousef Eid",
            jop: 'المدير التنفيذي',
            whatsapp: '',
            facebook: '',
            linkedin: '',
            github: ''
        },
        {
            img: yousef,
            name: "Yousef Eid",
            jop: 'المدير التنفيذي',
            whatsapp: '',
            facebook: '',
            linkedin: '',
            github: ''
        },
        {
            img: yousef,
            name: "Yousef Eid",
            jop: 'المدير التنفيذي',
            whatsapp: '',
            facebook: '',
            linkedin: '',
            github: ''
        },
        {
            img: yousef,
            name: "Yousef Eid",
            jop: 'المدير التنفيذي',
            whatsapp: '',
            facebook: '',
            linkedin: '',
            github: ''
        },
        {
            img: yousef,
            name: "Yousef Eid",
            jop: 'المدير التنفيذي',
            whatsapp: '',
            facebook: '',
            linkedin: '',
            github: ''
        },
    ]

    return (
        <div id='teamwork' className='w-full bg-[#F0F0F0] px-[2%] flex flex-col items-center justify-center mt-[100px] py-12 relative'>
            <div className='w-full flex flex-col items-center'>
                <p className='bg-[#faa000] h-[3px] w-[10%] '></p>
                <h1 className='text-[#0c0c0c] text-[35px] mt-4 '>فريق ألعمل</h1>
                <p className='text-[20px] text-[#4A5568] text-center mt-2'>فريق ألعمل القائم على الإدارة والتدريس في مختلف المجالات البرمجية</p>
            </div>

            <div className="w-full flex flex-wrap items-center justify-center gap-5 gap-y-16 mt-12">
                {
                    teamWork.map((data, index) => (
                        <div key={index} className=" w-[300px] h-40 bg-[#ffffff] rounded-md flex flex-col items-start justify-between p-4 hover:scale-105 cursor-default transition-all delay-75">
                            <div className='flex items-center gap-3 '>
                                <Image src={data.img} width={80} alt='' className='rounded-full' />
                                <div className="flex flex-col justify-center h-full ">
                                    <p className='text-[#0c0c0c] text-[18px] font-bold '>{data.name}</p>
                                    <p className='text-[#0c0c0c] text-[18px] font-normal '>{data.jop}</p>
                                </div>
                            </div>
                            {/* links */}
                            <div className='w-full text-[20px] text-[#faa000] flex items-start justify-evenly gap-4 '>
                                <div className='w-6 hover:w-24 hover:text-green-600 px-1 rounded-full overflow-hidden cursor-pointer  flex items-center transition-all delay-75'>
                                    <a href={data.whatsapp} className='flex items-center  gap-1'>
                                        <IoLogoWhatsapp />
                                        <p className='text-[14px]'>Whatsapp</p>
                                    </a>
                                </div>
                                <div className='w-6 hover:w-24 hover:text-blue-600 px-1 rounded-full overflow-hidden cursor-pointer  flex items-center transition-all delay-75'>
                                    <a href={data.facebook} className='flex items-center  gap-1'>
                                    <FaFacebook />
                                        <p className='text-[14px]'>Facebook</p>
                                    </a>
                                </div>
                                <div className='w-7 hover:w-24 hover:text-blue-600 px-1 rounded-full overflow-hidden cursor-pointer  flex items-center justify-end transition-all delay-75'>
                                    <a href={data.linkedin} className='flex items-center justify-start gap-1 flex-row-reverse'>
                                    <FaLinkedin />
                                        <p className='text-[14px]'>Linkedin</p>
                                    </a>
                                </div>
                                <div className='w-7 hover:w-24  hover:text-gray-800 px-1 rounded-full overflow-hidden cursor-pointer  flex items-center justify-end transition-all delay-75'>
                                    <a href={data.github} className='flex items-center flex-row-reverse gap-1'>
                                    <FaGithub />
                                        <p className='text-[14px]'>GitHub</p>
                                    </a>
                                </div>
                                
                                
                                
                            </div>
                        </div>
                    ))
                }
                <hr />
            </div>
        </div>
    )
}

export default TeamWork
