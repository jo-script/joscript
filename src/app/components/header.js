import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Header() {
    return (
        <div id='header' className='w-full h-[86vh] max-[940px]:h-auto grid grid-cols-2 max-[940px]:grid-cols-1 gap-6 max-[940px]:pt-7   '>
            <div className='w-full  flex flex-col gap-5  items-start max-[940px]:items-center  justify-center'>
                <div className='max-[940px]:text-center'>
                    <h1 className='text-[50px] max-[435px]:text-[40px] text-[#fff] '>joscript</h1>
                    <h1 className='text-[40px] max-[435px]:text-[30px] text-[#fff] '>أكاديمية لتعليم البرمجة</h1>
                </div>
                <p className='text-lg max-[435px]:text-[17px] text-[#c375ff] max-[940px]:text-center'>
                    نهدف إلى نشر المعرفة البرمجية ومساعدة الآخرين على تعلمها
                    <br />
                    نسعى لتوفير بيئة تعليمية إيجابية وداعمة للطلاب من جميع المستويات، من المبتدئين إلى المتقدمين
                </p>

                <div className=''>
                    <Link href='https://wa.me/+201032734738'>
                        <button className='w-[200px] h-[45px] rounded-md font-semibold bg-gradient-to-br from-[#6402B1] to-[#9d2df3] hover:scale-[1.05] active:bg-[#6402B1] shadow-[0 0 10px 5px #6402B1]  text-gray-100  mt-6 transition-[all_.2s] active:dark:bg-[#565758d4]'>تواصل معنا</button>
                    </Link>
                </div>
            </div>
            <div className='w-full h-full flex items-center justify-center '>
                <Image src="/Seminar-pana 1.svg" alt="joscriot" className='w-full h-full' width={500} height={500} />
            </div>
            
        </div>
    )
}

export default Header
