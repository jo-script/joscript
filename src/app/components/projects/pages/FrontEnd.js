import React from 'react'
import project from '../img/project.png'
import Image from 'next/image'

function FrontEnd() {
    let projects = [
        {
            img: project,
            text: 'wel msd; lwekf  lwe;rk lwefkl jerlkfl lk;wef lklwergkfl ljk;wemglf',
            link: '#',

        },
        {
            img: project,
            text: 'wel msd; lwekf  lwe;rk lwefkl jerlkfl lk;wef lklwergkfl ljk;wemglf',
            link: '#',

        },
        {
            img: project,
            text: 'wel msd; lwekf  lwe;rk lwefkl jerlkfl lk;wef lklwergkfl ljk;wemglf',
            link: '#',

        },
        {
            img: project,
            text: 'wel msd; lwekf  lwe;rk lwefkl jerlkfl lk;wef lklwergkfl ljk;wemglf',
            link: '#',

        },
        {
            img: project,
            text: 'wel msd; lwekf  lwe;rk lwefkl jerlkfl lk;wef lklwergkfl ljk;wemglf',
            link: '#',

        },
        {
            img: project,
            text: 'wel msd; lwekf  lwe;rk lwefkl jerlkfl lk;wef lklwergkfl ljk;wemglf',
            link: '#',

        },
    ]

  return (
    <div className='flex items-center justify-center flex-wrap  gap-5 max-[555px]:gap-1 mt-16'>
    {
        projects.map((item, index) => (
            <div  key={index} className=' card max-w-[254px] h-[170px] max-[555px]:w-[45%] max-[555px]:h-[180px] flex items-center justify-center flex-col text-end rounded-[10px] transition-all delay-75 overflow-hidden relative'>
                <div className='overflow-hidden rounded-md'>
                    {/* <Image src={item.img} width={254} className='w-full hover:scale-[1.2] transition-all delay-75' alt=''  /> */}
                    <Image src={project} alt='' className='h-[180px] w-full'/>
                </div>
                <div className=' w-full h-full text flex items-center justify-center flex-col text-white bg-[#0000006c] absolute top-[100%]'>
                    <p className='text-[16px] text-center mt-4 mb-4'>{item.text}</p>
                    <button className='w-[100px] h-[30px] border-[1px] rounded-md bg-gray-200 '><a href={item.link} target='_blank' className='font-bold text-[19px] text-[#faa000] text-end  mt-5'>عرض</a></button>
                </div>
            </div>
        ))
    }
</div>
  )
}

export default FrontEnd
