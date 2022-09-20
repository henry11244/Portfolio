import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import emailjs from '@emailjs/browser';

const styles = {
    container: {
        flexGrow: 1,
    },
    form: {
        display: 'flex',
        flexFlow: 'row wrap',
        gap: 20,

    },
    info: {
        flex: '1 1 30%',

    },
    message: {
        flex: '1 1 80%',

    },
    error: {

    }
}

function Contact() {
    // Form state, initially empty
    const [formState, setFormState] = useState(
        {
            name: '',
            email: '',
            message: '',
        }
    );

    // Error message state
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = ({ target }) => {
        // Update form state
        let newFormState = { ...formState };
        newFormState[target.name] = target.value;
        setFormState(newFormState);

        // Clear error message when valid email is entered
        if (validateEmail(newFormState.email)) {
            setErrorMessage('');
        }
    };

    // Check for valid email
    const checkEmail = () => {
        if (!validateEmail(formState.email)) {
            setErrorMessage('Valid email is required');
            return false;
        } else {
            return true;
        }
    }

    // Check name not blank
    const checkName = () => {
        if (!formState.name.trim()) {
            setErrorMessage('Name required');
            return false;
        } else {
            return true;
        }
    }

    // Check message not blank
    const checkMessage = () => {
        if (!formState.message.trim()) {
            setErrorMessage('Message required');
            return false;
        } else {
            return true;
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (checkEmail() && checkName() && checkMessage()) {
            // Send email via emailjs
            // const formData = { 
            //     user_name: formState.name, 
            //     user_email: formState.email,
            //     message: formState.message
            // }

            emailjs.send('service_nji1wwg', 'template_ug48xci', formState, 'SW7DubgWn1Wjaa_53')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            // Confirm message sent and reset form
            alert(`Message sent!`);
            setFormState(
                {
                    name: '',
                    email: '',
                    message: '',
                }
            )
        } else {
            alert(`Message failed!`);
        }
    };

    return (
        <article >
            <h2 class="col-12 justify-content-center d-flex " >Contacts</h2>
            <div class="justify-content-center d-flex ">
                <form id="contact-form" class=" col-9" style={styles.form}>
                    <input
                        value={formState.email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={checkEmail}
                        type="email"
                        placeholder="Email"
                        style={styles.info}
                    />
                    <input
                        value={formState.name}
                        name="name"
                        onChange={handleInputChange}
                        onBlur={checkName}
                        type="text"
                        placeholder="Name"
                        style={styles.info}
                    />
                    <textarea
                        value={formState.message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={checkMessage}
                        type="text"
                        placeholder="Message"
                        style={styles.message}
                        rows="5"
                    />
                    <div class="col-12 justify-content-center d-flex">
                        <button type="button" class="submit btn-primary" onClick={handleFormSubmit}>Submit</button>
                    </div>
                </form>
                {errorMessage && (
                    <div>
                        <p style={styles.error}>{errorMessage}</p>
                    </div>
                )}
            </div>
        </article>
    );
}

export default Contact;