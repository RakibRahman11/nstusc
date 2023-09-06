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
            <div className="grid grid-cols-3 grid-rows-3 grid-rows-none gap-4">
                {
                    upEvents.map(item => <UpEvent
                        key={item._id}
                        item={item}
                    ></UpEvent>)
                }
            </div>
            <Link to="/upEvents"><p className="w-48 mx-auto text-xl font-bold text-center text-white uppercase rounded bg-cyan-500 w-96 h-7">All Events</p></Link>
        </div>
    );
};

export default UpEvents;