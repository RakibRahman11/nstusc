import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
// import PrevEvents from "../Events/PrevEvents/PrevEvents";
import UpEvents from "../Events/UpEvents/UpEvents";
import Massage from "../Massage/Massage";
import Featured from "../../Shared/Featured/Featured";
// import Birthday from "../Birthday/Birthday";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
    const [allBirthday, setAllBirthday] = useState([]);
    const date = new Date();
    const today = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;

    useEffect(() => {
        fetch('https://nstusc-server.onrender.com/birthdayList')
            .then(res => res.json())
            .then(data => {
                const match = data.filter(item => item.birthdayDate === today)
                setAllBirthday(match)
                console.log(allBirthday)
            })
    }, [])

    const names = allBirthday.map(item => item.name);

    return (
        <div>
            <Helmet>
                <title>NSTUSC | Home</title>
            </Helmet>
            <Banner></Banner>
            {
                allBirthday.length > 0 && <div>
                    <div className="flex justify-center mx-auto my-5">
                        <label htmlFor="my_modal_7" className="btn my-5 btn-outline btn-[#08153d]">Today Birthday {today}</label>
                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <div className="shadow-xl card card-compact bg-base-100">
                                    <img src="https://i.ibb.co/vhnkHgh/birthday.jpg" alt="Shoes" />
                                    <div className="card-body">
                                        <h2 className="mx-auto text-center card-title">
                                            <ul>
                                                {names.map((name, index) => (
                                                    <li key={index}>{name}</li>
                                                ))}
                                            </ul>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                        </div>
                    </div>
                </div>
            }
            <UpEvents></UpEvents>
            {/* <PrevEvents></PrevEvents> */}
            <Massage></Massage>
            <Featured></Featured>
        </div>
    );
};

export default Home;