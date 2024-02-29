'use client'
import React, { useState, useEffect } from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";



// text white = #4a5568
// text black = #9da1a7

// title white = #eef6ff
// title black = #0c0c0c

// dark dev = #151c237b
// white dec = #F0F0F0

// dark mode = #0d1117



function Theme() {
    // State to track the current theme
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        setIsDarkMode(localStorage.getItem('joscriptTheme'))
        if (localStorage.getItem('joscriptTheme') === '#0d1117') {
            document.body.style.backgroundColor = '#0d1117';
            document.querySelector('.nav').style.background = '#0d1117'
            setIsDarkMode(true)

            // links
            let link = document.querySelectorAll('.link')
            link.forEach((white) => {
                white.style.color = '#eef6ff'
            })

            // section dev
            let gray = document.querySelectorAll('.gray')
            gray.forEach((gray) => {
                gray.style.backgroundColor = '#151c237b'
            })

            // title
            let title = document.querySelectorAll('.title')
            title.forEach((white) => {
                white.style.color = '#eef6ff'
            })

            // text
            let text = document.querySelectorAll('.text')
            text.forEach((white) => {
                white.style.color = '#9da1a7'
            })

            // cards
            let card = document.querySelectorAll('.card')
            card.forEach((gray) => {
                gray.style.backgroundColor = '#0d1117'
            })


        } else {
            document.body.style.backgroundColor = 'white';
            document.querySelector('.nav').style.background = 'white'
            setIsDarkMode(false)

            // links
            let link = document.querySelectorAll('.link')
            link.forEach((white) => {
                white.style.color = '#0c0c0c'
            })

            // section dev
            let gray = document.querySelectorAll('.gray')
            gray.forEach((gray) => {
                gray.style.backgroundColor = '#F0F0F0'
            })

            // title
            let title = document.querySelectorAll('.title')
            title.forEach((black) => {
                black.style.color = '#0c0c0c'
            })

            // text
            let text = document.querySelectorAll('.text')
            text.forEach((black) => {
                black.style.color = '#4a5568'
            })

            // cards
            let card = document.querySelectorAll('.card')
            card.forEach((gray) => {
                gray.style.backgroundColor = 'white'
            })

        }
    }, []);

    const toggleTheme = () => {

        if (localStorage.getItem('joscriptTheme') === '#0d1117') {
            localStorage.setItem('joscriptTheme', 'white')

            setIsDarkMode(false)
            // black 
            document.body.style.backgroundColor = 'white';
            document.querySelector('.nav').style.background = 'white'

            // links
            let link = document.querySelectorAll('.link')
            link.forEach((white) => {
                white.style.color = '#0c0c0c'
            })
            // section dev
            let gray = document.querySelectorAll('.gray')
            gray.forEach((gray) => {
                gray.style.backgroundColor = '#F0F0F0'
            })

            // title
            let title = document.querySelectorAll('.title')
            title.forEach((black) => {
                black.style.color = '#0c0c0c'
            })

            // text
            let text = document.querySelectorAll('.text')
            text.forEach((black) => {
                black.style.color = '#4a5568'

                // cards
                let card = document.querySelectorAll('.card')
                card.forEach((gray) => {
                    gray.style.backgroundColor = 'white'
                })
            })
        } else { // `black`
            localStorage.setItem('joscriptTheme', '#0d1117')

            document.body.style.backgroundColor = '#0d1117';
            document.querySelector('.nav').style.background = '#0d1117'
            setIsDarkMode(true)


            // links
            let link = document.querySelectorAll('.link')
            link.forEach((white) => {
                white.style.color = '#eef6ff'
            })

            // section dev
            let gray = document.querySelectorAll('.gray')
            gray.forEach((gray) => {
                gray.style.backgroundColor = '#151c237b'
            })

            // title
            let title = document.querySelectorAll('.title')
            title.forEach((white) => {
                white.style.color = '#eef6ff'
            })

            // text
            let text = document.querySelectorAll('.text')
            text.forEach((white) => {
                white.style.color = '#9da1a7'
            })

            // cards
            let card = document.querySelectorAll('.card')
            card.forEach((gray) => {
                gray.style.backgroundColor = '#0d1117'
            })
        }
    };

    return (
        <div>
            {!isDarkMode && <MdDarkMode onClick={toggleTheme} className='scale-[2] cursor-pointer text-[#161f2ccc] hover:bg-[#b5b5b562] p-[2px] rounded-full transition-[all_.3s]'/> }
            { isDarkMode  && <MdOutlineLightMode onClick={toggleTheme} className='scale-[2] cursor-pointer text-white hover:bg-[#90909062] p-[2px] rounded-full transition-[all_.3s]'/> }
        </div>
    )
}

export default Theme

