import React from 'react'

import Image from 'next/image'
import joscriptLog from './jologo.svg'

import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";

let date = new Date();



function Footer() {
    return (
        <div id='footer' className='w-full flex flex-col items-center justify-center pt-10'>

            <div className=' w-full flex items-center justify-between flex-wrap  gap-10 px-[4%]'>
                {/* logo */}
                <div className='flex flex-col items-center justify-center gap-6'>
                    <div className='flex items-center justify-center gap-4  '> 
                        <Image src={joscriptLog} width={45} alt='' />
                        <p className='link text-[30px] text-[#0c0c0c]'>joscript</p>
                    </div>
                    <div className='link flex items-center gap-x-8 text-[25px] '>
                        <a href="http://wa.me/+201032734738" target='_blank' className='hover:text-green-500 hover:scale-[1.2] transition-all delay-75 '><IoLogoWhatsapp /></a>
                        <a href="https://www.facebook.com/joscript1" target='_blank' className='hover:text-blue-600 hover:scale-[1.2] transition-all delay-75 '><FaFacebook /></a>
                        <a href="https://www.instagram.com/joscript1" target='_blank' className='hover:text-[#f7ab01] hover:scale-[1.2] transition-all delay-75 '><RiInstagramFill /></a>
                        <a href="https://www.youtube.com/@jo-script" target='_blank' className='hover:text-red-700 hover:scale-[1.2] transition-all delay-75 '><AiFillYoutube /></a>
                    </div>
                </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1884.460420596439!2d29.909097711441948!3d31.208424731257935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38a5f7fb6a1%3A0xf15dcf76084cfd40!2z2KfZhNiy2LHZg9i02YrYjCDYp9mE2KPYstin2LHZitiq2Kkg2YjYp9mE2LTYp9i32KjZitiMINmC2LPZhSDYqNin2Kgg2LTYsdmC2YrYjCDZhdit2KfZgdi42Kkg2KfZhNil2LPZg9mG2K_YsdmK2KkgNTQyNDAxMQ!5e0!3m2!1sar!2seg!4v1709799990434!5m2!1sar!2seg" width="500" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='w-full py-5 text-center border-[#4d4d4d2c] border-t mt-5 text-[#7b7b7b]'>
                joscript©{date.getFullYear()}
            </div>

        </div>
    )
}

export default Footer
