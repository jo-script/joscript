import React from 'react'

import Image from 'next/image'
import joscriptLog from './jologo.svg'

import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <div className='w-full mt-20'>

            <div className='w-full flex items-center justify-between px-[4%]'>
                {/* logo */}
                <div>
                    <div className='flex items-center gap-2'> 
                        <Image src={joscriptLog} width={30} alt='' />
                        <p className='text-[20px] text-[#0c0c0c]'>joscript</p>
                    </div>
                    <p className='text-[#4A5568] text-[15px] max-[500px]:text-[20px] py-3'>نهدف إلى نشر المعرفة البرمجية ومساعدة الآخرين على تعلمها</p>

                    <div className='flex items-center gap-4 text-[20px] text-[#0c0c0c]'>
                        <a href="#"><IoLogoWhatsapp /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaGithub /></a>
                    </div>
                </div>

                <div>
                    <h3>Links</h3>
                    <a href="#"></a>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Footer
