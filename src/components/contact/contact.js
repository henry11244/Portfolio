import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_nji1wwg', 'template_ug48xci', form.current, 'SW7DubgWn1Wjaa_53')
        e.target.reset()
    };

    return (
        <section id='contact' >

            <h2 className="d-flex justify-content-center flex-wrap">Contact Me</h2>
            <div className='container contact__container'>
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>

                        <a href="mailto:hln11244@gmail.com" target='#'><h5 className='contactLinks'>hln11244@gmail.com</h5></a>
                    </article>
                    <article className='contact__option'>
                        <AiFillGithub className='contact__option-icon' />
                        <h4>GitHub</h4>
                        <a href="https://github.com/henry11244" target='#'><h5 className='Github'>github.com/henry11244</h5></a>
                    </article>
                    <article className='contact__option'>
                        <BsLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/henry11244" target='#'><h5 className='contactLinks'>linkedin.com/in/henry11244</h5></a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact