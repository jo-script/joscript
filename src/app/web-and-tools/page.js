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


    return (
        <div className='w-full pt-[120px] p-[3%] '>
            <div className='w-full flex items-center justify-center flex-col text-center gap-3'>
                <h1 className='text-3xl font-bold text-[#17191a] dark:text-gray-100'>مواقع وادوات</h1>
                <p className='text-[#2E3539] dark:text-[#bfbfbf] text-lg'>مجموعة من المواقع وادوات المهمه </p>
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
                    <div className=' flex flex-col    '>
                        {
                            problem.map((item, index) => (
                                <Link href={item.link} key={index} className=' w-full flex items-center hover:bg-gray-50 hover:scale-[1.03] transition-[all_.2s] rounded-full justify-end py-2 gap-4 '>
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
