import { Helmet } from "react-helmet-async";
import useCommittee from "../../hooks/useCommittee";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const OurTeam = () => {
    const [member] = useCommittee()
    const firstCommittee = member.filter(item => item.committee === 'First')
    const secondCommittee = member.filter(item => item.committee === 'Second')
    const advisorCommittee = member.filter(item => item.committee === 'Advisor')
    return (
        <div className="px-2 py-5 bg-cyan-200">
            <div className="my-14">
                <Helmet>
                    <title>NSTUSC | Our team</title>
                </Helmet>
                <div className="py-5">
                    <SectionTitle heading={"1st Steering Committee"}></SectionTitle>
                    <div className="grid grid-cols-1 grid-rows-3 grid-rows-none gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {
                            firstCommittee.slice(0, 3).map(item => <>
                                <div>
                                    <img className="w-4/6 mx-auto rounded-lg mt-28" src={item.image} alt="" />
                                    <div className="py-10 -mt-8 text-center rounded-b-3xl bg-cyan-100">
                                        <h1 className="text-2xl font-semibold">{item.name}</h1>
                                        <h1 className="text-xl">{item.designation}</h1>
                                        <h3>Department: {item.department}</h3>
                                        <h3>Session: {item.session}</h3>
                                        <h3>Contact: {item.contact}</h3>
                                        <h3>Mail address: {item.mail_address}</h3>
                                    </div>
                                </div>
                            </>
                            )
                        }
                    </div>
                    <Link to="/firstCommittee"><p className="w-1/2 mx-auto my-5 text-xl font-bold text-center text-white uppercase rounded bg-cyan-500">See all members</p></Link>
                </div>
                <div className="py-5">
                    <SectionTitle heading={"2nd Steering Committee"}></SectionTitle>
                    <div className="grid grid-cols-1 grid-rows-3 grid-rows-none gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {
                            secondCommittee.slice(0, 3).map(item => <>
                                <div>
                                    <img className="w-4/6 mx-auto rounded-lg mt-28" src={item.image} alt="" />
                                    <div className="py-10 -mt-8 text-center rounded-b-3xl bg-cyan-100">
                                        <h1 className="text-2xl font-semibold">{item.name}</h1>
                                        <h1 className="text-xl">{item.designation}</h1>
                                        <h3>Department: {item.department}</h3>
                                        <h3>Session: {item.session}</h3>
                                        <h3>Contact: {item.contact}</h3>
                                        <h3>Mail address: {item.mail_address}</h3>
                                    </div>
                                </div>
                            </>
                            )
                        }
                    </div>
                    <Link to="/secondCommittee"><p className="w-1/2 mx-auto my-5 text-xl font-bold text-center text-white uppercase rounded bg-cyan-500">See all members</p></Link>
                </div>
                <div className="py-5">
                    <SectionTitle heading={"Honorable Advisor"}></SectionTitle>
                    <div className="grid grid-cols-1 grid-rows-3 grid-rows-none gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {
                            advisorCommittee.slice(0, 3).map(item => <>
                                <div>
                                    <img className="w-4/6 mx-auto rounded-lg mt-28" src={item.image} alt="" />
                                    <div className="py-10 -mt-8 text-center rounded-b-3xl bg-cyan-100">
                                        <h1 className="text-2xl font-semibold">{item.name}</h1>
                                        <h1 className="text-xl">{item.designation}</h1>
                                        <h3>Department: {item.department}</h3>
                                    </div>
                                </div>
                            </>
                            )
                        }
                    </div>
                    <Link to="/advisorCommittee"><p className="w-1/2 mx-auto my-5 text-xl font-bold text-center text-white uppercase rounded bg-cyan-500">See all members</p></Link>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;