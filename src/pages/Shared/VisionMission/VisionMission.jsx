import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const VisionMission = () => {
    return (
        <div className="my-5">
            <div className="flex flex-col w-full lg:flex-row my-3">
                <div className="grid flex-grow w-full lg:w-1/2 card rounded-box place-items-center">
                    <SectionTitle heading={"Vision"}></SectionTitle>
                    <h3 className="text-center mx-2 md:w-2/3 md:mx-auto mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe provident aperiam, nesciunt molestiae rem aut ut nam commodi inventore quisquam, deleniti officiis neque facere tempora eveniet quas modi ipsum laboriosam molestias, error ratione praesentium cum. Aspernatur vitae doloribus excepturi enim tempore dicta id molestiae fugit? Expedita debitis consequatur tempora beatae rerum et alias odit obcaecati aperiam minus nam tempore vitae rem nihil officia cumque perferendis, tenetur ex quaerat asperiores, aliquam iusto incidunt! In sequi ducimus fugit at ea expedita ipsum id maiores reiciendis, quo debitis. Excepturi cupiditate, nobis provident quis assumenda tempora ratione facilis quo nostrum tempore quam? Exercitationem.
                    </h3>
                </div>
                <div className="grid flex-grow w-full lg:w-1/2 card rounded-box place-items-center">
                    <img src="https://i.ibb.co/6y9DHb8/3d-modern-plexus-design-network-communications-modern-techno.jpg" alt="Vision" />
                </div>
            </div>

            <div className="flex flex-col w-full lg:flex-row my-3">
                <div className="grid flex-grow w-full lg:w-1/2 card rounded-box place-items-center">
                    <img src="https://i.ibb.co/6y9DHb8/3d-modern-plexus-design-network-communications-modern-techno.jpg" alt="Vision" />
                </div>
                <div className="grid flex-grow w-full lg:w-1/2 card rounded-box place-items-center">
                    <SectionTitle heading={"Mission"}></SectionTitle>
                    <h3 className="text-center mx-2 md:w-2/3 md:mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe provident aperiam, nesciunt molestiae rem aut ut nam commodi inventore quisquam, deleniti officiis neque facere tempora eveniet quas modi ipsum laboriosam molestias, error ratione praesentium cum. Aspernatur vitae doloribus excepturi enim tempore dicta id molestiae fugit? Expedita debitis consequatur tempora beatae rerum et alias odit obcaecati aperiam minus nam tempore vitae rem nihil officia cumque perferendis, tenetur ex quaerat asperiores, aliquam iusto incidunt! In sequi ducimus fugit at ea expedita ipsum id maiores reiciendis, quo debitis. Excepturi cupiditate, nobis provident quis assumenda tempora ratione facilis quo nostrum tempore quam? Exercitationem.
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;