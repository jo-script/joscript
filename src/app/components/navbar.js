"use client";

// import components
import ThemeToggle from "./ThemeToggle";
import Sidebar from "./sidebar";
import Links from "./links";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// icons
import { MdOutlineFacebook } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";

export default function Nav() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className="w-full h-20 fixed top-0 flex items-center justify-between px-[3%] backdrop-blur-lg bg-white/5 shadow-sm z-[9999]">
      <div className="flex items-center gap-2 ">
        {/* sidebar */}
        <div
          className={`${
            sidebar ? "w-60" : "w-0"
          } z-[999] min-[940px]:w-0 overflow-hidden  bg-[#e8e8e8] shadow-[-10px_15px_10px_0_#81818121] absolute top-full right-0  transition-all delay-75 `}
        >
          <Sidebar />
        </div>

        {/* icon list */}
        <div className="min-[940px]:hidden">
          <label className="hamburger ">
            <div
              id="c"
              onClick={() => setSidebar(!sidebar)}
              className={` ${
                sidebar ? "w-full h-[86.8vh]" : "w-0 h-0"
              }  backdrop-blur-lg bg-white/5  absolute top-20 right-0`}
            ></div>
            <input type="checkbox" />
            <svg
              viewBox="0 0 32 32"
              className="w-9"
              onClick={() => setSidebar(!sidebar)}
            >
              <path
                className={` ${
                  !sidebar ? " rotate-0 " : ""
                } line stroke-[#0c0c0c] dark:stroke-[#e8e8e8] line-top-bottom`}
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path
                className={` ${
                  sidebar ? " rotate-0 " : ""
                } line stroke-[#0c0c0c] dark:stroke-[#e8e8e8]`}
                d="M7 16 27 16"
              ></path>
            </svg>
          </label>
        </div>

        {/* change them */}
        {/* <ThemeToggle /> */}

        {/* Social Media Links */}
        <div className="flex items-center gap-2 rounded-full bg-[#ac27ee35]  border border-purple-500 py-1 px-2 ">
          <Link href="https://www.facebook.com/joscript.io" target="_blank">
            <MdOutlineFacebook
              size={20}
              className="hover:text-blue-500 text-[#fff] transition-all "
            />
          </Link>
          <Link href="https://wa.me/+201032734738" target="_blank">
            <RiWhatsappFill
              size={20}
              className="hover:text-green-500 text-[#fff] transition-all "
            />
          </Link>
          <Link href="https://www.youtube.com/@jo-script" target="_blank">
            <FaYoutube
              size={20}
              className="hover:text-red-500 text-[#fff] transition-all "
            />
          </Link>
        </div>
      </div>

      <button >
      
      </button>

      {/* links pages */}
      <div className="flex items-center gap-3 max-[940px]:hidden">
        <Link
          href="/"
          className={`relative overflow-hidden px-6 py-2.5  text-[#c982ff] font-medium rounded-lg transition-all duration-300 hover:text-white group`}
        >
            <span className="relative z-10">الصفحة الرئسية</span>
            <div className="absolute inset-0 bg-gradient-to-t from-[#c982ff] from-0% to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link> 
        <Link
          href="/#events"
          className={`relative overflow-hidden px-6 py-2.5  text-[#c982ff] font-medium rounded-lg transition-all duration-300 hover:text-white group`}
        >
            <span className="relative z-10">الكواليس</span>
            <div className="absolute inset-0 bg-gradient-to-t from-[#c982ff] from-0% to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        <Link
          href="/#courses"
          className={`relative overflow-hidden px-6 py-2.5  text-[#c982ff] font-medium rounded-lg transition-all duration-300 hover:text-white group`}
        >
            <span className="relative z-10">الكورسات</span>
            <div className="absolute inset-0 bg-gradient-to-t from-[#c982ff] from-0% to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        <Link
          href="/#projects"
          className={`relative overflow-hidden px-6 py-2.5  text-[#c982ff] font-medium rounded-lg transition-all duration-300 hover:text-white group`}
        >
            <span className="relative z-10">المشاريع</span>
            <div className="absolute inset-0 bg-gradient-to-t from-[#c982ff] from-0% to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        {/* <Link href='/web-and-tools' className={` flex items-center gap-2 px-2 py-1 dark:text-gray-100 hover:bg-[#a1a1a124] border border-[#e8e8e800] rounded-md font-medium transition-[all_.2s]`}>
          مواقع وادوات
        </Link> */}
      </div>

      {/* logo */}
      <div className="flex items-center gap-2 ">
        <h1 className="text-2xl font-bold text-[#fff] ">joscript</h1>
        <Image
          src="/jo logo.svg"
          width={25}
          height={25}
          alt="joscript logo"
          loading="lazy"
        />
      </div>
    </nav>
  );
}
