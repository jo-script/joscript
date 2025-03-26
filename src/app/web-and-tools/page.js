'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Page() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const problem = [
        {
            icon: '/tools/problem/edabit.png',
            title: 'Edabit',
            link: 'https://edabit.com'
        },
        {
            icon: '/tools/problem/Coderbyte.png',
            title: 'Coderbyte',
            link: 'https://www.coderbyte.com'
        },
        {
            icon: '/tools/problem/codew.svg',
            title: 'Codewars',
            link: 'https://www.codewars.com'
        },
        {
            icon: '/tools/problem/hacker.jpg',
            title: 'HackerRank',
            link: 'https://www.hackerrank.com'
        },
        {
            icon: '/tools/problem/LeetCode.png',
            title: 'LeetCode',
            link: 'https://www.leetcode.com'
        },
        {
            icon: '/tools/problem/topCoder.png',
            title: 'TopCoder',
            link: 'https://www.topcoder.com'
        },
    ]


    const [dot, setDot] = useState()

    return (
        <div className='w-full pt-[120px] p-[3%] flex items-center flex-col '>
            <div className='w-full flex items-center justify-center flex-col text-center gap-3'>
                <h1 className='text-3xl font-bold text-[#17191a] dark:text-gray-100'>مواقع وادوات</h1>
                <p className='text-[#2E3539] dark:text-[#bfbfbf] text-lg'>مجموعة من المواقع وادوات المهمه </p>
            </div>

            <div className="w-[300px] h-[300px] overflow-hidden flex gap-3 flex-wrap border border-black p-3 relative">
                    {/* <div onClick={() => setDot(!dot)} className={` ${dot ? 'bg-red-500 w-[300px] h-[300px]' : 'bg-green-600'} transition-[all_1s]  w-20 h-20`}></div> */}
                    <div className='w-20 h-20 bg-green-500'></div>
                    <div className='w-20 h-20 bg-green-500'></div>
                    <div onClick={() => setDot(!dot)} className={` ${dot ? 'bg-red-500 w-[300px] h-[300px]' : 'bg-green-600'} transition-[all_1s]  w-20 h-20`}></div>
                    <div className='w-20 h-20 bg-green-500'></div>
                    <div className='w-20 h-20 bg-green-500'></div>
                    <div className='w-20 h-20 bg-green-500'></div>
                    <div className='w-20 h-20 bg-green-500'></div>
                    <div className='w-20 h-20 bg-green-500'></div>
                    <div className='w-20 h-20 bg-green-500'></div>
                </div>



            <div className='relative  w-full grid  grid-cols-12 grid-rows-10 gap-4  '>
                {/* <div
                    className="fixed w-20 h-20 bg-purple-800 rounded-full pointer-events-none shadow-[0_0_10px_20px_purple]"
                    style={{
                        top: `${mousePosition.y}px`,
                        left: `${mousePosition.x}px`,
                        transform: "translate(-50%, -50%)",
                    }}

                    
                /> */}


                
                <div className=' col-span-2 bg-white flex flex-col items-end justify-end rounded-2xl p-4 '>
                    <div>
                        <h1>Problem Solving</h1>
                    </div>
                    <div className=' flex flex-col gap-2     '>
                        {
                            problem.map((item, index) => (
                                <Link href={item.link} key={index} className=' w-full flex items-center hover:bg-gray-500 hover:scale-[1.03] transition-[all_.2s] rounded-full justify-end py-1 gap-3 '>
                                    <p>{item.title}</p>
                                    <Image src={item.icon} alt={item.title} className='rounded-full' width={35} height={35} loading='lazy' />
                                </Link>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page
