'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import FrontEnd from './pages/FrontEnd'
import BackEnd from './pages/BackEnd'
import FullStack from './pages/FullStack'
import MobileApplication from './pages/MobileApplication'
import CyberSecurity from './pages/CyberSecurity'
import UiUx from './pages/UiUx'

function Projects() {
    
    let [showPages, setShowPages] = useState('frontEnd')

    let pages = (page) => {
        if(page != showPages){
            setShowPages(page)
            
        }
    }

    return (

        <div id='projects' className=' gray w-full flex flex-col items-center justify-center mt-[100px] bg-[#151c237b] py-24 backdrop-blur-md relative '>
            <p className='bg-[#faa000] h-[3px] w-[10%] '></p>
            <h1 className='title text-[#eef6ff] text-[35px] mt-4 '>المشاريع</h1>
            <p className='text text-[20px] text-[#9da1a7] text-center mt-2 max-[500px]:text-[16px] max-[500px]:w-[70%]'>المشاريع التي نفذها الطلاب خلال مدة الكورس وبعد التخرج</p>

            {/* pages projects vav bare  */}
            <div id='projects-nav' className=' w-[95%] flex items-center justify-center max-[800px]:justify-normal p-3 text-[#0c0c0c] text-[18px] gap-5 overflow-auto mt-9 max-[500px]:text-[15px]'>
                <button onClick={() => pages('frontEnd')} className={`min-w-[90px] hover:text-[#faa000] hover:scale-[1.1] transition-all delay-75 ${showPages === 'frontEnd' ? 'text-[#faa000] font-bold underline decoration-[2px]' : 'text-[#eef6ff] font-thin'}`}>Front-End</button>
                <button onClick={() => pages('backEnd')} className={` min-w-[90px] hover:text-[#faa000] hover:scale-[1.1] transition-all delay-75 ${showPages === 'backEnd' ? 'text-[#faa000] font-bold underline decoration-[2px]' : 'text-[#eef6ff] font-thin'}`}>Back-End</button>
                <button onClick={() => pages('fullstack')} className={`min-w-[90px] w-auto hover:text-[#faa000] hover:scale-[1.1] transition-all delay-75 ${showPages === 'fullstack' ? 'text-[#faa000] font-bold underline decoration-[2px]' : 'text-[#eef6ff] font-thin'}`}>Full-Stack</button>
                <button onClick={() => pages('mobileApplication')} className={`min-w-[160px] hover:text-[#faa000] hover:scale-[1.1] transition-all delay-75 ${showPages === 'mobileApplication' ? 'text-[#faa000] font-bold underline decoration-[2px]' : 'text-[#eef6ff] font-thin'}`}>Mobile-Application</button>
                <button onClick={() => pages('cyberSecurity')} className={`min-w-[130px]  hover:text-[#faa000] hover:scale-[1.1] transition-all delay-75 ${showPages === 'cyberSecurity' ? 'text-[#faa000] font-bold underline decoration-[2px]' : 'text-[#eef6ff] font-thin'}`}>Cyber-Security</button>
                <button onClick={() => pages('UiUx')} className={`min-w-[66px] hover:text-[#faa000] hover:scale-[1.1] transition-all delay-75 ${showPages === 'UiUx' ? 'text-[#faa000] font-bold underline decoration-[2px]' : 'text-[#eef6ff] font-thin'}`}>UI / UX</button>
            </div>
                {showPages === 'frontEnd' && <FrontEnd />}
                {showPages === 'backEnd' && <BackEnd />}
                {showPages === 'fullstack' && <FullStack />}
                {showPages === 'mobileApplication' && <MobileApplication />}
                {showPages === 'cyberSecurity' && <CyberSecurity />}
                {showPages === 'UiUx' && <UiUx />}
        </div>
    )
}

export default Projects
