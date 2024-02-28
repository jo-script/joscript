'use client'
import React, { useState, useEffect } from 'react';

function Theme() {
    // State to track the current theme
    const [isDarkMode, setIsDarkMode] = useState('white');

    useEffect(() => {
        setIsDarkMode(localStorage.getItem('joscriptTheme'))
        if (localStorage.getItem('joscriptTheme') === '#0d1117') {
            document.body.style.backgroundColor = '#0d1117';
        } else {
            document.body.style.backgroundColor = 'white';
            document.getElementById('nav').style.background = 'white'

        }
    }, []);

    const toggleTheme = () => {
        if (localStorage.getItem('joscriptTheme') === '#0d1117') {
            localStorage.setItem('joscriptTheme', 'white')
            document.body.style.backgroundColor = 'white';
            document.getElementById('nav').style.background = 'white'

        } else {
            localStorage.setItem('joscriptTheme', '#0d1117')
            document.body.style.backgroundColor = '#0d1117';
        }
    };

    return (
        <div>
            <button onClick={toggleTheme} className='text-white'>click</button>
        </div>
    )
}

export default Theme

