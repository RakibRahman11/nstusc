import { Helmet } from "react-helmet-async";
import useCommittee from "../../hooks/useCommittee";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Advisor = () => {
    const [member] = useCommittee()
    const advisorCommittee = member.filter(item => item.committee === 'Advisor')
    return (
        <div className="my-14">
            <Helmet>
                <title>Honorable Advisor</title>
            </Helmet>
            <div className="py-5">
                <SectionTitle heading={"Honorable Advisor"}></SectionTitle>
                <div className="grid grid-cols-1 grid-rows-3 grid-rows-none gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {
                        advisorCommittee.map(item => <>
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
            </div>
        </div>
    );
};

export default Advisor;