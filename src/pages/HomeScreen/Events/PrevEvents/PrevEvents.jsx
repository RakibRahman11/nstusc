import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import PrevEvent from "../PrevEvent/PrevEvent";
import { Link } from "react-router-dom";

const PrevEvents = () => {
    const [prevEvents, setPrevEvents] = useState([]);
    useEffect(() => {
        fetch('https://nstusc-server.onrender.com/previousEvents')
            .then(res => res.json())
            .then(data => setPrevEvents(data))
    }, [])
    return (
        <div className="my-14">
            <SectionTitle heading={"Previous Events"}></SectionTitle>
            <div className="grid grid-cols-1 grid-rows-3 grid-rows-none gap-4 mx-auto lg:grid-cols-3 md:grid-cols-2">
                {
                    prevEvents.map(item => <PrevEvent
                        key={item._id}
                        item={item}
                    ></PrevEvent>)
                }
            </div>
            <Link to="/prevEvents"><p className="mx-auto text-xl font-bold text-center text-white uppercase rounded w-44 bg-cyan-500">All Events</p></Link>
        </div>
    );
};

export default PrevEvents;