import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <div className="">
            <Helmet>
                <title>About NSTUSC</title>
            </Helmet>
            <div className="stats stats-vertical lg:stats-horizontal shadow text-center m-5 border-4 border-indigo-200 border-b-indigo-500 grid justify-items-center">
                <div className="stat">
                    <div className="stat-title">Visited</div>
                    <div className="stat-value ">31K</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Members</div>
                    <div className="stat-value">4,200</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Events</div>
                    <div className="stat-value">1,200</div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;