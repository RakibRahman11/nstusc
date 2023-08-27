import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import PrevEvent from "../PrevEvent/PrevEvent";
import { Link } from "react-router-dom";

const PrevEvents = () => {
    const [prevEvents, setPrevEvents] = useState([]);
    useEffect(() => {
        fetch('prevEvents.json')
            .then(res => res.json())
            .then(data => setPrevEvents(data))
    }, [])
    return (
        <div className="my-14">
            <SectionTitle heading={"Previous Events"}></SectionTitle>
            <div className="grid grid-cols-3 grid-rows-3 grid-rows-none gap-4">
                {
                    prevEvents.map(item => <PrevEvent
                        key={item._id}
                        item={item}
                    ></PrevEvent>)
                }
            </div>
            <Link to="/prevEvents"><p className="w-48 mx-auto text-xl font-bold text-center text-white uppercase rounded bg-cyan-500 w-96 h-7">All Events</p></Link>
        </div>
    );
};

export default PrevEvents;