import React from 'react'

import Image from 'next/image'
import joscriptLog from './jologo.svg'

import { IoMdCall } from "react-icons/io";
import { IoMdMailOpen } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";

import Link from "next/link"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
let date = new Date();



function Footer() {
    return (
        <footer id='footer' className=" bg-gray-100 dark:bg-[#151e31] pt-12 ">
            <div className=" flex flex-wrap items-start justify-between gap-6 px-[4%] mb-12 max-[560px]:items-start ">
                <div>
                    <div className=" space-y-2 flex flex-col items-start">
                        <h3 className="text-[#f0f0f0da] text-lg font-semibold">Contact us</h3>
                        <a href='tel:+201032734738' className="text-sm text-gray-400 flex gap-2 items-center"> <IoMdCall /> 01032734738</a>
                        <a href='mailto:joscript.js@gmail.com' className="text-sm text-gray-400 flex gap-2 items-center"> <IoMdMailOpen /> joscript.js@gmail.com</a>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className=" space-y-2 text-start ">
                        <h3 className="text-[#f0f0f0da] text-lg font-semibold">Follow us</h3>
                        <div className="flex flex-col justify-start gap-1 text-gray-400">
                            <a href="https://facebook.com/joscript1" target='_blank' className="  flex items-center gap-2 justify-center text-gray-400 text-[16px]">
                                <FaFacebook /> Facebook
                            </a>
                            <a href="https://wa.me/+201032734738" target='_blank' className="  flex items-center gap-2 justify-center text-gray-400 text-[16px]">
                                <IoLogoWhatsapp /> Whatsapp
                            </a>
                            <a href="https://instagram.com/joscript1" target='_blank' className="  flex items-center gap-2 justify-center text-gray-400 text-[16px]">
                                <RiInstagramFill /> Instagram
                            </a>
                            <a href="https://www.youtube.com/@jo-script" target='_blank' className="flex mr-3 items-center gap-2 justify-center text-gray-400 text-[16px]">
                                <AiFillYoutube /> Youtube
                            </a>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2 ">
                        <h3 className="text-[#f0f0f0da] text-lg font-semibold">Quick Links</h3>
                        <nav className="  gap-2 text-sm flex items-start justify-start flex-col  ">
                            <Link className="text-gray-500 dark:text-gray-400 hover:underline" href="#">
                                About Us
                            </Link>
                            <Link className="text-gray-500 dark:text-gray-400 hover:underline" href="#">
                                Contact Us
                            </Link>
                            <Link className="text-gray-500 dark:text-gray-400 hover:underline" href="#">
                                Terms & Conditions
                            </Link>
                            <Link className="text-gray-500 dark:text-gray-400 hover:underline" href="#">
                                Privacy Policy
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="flex items-center justify-center w-[400px] max-[1200px]:w-full space-y-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.80291937958!2d29.8934657!3d31.198477399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x81a780b43497290b%3A0x4762909bcb8fe775!2sElites%20Coworking%20Space!5e0!3m2!1sar!2seg!4v1710677557878!5m2!1sar!2seg" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
            <div className="h-[80px] text-[16px] text-gray-500 lg:text-left  lg:col-start-2 flex lg:flex-row items-center justify-center border-t-[1px] border-[#ffffff34]">
                joscript©{date.getFullYear()} All rights reserved.
            </div>

        </footer>
    )
}

export default Footer
