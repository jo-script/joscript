import React from 'react'

function TeamWork() {

    return (
        <div id='teamwork' className='gray w-full bg-[#151c237b] px-[2%] py-24 flex flex-col items-center justify-center mt-[100px] relative'>
            <div className='w-full flex flex-col items-center'>
                <p className='bg-[#faa000] h-[3px] w-[10%] '></p>
                <h1 className='title text-[#eef6ff] text-[35px] mt-4 '>فريق ألعمل</h1>
                <p className='text text-[20px] text-[#9da1a7] text-center mt-2 max-[500px]:text-[16px] max-[500px]:w-[78%]'>فريق ألعمل القائم على الإدارة والتدريس في مختلف المجالات البرمجية</p>
            </div>

            <iframe width="640px" height="480px" src="https://forms.microsoft.com/r/ELP7xVcXbS?embed=true" frameborder="0" marginwidth="0" marginheight="0"  allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
        </div>
    )
}

export default TeamWork
