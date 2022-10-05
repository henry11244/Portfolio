import './footer.css'
import React from 'react'
import { MdOutlineMail } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'


function Footer() {
    return (
        <footer class="mt-auto">
            <div class="d-flex justify-content-center">
                <a href="https://github.com/henry11244" target='#'> <AiFillGithub className='contact__option-icon' /></a>
                <div>🧋</div>
                <a href="https://www.linkedin.com/in/henry11244/" target='#'>  <BsLinkedin className='contact__option-icon' /></a>
                <div>🧋</div>
                <a href="mailto:hln11244@gmail.com" target='#'><MdOutlineMail className='contact__option-icon' /></a>
            </div>

        </footer>
    )

}

export default Footer;