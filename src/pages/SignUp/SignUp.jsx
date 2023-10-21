import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Account created successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://nstusc-server.onrender.com/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertId) {
                                    reset();
                                }
                            })
                        navigate('/');
                    })
            })
    };

    return (
        <div className="mx-auto mt-5 shadow-xl md:w-1/2 card w-96 bg-base-100">
            <Helmet>
                <title>Create new account</title>
            </Helmet>
            <figure><img src="https://i.ibb.co/6y9DHb8/3d-modern-plexus-design-network-communications-modern-techno.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <SectionTitle heading={"Create a new account"}></SectionTitle>
                {/* <h2 className="card-title">Create a new account</h2> */}
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Name
                            </span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-rose-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Email
                            </span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-rose-600">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Password
                            </span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 15,
                                pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                            })} name="password" placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <span className="text-rose-600">Password is required</span>}
                        {errors.password?.type === 'required' && <span className="text-rose-600">Password is required</span>}
                        {errors.password?.type === 'minLength' && <span className="text-rose-600">Password must be minimum 6 characters</span>}
                        {errors.password?.type === 'maxLength' && <span className="text-rose-600">Password must be within 15 characters</span>}
                        {errors.password?.type === 'pattern' && <span className="text-rose-600">Password must have one uppercase, lowercase, digit and special character</span>}
                    </div>
                    <div className="mt-6 form-control">
                        <input className="btn btn-primary" type="submit" value="SignUp" />
                    </div>
                </form>
                <p><small>Already have an account?<Link to="/login">Login</Link> </small></p>
            </div>
        </div>
    );
};

export default SignUp;