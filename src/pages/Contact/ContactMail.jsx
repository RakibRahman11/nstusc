import { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const ContactMail = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const form = useRef();
    const sendEmail = (data) => {
        console.log(data);
        emailjs
            .sendForm(
                'service_bicg2ik',
                'template_1rjh898',
                form.current, '_Bn_O9Y1OUOIhT5Zs'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    Swal.fire('Message sent successfully.')
                    navigate('/');
                },
                (error) => {
                    console.log(error.text);
                });

    };
    return (
        <div>
            <Helmet>
                <title>Contact NSTUSC</title>
            </Helmet>
            <div className="mx-auto card-body">
                <SectionTitle heading={"Send message to NSTU Science Club"}></SectionTitle>
                <form ref={form} onSubmit={handleSubmit(sendEmail)} className="mx-auto card-body lg:w-1/2 sm:w-full md:w-1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Name
                            </span>
                        </label>
                        <input value={user.displayName} type="text" {...register("user_name", { required: true })} name="user_name" placeholder="Name" className="input input-bordered" readOnly />
                        {errors.user_name && <span className="text-rose-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Email
                            </span>
                        </label>
                        <input value={user.email} type="text" {...register("user_email", { required: true })} name="user_email" className="input input-bordered" readOnly />
                        {errors.user_email && <span className="text-rose-600">Mail is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Message
                            </span>
                        </label>
                        <textarea name="message" placeholder="Type here" className="w-full max-w-xs input input-bordered input-lg" />
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