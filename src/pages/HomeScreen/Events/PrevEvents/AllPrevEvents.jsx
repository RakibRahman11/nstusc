import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const AllPrevEvents = () => {
    const [allPrevEvents, setAllPrevEvents] = useState([]);
    useEffect(() => {
        fetch('prevEvents.json')
            .then(res => res.json())
            .then(data => setAllPrevEvents(data))
    }, [])
    return (
        <div className="my-14">
            <Helmet>
                <title>NSTUSC | Previous Events</title>
            </Helmet>
            <SectionTitle heading={"Previous Events"}></SectionTitle>
            <div>
                {
                    allPrevEvents.map(item => <>
                        <div className="my-14">
                            <img className="w-4/6 mx-auto mt-28" src={item.event_image} alt="" />
                            <div className="text-center">
                                <h2 className="m-3 text-3xl font-medium">{item.events_name}</h2>
                                <p className="inline mx-5"><img className="inline mx-3 w-9" src="https://i.ibb.co/xM4LLP5/people.png" alt="" ></img>{item.participation}</p>
                                <p className="inline"><img className="inline mx-3 w-9" src="https://i.ibb.co/KqWF28Y/date.png" alt="" ></img>{item.date}</p>
                                <p className="w-4/5 mx-auto my-5 text-justify">{item.description}</p>
                            </div>
                        </div>
                    </>
                    )
                }
            </div>
        </div>
    );
};

export default AllPrevEvents;