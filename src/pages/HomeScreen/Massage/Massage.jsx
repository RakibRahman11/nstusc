import { Link } from "react-router-dom";

const Massage = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div className="h-2/5">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="w-2/3 lg:w-full">
                        <img className="mx-auto" src="https://i.ibb.co/pf3G8Nm/375020027-1338353420392254-260059806773435632-n.jpg" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-center uppercase md:text-4xl lg:text-left">Massage from Founder</h2>
                        <p className="pt-5">Today, I stand before you as one of the proud founders of the Noakhali Science and Technology University Science Club. Our journey began with a simple yet powerful idea – to foster a community of passionate individuals who share a profound love for science. We envisioned a platform where scientific curiosity knows no bounds, where knowledge is not confined within the walls of a classroom but is free to soar beyond the realms of textbooks. The Noakhali Science and Technology University Science Club was founded on the principles of curiosity, exploration, and collaboration. It is a place where science transcends boundaries, where diverse minds come together to celebrate the wonders of the natural world and the innovations of human ingenuity.</p>
                        <div>
                            <Link to="/founder"><p className="w-64 my-5 text-xl font-bold text-center text-white uppercase rounded bg-cyan-500">Read more</p></Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="h-2/5">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="w-2/3 mt-5 lg:w-full">
                        <img className="mx-auto" src="https://i.ibb.co/pf3G8Nm/375020027-1338353420392254-260059806773435632-n.jpg" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-center uppercase md:text-4xl lg:text-left">Massage from Founder</h2>
                        <p className="py-5">Today, I stand before you as one of the proud founders of the Noakhali Science and Technology University Science Club. Our journey began with a simple yet powerful idea – to foster a community of passionate individuals who share a profound love for science. We envisioned a platform where scientific curiosity knows no bounds, where knowledge is not confined within the walls of a classroom but is free to soar beyond the realms of textbooks. The Noakhali Science and Technology University Science Club was founded on the principles of curiosity, exploration, and collaboration. It is a place where science transcends boundaries, where diverse minds come together to celebrate the wonders of the natural world and the innovations of human ingenuity.</p>
                        <div>
                            <Link to="/founder"><p className="w-64 my-5 text-xl font-bold text-center text-white uppercase rounded bg-cyan-500">Read more</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Massage;