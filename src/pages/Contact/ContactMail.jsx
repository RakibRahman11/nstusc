import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';

const ContactMail = () => {
    const { handleSubmit, reset } = useForm();
    const form = useRef();
    const sendEmail = () => {
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
        reset();
    };
    return (
        <div>
            <Helmet>
                <title>Contact NSTUSC</title>
            </Helmet>
            <div className="card-body mx-auto">
                <SectionTitle heading={"Send message to NSTU Science Club"}></SectionTitle>
                <form ref={form} onSubmit={handleSubmit(sendEmail)} className="card-body lg:w-1/2 mx-auto sm:w-full md:w-1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Name
                            </span>
                        </label>
                        <input type="text" name="user_name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Email
                            </span>
                        </label>
                        <input type="email" name="user_email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Message
                            </span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />
                    </div>
                    <div className="mt-6 form-control">
                        <input className="btn btn-primary" type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default ContactMail;