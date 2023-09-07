import { useEffect, useState } from "react";
import UpEvent from "../UpEvent/UpEvent";
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
            <div className="grid grid-cols-1 grid-rows-3 grid-rows-none gap-4 mx-auto lg:grid-cols-3 md:grid-cols-2">
                {
                    upEvents.map(item => <UpEvent
                        key={item._id}
                        item={item}
                    ></UpEvent>)
                }
            </div>
            <Link to="/upEvents"><p className="w-1/2 mx-auto text-xl font-bold text-center text-white uppercase rounded bg-cyan-500">All Events</p></Link>
        </div>
    );
};

export default UpEvents;