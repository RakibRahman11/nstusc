import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Button from "../../../../components/SectionTitle/Button";

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
                        <div className="mx-5">
                            <img src={item.event_image} alt="" />
                            <h3 className="my-2 text-lg font-bold text-center uppercase border-l-4 border-[#08153d] bg-[#3157ab]/[.3]">{item.events_name}</h3>
                        </div>
                    </div>)
                }
            </div>

            <div className="my-16" >
                <Link to="/prevEvents">
                    <Button buttonTitle={"Previous Events"}></Button>
                </Link>
            </div>
        </div>
    );
};

export default UpEvents;