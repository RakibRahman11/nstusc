import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import PrevEvent from "../PrevEvent/PrevEvent";

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
            <div className="grid grid-rows-none gap-4 grid-cols-3 grid-rows-3">
                {
                    prevEvents.map(item => <PrevEvent
                        key={item._id}
                        item={item}
                    ></PrevEvent>)
                }
            </div>
            <p className="text-xl uppercase text-center bg-cyan-500 w-48 rounded mx-auto text-white font-bold w-96 h-7">All Events</p>
        </div>
    );
};

export default PrevEvents;