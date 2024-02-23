'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import front from './imgs/front.svg'
import back from './imgs/back.svg'
import full from './imgs/full-stack.svg'
import ui from './imgs/UI-UX.svg'

let imgs = [
  front,
  back,
  full,
  full,
  full,
  full,
  full,
  full,
  full,
  full,
  ui
]

function ShowImg() {



  return (
    <div id='imgs' className='w-full h-96 flex items-center flex-nowrap overflow-auto mt-28 px-[7%] '>
      
      {
        imgs.map((img, index) => (
          <div key={index} className=' bg-[#fafdff]  min-w-[200px] min-h-[200px] h-[250px] rounded-lg border-[1px] border-[#0000004d] rotate-[-20deg] ml-[-30px] hover:rotate-0 transition-all delay-75 hover:z-50 hover:scale-[1.2]'>
            <Image src={img} width={200} alt='' />
          </div>
        ))
      }

      
    
    </div>
  )
}

export default ShowImg
