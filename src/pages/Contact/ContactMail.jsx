import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMail = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_bicg2ik',
                'template_1rjh898',
                form.current, '_Bn_O9Y1OUOIhT5Zs'
            )
            .then(
                (result) => {
                console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactMail;