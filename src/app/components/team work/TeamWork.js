import React from 'react'
import Image from 'next/image'
import yousef from './img/IMG_7498.JPEG'
import mokhtar from './img/mokhtar.jpg'


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
            img: mokhtar,
            name: "Mokhtar Mahmod ",
            jop: 'المدير التنفيذي',
            whatsapp: '',
            facebook: '',
            linkedin: '',
            github: ''
        },
    ]

    return (
        <div id='teamwork' className='w-full bg-[#151c237b] px-[2%] py-24 flex flex-col items-center justify-center mt-[100px] relative'>
            <div className='w-full flex flex-col items-center'>
                <p className='bg-[#faa000] h-[3px] w-[10%] '></p>
                <h1 className='text-[#eef6ff] text-[35px] mt-4 '>فريق ألعمل</h1>
                <p className='text-[20px] text-[#9da1a7] text-center mt-2 max-[500px]:text-[16px] max-[500px]:w-[78%]'>فريق ألعمل القائم على الإدارة والتدريس في مختلف المجالات البرمجية</p>
            </div>

            <div className="w-full flex flex-wrap items-center justify-center gap-y-5 gap-x-5 mt-12">
                {
                    teamWork.map((data, index) => (
                        <div id='cardProfile' key={index} className=" w-[290px] backdrop-blur-md bg-[#0d1117] border-[1px] border-[#848d9778]  rounded-md flex gap-3 items-start justify-between p-[7px] hover:scale-105 cursor-default transition-all delay-75">
                            <Image src={data.img} width={100} alt='' className='rounded-md h-full' />
                            <div className=' w-full h-[100px] flex items-start flex-col gap-3 relative'>
                                <div className="flex flex-col justify-center h-full ">
                                    <p className='text-[#eef6ff] text-[20px] font-normal '>{data.name}</p>
                                    <p className='text-[#9da1a7] text-[16px] font-normal '>{data.jop}</p>
                                </div>
                                {/* links */}
                                <div id='links' className='w-full text-[20px] text-[#faa000] flex items-center justify-between gap-4 '>
                                    <a href={data.whatsapp} className=' hover:text-green-600'>
                                        <IoLogoWhatsapp />
                                    </a>

                                    <a href={data.facebook} className=' hover:text-blue-600'>
                                        <FaFacebook />
                                    </a>
                                    <a href={data.linkedin} className=' hover:text-blue-600 '>
                                        <FaLinkedin />
                                    </a>
                                    <a href={data.github} className='hover:text-gray-800'>
                                        <FaGithub />
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
