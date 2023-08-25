import Banner from "../Banner/Banner";
import PrevEvents from "../Events/PrevEvents/PrevEvents";
import UpEvents from "../Events/UpEvents/UpEvents";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <UpEvents></UpEvents>
           <PrevEvents></PrevEvents>
        </div>
    );
};

export default Home;