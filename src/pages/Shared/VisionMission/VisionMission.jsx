import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const VisionMission = () => {
    return (
        <div className="my-5">

            <div className="flex flex-col w-full my-3 md:flex-row">
                <div className="grid flex-grow w-full lg:w-1/2 card rounded-box place-items-center">
                    <SectionTitle heading={"Vision"}></SectionTitle>
                    <h3 className="mx-5 mb-5 text-center md:w-2/3 md:mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe provident aperiam, nesciunt molestiae rem aut ut nam commodi inventore quisquam, deleniti officiis neque facere tempora eveniet quas modi ipsum laboriosam molestias, error ratione praesentium cum. Aspernatur vitae doloribus excepturi enim tempore dicta id molestiae fugit? Expedita debitis consequatur tempora beatae rerum et alias odit obcaecati aperiam minus nam tempore vitae rem nihil officia cumque perferendis, tenetur ex quaerat asperiores, aliquam iusto incidunt! In sequi ducimus fugit at ea expedita ipsum id maiores reiciendis, quo debitis. Excepturi cupiditate, nobis provident quis assumenda tempora ratione facilis quo nostrum tempore quam? Exercitationem.
                    </h3>
                </div>
                <div className="grid flex-grow w-full lg:w-1/2 card rounded-box place-items-center">
                    <img src="https://i.ibb.co/6y9DHb8/3d-modern-plexus-design-network-communications-modern-techno.jpg" alt="Vision" />
                </div>
            </div>

            <div className="flex flex-col w-full my-3 md:flex-row">
                <div className="grid flex-grow w-full lg:w-1/2 card rounded-box place-items-center">
                    <img src="https://i.ibb.co/6y9DHb8/3d-modern-plexus-design-network-communications-modern-techno.jpg" alt="Vision" />
                </div>
                <div className="grid flex-grow w-full lg:w-1/2 card rounded-box place-items-center">
                    <SectionTitle heading={"Mission"}></SectionTitle>
                    <h3 className="mx-5 text-center md:w-2/3 md:mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe provident aperiam, nesciunt molestiae rem aut ut nam commodi inventore quisquam, deleniti officiis neque facere tempora eveniet quas modi ipsum laboriosam molestias, error ratione praesentium cum. Aspernatur vitae doloribus excepturi enim tempore dicta id molestiae fugit? Expedita debitis consequatur tempora beatae rerum et alias odit obcaecati aperiam minus nam tempore vitae rem nihil officia cumque perferendis, tenetur ex quaerat asperiores, aliquam iusto incidunt! In sequi ducimus fugit at ea expedita ipsum id maiores reiciendis, quo debitis. Excepturi cupiditate, nobis provident quis assumenda tempora ratione facilis quo nostrum tempore quam? Exercitationem.
                    </h3>
                </div>
            </div>

            <div className="w-2/3 mx-auto my-5 lg:w-1/2">
                <SectionTitle heading={"Objectives"}></SectionTitle>
                <h3>
                    Our Science Club at Noakhali University of Science and Technology is driven by a core objective: to foster a profound appreciation for science while cultivating an enriching environment for research and scientific exploration.
                    To achieve this, our club is committed to organizing the following initiatives:
                </h3>
                <ul className="list-disc">
                    <li>
                        Science Fair: We host engaging science fairs to showcase the wonders of scientific inquiry and innovation.
                        Various Scientific Workshops and Training: We provide a platform for hands-on learning through a variety of workshops and training sessions.
                    </li>
                    <li>
                        PhD Talks: Through informative PhD talks, we aim to inspire and inform students about advanced research opportunities.
                    </li>
                    <li>
                        Research and Scientific Seminars: Our club conducts seminars that delve into cutting-edge research topics and scientific breakthroughs.
                    </li>
                    <li>
                        Research Skill Development: We focus on nurturing research skills, empowering students to become proficient in scientific inquiry.
                    </li>
                    <li>
                        Laboratory Research Opportunities: We facilitate research projects within well-equipped laboratories, allowing students to explore their scientific interests.
                    </li>
                    <li>
                        Encouraging Fundamental Research Engagement: We actively involve students in foundational research activities, igniting their passion for scientific discovery.
                        Through these diverse activities, our Science Club empowers university students to take significant strides along their research journey, contributing to a brighter future in the realm of science and technology.
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default VisionMission;