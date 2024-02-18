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

        <div id='projects' className='w-full px-[2%] flex flex-col items-center justify-center mt-[100px] py-12 relative'>
            <p className='bg-[#faa000] h-[3px] w-[10%] '></p>
            <h1 className='text-[#0c0c0c] text-[35px] mt-4 '>المشاريع</h1>
            <p className='text-[20px] text-[#4A5568] text-center mt-2'>المشاريع التي نفذها الطلاب خلال مدة الكورس وبعد التخرج</p>

            {/* pages projects vav bare  */}
            <div className='w-[70%] text-[#0c0c0c] text-[18px] flex flex-wrap items-center justify-center gap-6 mt-9'>
                <button onClick={() => pages('frontEnd')} className={`hover:text-[#faa000] hover:scale-[1.1] transition-all delay-75 ${showPages === 'frontEnd' ? 'text-[#faa000] font-bold underline decoration-[2px]' : 'text-[#0c0c0c] font-thin'}`}>Front End</button>
                <button onClick={() => pages('backEnd')} className={`hover:text-[#faa000] hover:scale-[1.1] transition-all delay-75 ${showPages === 'backEnd' ? 'text-[#faa000] font-bold underline decoration-[2px]' : 'text-[#0c0c0c] font-thin'}`}>Back End</button>
                <button onClick={() => pages('fullstack')} className={`hover:text-[#faa000] hover:scale-[1.1] transition-all delay-75 ${showPages === 'fullstack' ? 'text-[#faa000] font-bold underline decoration-[2px]' : 'text-[#0c0c0c] font-thin'}`}>Full Stack</button>
                <button onClick={() => pages('mobileApplication')} className={`hover:text-[#faa000] hover:scale-[1.1] transition-all delay-75 ${showPages === 'mobileApplication' ? 'text-[#faa000] font-bold underline decoration-[2px]' : 'text-[#0c0c0c] font-thin'}`}>Mobile Application</button>
                <button onClick={() => pages('cyberSecurity')} className={`hover:text-[#faa000] hover:scale-[1.1] transition-all delay-75 ${showPages === 'cyberSecurity' ? 'text-[#faa000] font-bold underline decoration-[2px]' : 'text-[#0c0c0c] font-thin'}`}>Cyber Security</button>
                <button onClick={() => pages('UiUx')} className={`hover:text-[#faa000] hover:scale-[1.1] transition-all delay-75 ${showPages === 'UiUx' ? 'text-[#faa000] font-bold underline decoration-[2px]' : 'text-[#0c0c0c] font-thin'}`}>UI / UX</button>

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
