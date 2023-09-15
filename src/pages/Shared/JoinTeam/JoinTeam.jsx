import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"

const JoinTeam = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div className="mx-5">
            <SectionTitle heading={"Member Recruitment 2023"}></SectionTitle>
            <h3 className="mx-5 text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste natus error id nobis eius perferendis eos nemo ducimus quasi? Assumenda harum deserunt, fugiat dicta esse ad eum est iste impedit voluptate odit, culpa, laboriosam quasi a quis laudantium expedita magni inventore. Eius, consequuntur? Voluptatum similique soluta deleniti ea doloremque?</h3>
            <button className="flex justify-start mx-auto my-5 btn" onClick={() => document.getElementById('my_modal_3').showModal()}>JOIN NSTUSC</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-lg font-bold">Registration Form</h3>
                    <div className="px-5 py-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-2/3 my-2 form-control">
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-rose-600">Name is required</span>}
                            </div>

                            <div className="w-2/3 my-2 form-control">
                                <input type="text" {...register("id", { required: true })} name="id" placeholder="Student ID" className="input input-bordered" />
                                {errors.id && <span className="text-rose-600">Student ID is required</span>}
                            </div>

                            <div className="w-2/3 max-w-xs my-2 form-control">
                                <select {...register("gender", { required: true })} className="select select-bordered">
                                    <option disabled selected>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>

                            <div className="w-2/3 my-2 form-control">
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Mail address" className="input input-bordered" />
                                {errors.email && <span className="text-rose-600">Mail is required</span>}
                            </div>


                            <div className="w-2/3 max-w-xs my-2 form-control">
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

                            <div className="w-2/3 max-w-xs my-2 form-control">
                                <select {...register("department", { required: true })} className="select select-bordered">
                                    <option disabled selected>Department</option>
                                    <option>CSTE</option>
                                    <option>ACCE</option>
                                    <option>ICE</option>
                                    <option>EEE</option>
                                </select>
                            </div>

                            <div className="w-2/3 max-w-xs my-2 form-control">
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

                            <div className="mt-2 form-control">
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </div>

                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default JoinTeam;