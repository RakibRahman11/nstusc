import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FAQ from "../FAQ/FAQ";

const AboutUs = () => {
    return (
        <div className="">
            <Helmet>
                <title>About NSTUSC</title>
            </Helmet>
            <SectionTitle heading={"Know About NSTU Science Club"}></SectionTitle>
            <h3 className="mx-5 text-center md:w-1/2 md:mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe provident aperiam, nesciunt molestiae rem aut ut nam commodi inventore quisquam, deleniti officiis neque facere tempora eveniet quas modi ipsum laboriosam molestias, error ratione praesentium cum. Aspernatur vitae doloribus excepturi enim tempore dicta id molestiae fugit? Expedita debitis consequatur tempora beatae rerum et alias odit obcaecati aperiam minus nam tempore vitae rem nihil officia cumque perferendis, tenetur ex quaerat asperiores, aliquam iusto incidunt! In sequi ducimus fugit at ea expedita ipsum id maiores reiciendis, quo debitis. Excepturi cupiditate, nobis provident quis assumenda tempora ratione facilis quo nostrum tempore quam? Exercitationem.
            </h3>
            <div className="grid w-1/2 mx-auto my-5 text-center border-4 border-indigo-200 shadow stats stats-vertical md:stats-horizontal border-b-indigo-500 justify-items-center">
                <div className="stat">
                    <div className="stat-title">Visited</div>
                    <div className="text-xl stat-value">6</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Members</div>
                    <div className="text-xl stat-value">420</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Events</div>
                    <div className="text-xl stat-value">120</div>
                </div>
            </div>
            <FAQ></FAQ>
        </div>
    );
};

export default AboutUs;