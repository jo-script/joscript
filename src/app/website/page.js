'use client'
import React, { useEffect, useState } from 'react'


function WebSite() {

  let [mode, setMode] = useState('white')

  useEffect(() => {
    if (localStorage.getItem('joscriptTheme') === '#111827') {
      setMode('#111827')
    } else setMode('white')
  }, [])

  return (
    <div id='web' className='w-full h-[500px]' style={{ backgroundColor: mode }}>
      WebSite
    </div>
  )
}

export default WebSite
