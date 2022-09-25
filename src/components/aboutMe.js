import './aboutMe.css'
import React from 'react'



function AboutMe() {
    return (
        <div id='aboutMe' className='w-full h-screen bg-[#0a192f] text-gray-300 container'>
            <div className='flex flex-col justify-center items-center w-full h-full aboutMe__container'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <h2 className='d-flex justify-content-center flex-wrap'>About Me</h2>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mx-[500px] d-flex'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <img src="profilePic.jfif" id='profilePic' alt="Profile Pic"></img>
                    </div>
                    <div className='text-lg'>
                        <p  >
                            Full-stack web developer with exceptional understanding of the business environment as a Certified Public Accountant
                            who specialized in SEC (Securities and Exchange Commission) reporting for multi-billion dollar corporations as well as a Big 4 accounting firm.
                            Recently earned the full-stack web development certificate from the University California, Berkeley Extension.
                            Known as an innovative problem solver passionate about developing applications, with a focus on mobile-first
                            design and development. Trained in the ability to lead projects from beginning to end as well as work in high pace and pressure enviroments. Process improvement and quality are constant
                            goals with each project as well as
                            aiming to best engage audiences for an impactful user experience. Team projects include applications to plan social gatherings, to coordinate volunteering events and an
                            exciting take on the Flappy Bird game.
                        </p>

                        <p>As a full-stack web developer, I utilize front-end technology such as HTML, JavaScript, React, Handlebars,
                            Bootstrap and jQuery to create exciting, immersive digital destinations that have a lasting impact on visitors. To
                            add functionality to these applications, I utilize technology such as Node, Express, MySQL, MongoDB and GraphQL to
                            construct the back-end of applications.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutMe;