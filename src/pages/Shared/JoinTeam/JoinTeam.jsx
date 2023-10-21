import Swal from "sweetalert2";
import axios from "axios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/SectionTitle/Button";


const JoinTeam = () => {
    const { reset } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        axios.post('https://nstusc-server.onrender.com/jointeam', data)
            .then(res => {
                console.log(res)
                reset();
            })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registration done successfully',
            showConfirmButton: false,
            timer: 1500
        })
        navigate('/');
    };
    return (
        <div className="mx-5">
            <SectionTitle heading={"Member Recruitment 2023"}></SectionTitle>
            <h3 className="mx-1 leading-6 text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste natus error id nobis eius perferendis eos nemo ducimus quasi? Assumenda harum deserunt, fugiat dicta esse ad eum est iste impedit voluptate odit, culpa, laboriosam quasi a quis laudantium expedita magni inventore. Eius, consequuntur? Voluptatum similique soluta deleniti ea doloremque?</h3>
            <ul className="mx-5 leading-6 list-disc">
                <li>To register, go to the registration link.</li>
                <li>Fill out the form with appropriate information.</li>
                <li>Pay 205 BDT for Membership</li>
                <li>You can pay through Nagad, bKash, or Rocket to 01798356513.</li>
                <li>Complete the form and send us the transaction ID.</li>
                <li>You will get a confirmation email shortly.</li>
                <li>For any further query, please email dsclub@diu.edu.bd</li>
            </ul>

            <button className="flex justify-start mx-auto my-5" onClick={() => document.getElementById('my_modal_3').showModal()}>
                <Button buttonTitle={"JOIN NSTUSC"}></Button>
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    </form>
                    <SectionTitle heading={"Registration Form"}></SectionTitle>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-full mx-auto my-2 md:w-2/3 form-control">
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-rose-600">Name is required</span>}
                            </div>

                            <div className="w-full mx-auto my-2 md:w-2/3 form-control">
                                <input type="text" {...register("id", { required: true })} name="id" placeholder="Student ID" className="input input-bordered" />
                                {errors.id && <span className="text-rose-600">Student ID is required</span>}
                            </div>

                            <div className="w-full mx-auto my-2 md:w-2/3 form-control">
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Mail address" className="input input-bordered" />
                                {errors.email && <span className="text-rose-600">Mail is required</span>}
                            </div>

                            <div className="w-2/3 max-w-xs my-2 md:mx-auto form-control">
                                <select {...register("gender", { required: true })} className="select select-bordered">
                                    <option disabled selected>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>

                            <div className="w-2/3 max-w-xs my-2 md:mx-auto form-control">
                                <select {...register("faculty", { required: true })} className="select select-bordered">
                                    <option disabled selected>Faculty</option>
                                    <option>Faculty of Engineering</option>
                                    <option>Faculty of Science</option>
                                    <option>Faculty of Social Science and Humanities</option>
                                    <option>Faculty of Business Administration</option>
                                    <option>Faculty of Education Sciences</option>
                                    <option>Faculty of Law</option>
                                </select>
                            </div>

                            <div className="w-full mx-auto my-2 md:w-2/3 form-control">
                                <input type="text" {...register("department", { required: true })} name="department" placeholder="Department" className="input input-bordered" />
                                {errors.department && <span className="text-rose-600">Department is required</span>}
                            </div>

                            <div className="w-full mx-auto my-2 md:w-2/3 form-control">
                                <input type="number"
                                    {...register("contact", {
                                        required: true,
                                        minLength: 11,
                                        maxLength: 11,
                                    })} name="contact" placeholder="Contact number" className="input input-bordered" />
                                {errors.contact?.type === 'required' && <span className="text-rose-600">Password is required</span>}
                                {errors.contact?.type === 'minLength' && <span className="text-rose-600">Give your 11 digit contact number</span>}
                                {errors.contact?.type === 'maxLength' && <span className="text-rose-600">Give your 11 digit contact number</span>}
                            </div>

                            <div className="form-control">
                                <input className="mt-5 btn btn-primary" type="submit" value="Submit" />
                            </div>

                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default JoinTeam;