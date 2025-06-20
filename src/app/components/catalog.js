'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function Catalog() {

  const [selectedImage, setSelectedImage] = useState('');


  const allImgs = [
    '/events-imgs/photo_6_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_7_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_13_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_1_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_19_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_14_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_8_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_2_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_9_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_15_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_3_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_17_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_10_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_16_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_20_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_11_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_4_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_5_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_12_2024-12-26_16-38-36.jpg',
    '/events-imgs/photo_18_2024-12-26_16-38-36.jpg',
  ];
  return (
    <div id='events' className="relative flex flex-col gap-10">

      <div className='w-full flex items-center justify-center flex-col text-center gap-3'>
        <p className='h-[2px] w-40 rounded-md bg-[#17191a] dark:bg-gray-100 mb-2'></p>
        <h1 className='text-3xl font-bold text-[#17191a] dark:text-gray-100'>كواليس</h1>
        <p className='text-[#2E3539] dark:text-[#bfbfbf] text-lg'>مجموعه من الصور واللحظات المختلفه من داخل جوسكريبت</p>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-10"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-4/5 h-[400px] p-4 rounded-lg shadow-lg">
            <Image
              src={selectedImage}
              width={100}
              height={100}
              alt="joscript javascript web frontend backend "
              // layout="fill"
              // objectFit="contain"
              className="rounded-lg w-full h-full"
              loading='lazy'
            />
          </div>
        </div>
      )}


      <div className="columns-2 sm:columns-4 md:columns-5 gap-3">
        {allImgs.map((src, index) => (
          <div
            key={index}
            className="relative w-full mb-2 cursor-pointer overflow-hidden "
            onClick={() => setSelectedImage(src)}
          >
            <div className='overflow-hidden'>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                className="rounded-lg border border-[#17191a56] hover:scale-[1.2] transition-all"
                layout="responsive"
                width={100}
                height={Math.random() * 200 + 150}
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalog
