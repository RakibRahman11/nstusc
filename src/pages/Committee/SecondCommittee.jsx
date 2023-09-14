import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCommittee from "../../hooks/useCommittee";

const SecondCommittee = () => {
    const [member] = useCommittee()
    const secondCommittee = member.filter(item => item.committee === 'Second')
    return (
        <div className="my-14">
            <Helmet>
                <title>Steering Committee</title>
            </Helmet>
            <div className="py-5">
                <SectionTitle heading={"2nd Steering Committee"}></SectionTitle>
                <div className="grid grid-cols-1 grid-rows-3 grid-rows-none gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {
                        secondCommittee.map(item => <>
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
            </div>
        </div>
    );
};

export default SecondCommittee;