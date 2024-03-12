import React from 'react'
import project from '../img/project.png'
import Image from 'next/image'

function FrontEnd() {
    let projects = [
        
        {src:'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02nok79Gv3HE9noqNKNAW4ewDBZ816WQfKfj5H9hYxAgEM4PdiM6CgQ8mb4eWVdQuQl%26id%3D61553287433285&show_text=true&width=500'},
        {src:'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0bKzy32x5NQuyzQkYb4AySpVeGdZjPead2dqTASvHRJtgaFXAwGomqFrPmaEwLD4wl%26id%3D61553287433285&show_text=true&width=500'},
        {src:'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02cGbzy9RE82BJUwuf1qdKf6WTNtTJNFPAiJGKGD15JnL7vkSW1XtEiZZKYSYhw8Xvl%26id%3D61553287433285&show_text=false&width=500'},
        // {src:'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0nUXMEpysKHzkMLXEEk1HjuzAme4FT1yrDMPwJQbFnWddzhHiWSSA67Gmi9QUUWVVl%26id%3D61553287433285&show_text=true&width=500'},

    ]

  return (
    <div className='flex items-center justify-center flex-wrap  gap-5 mt-16 max-[673px]:grid max-[673px]:grid-cols-2 place-items-center max-[673px]:w-[95%] max-[673px]:gap-2'>
    {
        projects.map((item, index) => (
            <div  key={index} className={`  card bg-slate-400 h-[170px] max-[555px]:h-[180px] flex items-center justify-center flex-col text-end rounded-[10px] transition-all delay-75 overflow-hidden relative max-[673px]:w-full`}>
                <iframe src={item.src} className='w-full h-full' allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
        ))
    }
</div>
  )
}

export default FrontEnd
