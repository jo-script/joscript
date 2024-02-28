import React from 'react'

import Image from 'next/image'
import joscriptLog from './jologo.svg'

import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

let date = new Date();



function Footer() {
    return (
        <div id='footer' className='w-full flex flex-col items-center justify-center pt-20'>

            <div className=' flex items-center  justify-between px-[4%]'>
                {/* logo */}
                <div className='flex flex-col items-center justify-center gap-6'>
                    <div className='flex items-center justify-center gap-4  '> 
                        <Image src={joscriptLog} width={50} alt='' />
                        <p className='text-[30px] text-[#0c0c0c]'>joscript</p>
                    </div>
                    <div className='flex items-center gap-x-8 text-[25px] text-[#0c0c0c]'>
                        <a href="#" className='hover:text-[#faa000] hover:scale-[1.2] transition-all delay-75 '><IoLogoWhatsapp /></a>
                        <a href="#" className='hover:text-[#faa000] hover:scale-[1.2] transition-all delay-75 '><FaFacebook /></a>
                        <a href="#" className='hover:text-[#faa000] hover:scale-[1.2] transition-all delay-75 '><FaLinkedin /></a>
                        <a href="#" className='hover:text-[#faa000] hover:scale-[1.2] transition-all delay-75 '><FaGithub /></a>
                    </div>
                </div>

            </div>

            <div className='w-full py-5 text-center border-[#1c1c1c2c] border-t mt-5 text-[#a3a3a3]'>
                joscript@{date.getFullYear()}
            </div>

        </div>
    )
}

export default Footer
