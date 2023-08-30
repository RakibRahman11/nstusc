import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className="mx-auto mt-5 shadow-xl md:w-1/2 card w-96 bg-base-100">
            <figure><img src="https://i.ibb.co/6y9DHb8/3d-modern-plexus-design-network-communications-modern-techno.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Create a new account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Name
                            </span>
                        </label>
                        <input type="text" {...register("name")} name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Email
                            </span>
                        </label>
                        <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Password
                            </span>
                        </label>
                        <input type="password"
                            {...register("password")} name="password" placeholder="password" className="input input-bordered" />
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