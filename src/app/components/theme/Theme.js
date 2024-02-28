'use client'
import React, { useState, useEffect } from 'react';

// text white = #4a5568
// text black = #9da1a7

// title white = #eef6ff
// title black = #0c0c0c

// dark dev = #151c237b
// white dec = #F0F0F0

// dark mode = #0d1117



function Theme() {
    // State to track the current theme
    const [isDarkMode, setIsDarkMode] = useState('white');

    useEffect(() => {
        setIsDarkMode(localStorage.getItem('joscriptTheme'))
        if (localStorage.getItem('joscriptTheme') === '#0d1117') {
            document.body.style.backgroundColor = '#0d1117';
            document.querySelector('.nav').style.background = '#0d1117'

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


        } else {
            document.body.style.backgroundColor = 'white';
            document.querySelector('.nav').style.background = 'white'

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

        }
    }, []);

    const toggleTheme = () => {

        if (localStorage.getItem('joscriptTheme') === '#0d1117') {
            localStorage.setItem('joscriptTheme', 'white')

            // black 
            document.body.style.backgroundColor = 'white';
            document.querySelector('.nav').style.background = 'white'

            // links
            let links = document.getElementById('links').children

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
        } else { // black
            localStorage.setItem('joscriptTheme', '#0d1117')

            document.body.style.backgroundColor = '#0d1117';
            document.querySelector('.nav').style.background = '#0d1117'

            // links
            let links = document.getElementById('links').children
            // links.forEach((black) => {
            //     black.style.color = '#c4cad1'
            // })



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

        }
    };

    return (
        <div>
            <button onClick={toggleTheme} className='text-white'>click</button>
        </div>
    )
}

export default Theme

