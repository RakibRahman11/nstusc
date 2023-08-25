import { useEffect, useState } from "react";
import UpEvent from "../UpEvent/UpEvent";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const UpEvents = () => {
    const [upEvents, setUpEvents] = useState([]);
    useEffect(() => {
        fetch('upEvents.json')
            .then(res => res.json())
            .then(data => setUpEvents(data))
    }, [])
    return (
        <div className="my-14">
            <SectionTitle heading={"Upcoming Events"}></SectionTitle>
            <div className="grid grid-rows-none gap-4 grid-cols-3 grid-rows-3">
                {
                    upEvents.map(item => <UpEvent
                        key={item._id}
                        item={item}
                    ></UpEvent>)
                }
            </div>
            <p className="text-xl uppercase text-center bg-cyan-500 w-48 rounded mx-auto text-white font-bold w-96 h-7">All Events</p>
        </div>
    );
};

export default UpEvents;