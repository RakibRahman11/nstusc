import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
// import PrevEvents from "../Events/PrevEvents/PrevEvents";
import UpEvents from "../Events/UpEvents/UpEvents";
import Massage from "../Massage/Massage";
import Featured from "../../Shared/Featured/Featured";
import Birthday from "../Birthday/Birthday";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
    const [allBirthday, setAllBirthday] = useState([]);
    const date = new Date();
    const today = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;

    useEffect(() => {
        fetch('birthdayList.json')
            .then(res => res.json())
            .then(data => {
                const match = data.filter(item => item.birthdayDate === today)
                setAllBirthday(match)
            })
    }, [])

    return (
        <div>
            <Helmet>
                <title>NSTUSC | Home</title>
            </Helmet>
            <Banner></Banner>
            {
                allBirthday.length > 0 && allBirthday.map(item => <Birthday
                    key={item.name}
                    item={item}
                ></Birthday>)
            }
            <UpEvents></UpEvents>
            {/* <PrevEvents></PrevEvents> */}
            <Massage></Massage>
            <Featured></Featured>
        </div>
    );
};

export default Home;