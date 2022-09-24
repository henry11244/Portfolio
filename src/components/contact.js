// import React, { useState } from 'react';
// import { validateEmail } from '../utils/helpers';
// import emailjs from '@emailjs/browser';

// const styles = {
//     container: {
//         flexGrow: 1,

//     },
//     form: {
//         display: 'flex',
//         flexFlow: 'row wrap',
//         gap: 20,
//         width: '50%'

//     },
//     info: {
//         flex: '1 1 30%',

//     },
//     message: {
//         flex: '1 1 80%',

//     },
//     error: {

//     }
// }

// function Contact() {
//     // Form state, initially empty
//     const [formState, setFormState] = useState(
//         {
//             name: '',
//             email: '',
//             message: '',
//         }
//     );

//     // Error message state
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleInputChange = ({ target }) => {
//         // Update form state
//         let newFormState = { ...formState };
//         newFormState[target.name] = target.value;
//         setFormState(newFormState);

//         // Clear error message when valid email is entered
//         if (validateEmail(newFormState.email)) {
//             setErrorMessage('');
//         }
//     };

//     // Check for valid email
//     const checkEmail = () => {
//         if (!validateEmail(formState.email)) {
//             setErrorMessage('Valid email is required');
//             return false;
//         } else {
//             return true;
//         }
//     }

//     // Check name not blank
//     const checkName = () => {
//         if (!formState.name.trim()) {
//             setErrorMessage('Name required');
//             return false;
//         } else {
//             return true;
//         }
//     }

//     // Check message not blank
//     const checkMessage = () => {
//         if (!formState.message.trim()) {
//             setErrorMessage('Message required');
//             return false;
//         } else {
//             return true;
//         }
//     }

//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         if (checkEmail() && checkName() && checkMessage()) {
//             // Send email via emailjs
//             // const formData = { 
//             //     user_name: formState.name, 
//             //     user_email: formState.email,
//             //     message: formState.message
//             // }

//             emailjs.send('service_nji1wwg', 'template_ug48xci', formState, 'SW7DubgWn1Wjaa_53')
//                 .then((result) => {
//                     console.log(result.text);
//                 }, (error) => {
//                     console.log(error.text);
//                 });

//             // Confirm message sent and reset form
//             alert(`Message sent!`);
//             setFormState(
//                 {
//                     name: '',
//                     email: '',
//                     message: '',
//                 }
//             )
//         } else {
//             alert(`Message failed!`);
//         }
//     };

//     return (
//         <article  >
//             <h2 class="col-12 justify-content-center d-flex " id='contact' >Contacts</h2>
//             <div class="justify-content-center d-flex contact ">
//                 <form id="contact-form" class="justify-content-center col-9" style={styles.form}>
//                     <input
//                         value={formState.email}
//                         name="email"
//                         onChange={handleInputChange}
//                         onBlur={checkEmail}
//                         type="email"
//                         placeholder="Email"
//                         style={styles.info}
//                     />
//                     <input
//                         value={formState.name}
//                         name="name"
//                         onChange={handleInputChange}
//                         onBlur={checkName}
//                         type="text"
//                         placeholder="Name"
//                         style={styles.info}
//                     />
//                     <textarea
//                         value={formState.message}
//                         name="message"
//                         onChange={handleInputChange}
//                         onBlur={checkMessage}
//                         type="text"
//                         placeholder="Message"
//                         style={styles.message}
//                         rows="5"
//                     />
//                     <div class="col-12 justify-content-center d-flex">
//                         <button type="button" class="submit btn-primary" onClick={handleFormSubmit}>Submit</button>
//                     </div>
//                 </form>
//                 {errorMessage && (
//                     <div>
//                         <p style={styles.error}>{errorMessage}</p>
//                     </div>
//                 )}
//             </div>
//         </article>
//     );
// }

// export default Contact;

import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'
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

                        <a href="mailto:hln11244@gmail.com" target='#'><h5>hln11244@gmail.com</h5></a>
                    </article>
                    <article className='contact__option'>
                        <AiOutlinePhone className='contact__option-icon' />
                        <h4>Telephone</h4>

                        <a href="tel:+16037482601"><h5>+1 408-628-2303</h5></a>
                    </article>
                    <article className='contact__option'>
                        <BsLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/henry11244" target='#'><h5>linkedin.com/in/henry11244</h5></a>
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