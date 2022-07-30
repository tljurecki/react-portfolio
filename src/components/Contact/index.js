import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
        }
    };
   
    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section>
            <h1 className="contact text-info">Contact Me</h1>
            <form className="text-info" id="contact-form" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
                    <input type="text" name="name"  defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-12 col-form-label">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="row mb-3">
                    <label htmlFor="message" className="col-sm-12 col-form-label">Message:</label>
                    <textarea name="message" rows="4" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;