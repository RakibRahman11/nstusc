import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AboutUs = () => {
    return (
        <div className="">
            <Helmet>
                <title>About NSTUSC</title>
            </Helmet>
            <SectionTitle heading={"Know About NSTU Science Club"}></SectionTitle>
            <h3 className="text-center mx-5 md:w-1/2 md:mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe provident aperiam, nesciunt molestiae rem aut ut nam commodi inventore quisquam, deleniti officiis neque facere tempora eveniet quas modi ipsum laboriosam molestias, error ratione praesentium cum. Aspernatur vitae doloribus excepturi enim tempore dicta id molestiae fugit? Expedita debitis consequatur tempora beatae rerum et alias odit obcaecati aperiam minus nam tempore vitae rem nihil officia cumque perferendis, tenetur ex quaerat asperiores, aliquam iusto incidunt! In sequi ducimus fugit at ea expedita ipsum id maiores reiciendis, quo debitis. Excepturi cupiditate, nobis provident quis assumenda tempora ratione facilis quo nostrum tempore quam? Exercitationem.
            </h3>
            <div className="stats stats-vertical md:stats-horizontal shadow text-center mx-auto border-4 border-indigo-200 border-b-indigo-500 grid justify-items-center w-1/2 my-5">
                <div className="stat">
                    <div className="stat-title">Visited</div>
                    <div className="stat-value text-xl">31K</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Members</div>
                    <div className="stat-value text-xl">420</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Events</div>
                    <div className="stat-value text-xl">120</div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;