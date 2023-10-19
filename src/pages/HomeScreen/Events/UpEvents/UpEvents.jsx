import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const UpEvents = () => {
    const [upEvents, setUpEvents] = useState([]);
    useEffect(() => {
        fetch('https://nstusc-server.onrender.com/upcomingEvents')
            .then(res => res.json())
            .then(data => setUpEvents(data))
    }, [])
    return (
        <div className="my-14">
            <SectionTitle heading={"Upcoming Events"}></SectionTitle>
            <div className="grid grid-cols-1 grid-rows-1 grid-rows-none gap-10 mx-auto lg:grid-cols-2 md:grid-cols-2">
                {
                    upEvents.map(item => <div
                        key={item._id}
                    >
                        <div>
                            <img src={item.event_image} alt="" />
                            <h3 className="my-2 text-lg font-bold text-center uppercase border-l-4 border-indigo-500 bg-sky-100">{item.events_name}</h3>
                        </div>
                    </div>)
                }
            </div>

            <Link to="/prevEvents">
                <p className="w-64 mx-auto my-24 p-2 text-xl md:text-2xl font-bold text-center text-white uppercase rounded bg-gradient-to-r from-[#3157ab] from-40% via-[#223c7f] via-70% to-[#08153d] to-80%">Previous Events</p>
            </Link>
        </div>
    );
};

export default UpEvents;