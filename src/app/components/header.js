import Link from 'next/link'
import React from 'react'


function Header() {
    return (
        <div id='header' className='w-full h-[86vh] max-[940px]:h-auto grid grid-cols-2 max-[940px]:grid-cols-1 gap-6 max-[940px]:pt-7   '>
            <div className='w-full  flex flex-col gap-5  items-start max-[940px]:items-center  justify-center'>
                <div className='max-[940px]:text-center'>
                    <h1 className='text-[50px] max-[435px]:text-[40px] dark:text-gray-100 text-[#17191a]  '>joscript</h1>
                    <h1 className='text-[40px] max-[435px]:text-[30px] dark:text-gray-100 text-[#17191a]'>أكاديمية لتعليم البرمجة</h1>
                </div>
                <p className='text-lg max-[435px]:text-[17px] text-[#2E3539] dark:text-[#bfbfbf] max-[940px]:text-center'>
                    نهدف إلى نشر المعرفة البرمجية ومساعدة الآخرين على تعلمها
                    <br />
                    نسعى لتوفير بيئة تعليمية إيجابية وداعمة للطلاب من جميع المستويات، من المبتدئين إلى المتقدمين
                </p>

                <div>
                    <Link href='#'>
                        <button className='w-[200px] h-[45px] rounded-md bg-[#17191a] hover:bg-[#292c2e] active:bg-[#383b3d] shadow-[#17191a] dark:bg-[#292c2e] dark:hover:bg-[#323638] border border-[#c5c5c52d] text-gray-100  mt-6 transition-[all_.2s] active:dark:bg-[#565758d4]'>تواصل معنا</button>
                    </Link>
                </div>
            </div>
            <div className='w-full h-full flex items-center justify-center '>
                <img src="/Seminar-pana 1.svg" alt="joscriot" />
            </div>
        </div>
    )
}

export default Header
