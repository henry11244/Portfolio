import React from 'react'
import './nav.css'
import { useState } from 'react'



const Nav = () => {

    const [activeNav, setActiveNav] = useState('#')

    return (
        <div>
            <nav>
                <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}>🏠</a>
                <a href="#aboutMe" onClick={() => setActiveNav('#aboutMe')} className={activeNav === '#aboutMe' ? 'active' : ''}>About</a>
                <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>Portfolio</a>
                <a href="#resume" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>Resume</a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
            </nav>
        </div>
    )
}

export default Nav