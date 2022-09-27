import './aboutMe.css'
import React from 'react'



function AboutMe() {
    return (
        <div id='aboutMe' className='w-full h-screen bg-[#0a192f] text-gray-300 container'>
            <div className='sm:text-right pb-8 pl-4'>
                <h2 className='d-flex justify-content-center flex-wrap'>About Me</h2>
            </div>
            <div id='aboutMeContainer'>

                <img src="profilePic.jfif" id='profilePic' alt="Profile Pic"></img>

                <p  >
                    Hi there! Thank you for visiting my website! I am a full-stack web developer with a passion for building interactive web applications. I utilize technologies such as JavaScript, HTML, CSS, React, Handlebars, jQuery, Node.js, Express, MySQL, MongoDB and GraphQL to design and construct exciting websites.
                </p>

                <p>
                    In addition to being a web developer, I am also a Certified Public Accountant (CPA) with experience working for multi-billion-dollar corporations as well as a Big 4 accounting firm. I specialized in SEC (Securities and Exchange Commission) Reporting and Technical Accounting which involves writing technical accounting memos for complex, multi-million-dollar transactions such as mergers and stock-buybacks. With this, I am trained in researching and presenting elaborate reports to clients in addition to C-level executives. This often consists of explaining complex matters to individuals who are not accustomed to technical accounting.
                </p>
                <p>
                    I enjoy implementing systems such as Fidelity for stock-based compensation reporting and Lease Accelerator for lease accounting. Implementing Lease Accelerator was especially exciting as I was able to train and guide approximately 25 international accountants on how to use the platform.
                </p>
                <p>What excites me about web development is the ability to use logic to solve complicated issues. I always get exhilarated from learning about new technologies and how they operate.
                </p>
                <p>
                    For my next career move, I am in search for entry level software engineer or developer roles. My contact information can be found at the bottom of this page, I would love to connect!
                </p>
            </div>

        </div >
    )

}

export default AboutMe;