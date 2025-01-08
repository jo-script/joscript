import Image from 'next/image'
import React from 'react'

function Projects() {


    const data = [
        {
            img: '/project-img/css2.mp4',
            title: 'front end',
        },
        {
            img: '/project-img/Group 1000002620.png',
            title: 'Headers',
        },
        {
            img: '/project-img/hqdefault.jpg',
            title: 'Product Cards',
        },
        {
            img: '/project-img/original-223eb99cec1de196455da8c9c060ee46.jpg',
            title: 'Product Cards',
        },
        {
            img: '/project-img/profile-card-design.png',
            title: 'Profile Card',
        },
        {
            img: '/project-img/Screen-Shot-2020-04-15-at-6.25.16-AM.webp',
            title: 'front end',
        },
        {
            img: '/project-img/final task.mp4',
            title: 'front end',
        },        
        {
            img: '/project-img/Screenshot 2024-12-17 215515.png',
            title: 'front end',
        },
        {
            img: '/project-img/Screenshot 2024-12-17 220106.png',
            title: 'front end',
        },
        {
            img: '/project-img/web.svg',
            title: 'front end',
        },
        {
            img: '/Rectangle19.png',
            title: 'front end',
        },
        {
            img: '/Rectangle19.png',
            title: 'front end',
        },
    ]
    return (
        <div className='w-full flex flex-col gap-10'>
            <div className='w-full flex items-center justify-center flex-col text-center gap-3'>
                <p className='h-[2px] w-40 rounded-md bg-[#17191a] dark:bg-gray-100 mb-2'></p>
                <h1 className='text-3xl font-bold text-[#17191a] dark:text-gray-100'>المشاريع</h1>
                <p className='text-[#2E3539] dark:text-[#bfbfbf] text-lg'>المشاريع التي نفذها الطلاب خلال مدة الكورس وبعد التخرج</p>
            </div>


            <div className=' columns-2 sm:columns-4 md:columns-5 gap-3'>
                {
                    data.map((item, index) => (
                        <div  key={index} className='break-inside-avoid w-full p-1 backdrop-blur-md mb-3  bg-white rounded-lg shadow-md  hover:scale-[1.02] transition-[all_.2s] cursor-pointer'>
                            {index == 0 || index == 6 ? (
                                <video src={item.img} alt="" className='rounded-md ' autoPlay controls />
                            ) : (<img style={{height:'auto'}} src={item.img} alt="" className='rounded-md ' />)}
                            <div className='px-2 text-end mt-2 rounded-md'>
                                <h1 className='text-lg font-bold text-[#17191a]'>{item.title}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Projects
