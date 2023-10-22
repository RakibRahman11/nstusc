import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const VisionMission = () => {
    return (
        <div className="my-5">
            <Helmet>
                <title>Mission and Vision</title>
            </Helmet>
            <div className="flex flex-col w-full my-3 md:flex-row">
                <div className="grid flex-grow w-full lg:w-1/2 card rounded-box place-items-center">
                    <SectionTitle heading={"Mission"}></SectionTitle>
                    <h3 className="mx-5 mb-5 leading-6 text-center md:w-4/5 w-3/4 md:mx-auto text-justify">
                        <ol>
                            <li>
                                <p className="font-bold inline">1. Promote a Scientific Mindset:</p> The club primary mission is to foster a culture of scientific curiosity, critical thinking, and an evidence-based approach among its members.
                            </li>
                            <li>
                                <p className="font-bold inline">2. Facilitate interdisciplinary collaborations:</p> The club is aim to bring together students from various scientific disciplines and encourage collaborative projects or discussions that bridge different areas of study.
                            </li>
                            <li>
                                <p className="font-bold inline">3. Enhance practical skills:</p> The mission is also include providing opportunities for members to gain hands-on experience in conducting scientific experiments, utilizing laboratory equipment, or developing research skills.
                            </li>
                            <li>
                                <p className="font-bold inline">4. Encourage knowledge sharing:</p>  The club is aim to promote the dissemination of scientific knowledge, both within the club and beyond, through events like seminars, workshops, or public talks.
                            </li>
                            <li>
                                <p className="font-bold inline">5. Support career development:</p> The mission is encompass assisting members in their scientific career path by organizing career fairs, inviting guest speakers from academia and industry, or providing guidance on research or internship opportunities.
                            </li>
                        </ol>
                    </h3>
                </div>
                <div className="grid flex-grow w-4/5 mx-auto lg:w-1/2 mt-5 card rounded-box place-items-center">
                    <img src="https://i.ibb.co/6y9DHb8/3d-modern-plexus-design-network-communications-modern-techno.jpg" alt="Vision" />
                </div>
            </div>

            <div className="flex flex-col w-full my-3 md:flex-row">
                <div className="grid flex-grow w-4/5 mx-auto mt-5 lg:w-1/2 card rounded-box place-items-center">
                    <img src="https://i.ibb.co/6y9DHb8/3d-modern-plexus-design-network-communications-modern-techno.jpg" alt="Vision" />
                </div>
                <div className="grid flex-grow w-full lg:w-1/2 card rounded-box place-items-center">
                    <SectionTitle heading={"Vision"}></SectionTitle>
                    <h3 className="mx-5 leading-6 text-center w-3/4 md:w-4/5 md:mx-auto text-justify">
                        <ol>
                            <p>
                                The vision is a statement of what a club hopes to accomplish, a &apos;vision&apos; of what success will look like. The vision should look far into the future, as well as, vision can be a less bit defined, but is equally important for long term development of a  club.
                            </p>
                            <li>
                                <p className="font-bold inline">1. Cultivate Scientific Literacy:</p> The club&apos;s vision is revolve around creating a university community that values and appreciates scientific knowledge and its broader impact on society.
                            </li>
                            <li>
                                <p className="font-bold inline">2. Foster a vibrant scientific network:</p> The club is aspire to build a strong network of science enthusiasts, where members can connect with peers, faculty, scientists, and experts from various disciplines to exchange ideas, collaborate on projects, and seek mentorship.
                            </li>
                            <li>
                                <p className="font-bold inline">3. Make science accessible:</p> The club&apos;s vision is involve making science more accessible to the general public through outreach programs, science exhibitions, phd talk, competition or science communication initiatives that aim to engage the community in scientific discussions and experiences.
                            </li>
                            <li>
                                <p className="font-bold inline">4. Inspire innovation and research:</p>  The vision is include promoting innovation, encouraging research initiatives, and inspiring members to explore new frontiers of scientific knowledge to address societal challenges.

                            </li>
                            <li>
                                <p className="font-bold inline">5. Contribute to scientific progress:</p> TThe club is aim to play a role in advancing scientific understanding and contributing to the body of knowledge by supporting research initiatives, conducting experiments, or publishing scientific findings.
                            </li>
                        </ol>
                    </h3>
                </div>
            </div>

            <div className="w-2/3 mx-auto my-5 leading-6 lg:w-1/2">
                <SectionTitle heading={"Objectives"}></SectionTitle>
                <h3 className="mb-2">
                    Our Science Club at Noakhali University of Science and Technology is driven by a core objective: to foster a profound appreciation for science while cultivating an enriching environment for research and scientific exploration.
                    To achieve this, our club is committed to organizing the following initiatives:
                </h3>
                <ol>
                    <li>
                        <p className="font-bold inline">1. Science Fair:</p> We host engaging science fairs to showcase the wonders of scientific inquiry and innovation.
                        Various Scientific Workshops and Training: We provide a platform for hands-on learning through a variety of workshops and training sessions.
                    </li>
                    <li>
                        <p className="font-bold inline">2. PhD Talks:</p> Through informative PhD talks, we aim to inspire and inform students about advanced research opportunities.
                    </li>
                    <li>
                        <p className="font-bold inline">3. Research and Scientific Seminars:</p> Our club conducts seminars that delve into cutting-edge research topics and scientific breakthroughs.
                    </li>
                    <li>
                        <p className="font-bold inline">4. Research Skill Development:</p>  We focus on nurturing research skills, empowering students to become proficient in scientific inquiry.
                    </li>
                    <li>
                        <p className="font-bold inline">5. Laboratory Research Opportunities:</p> We facilitate research projects within well-equipped laboratories, allowing students to explore their scientific interests.
                    </li>
                    <li>
                        <p className="font-bold inline">6. Encouraging Fundamental Research Engagement:</p> We actively involve students in foundational research activities, igniting their passion for scientific discovery.
                        Through these diverse activities, our Science Club empowers university students to take significant strides along their research journey, contributing to a brighter future in the realm of science and technology.
                    </li>
                </ol>
            </div>

        </div>
    );
};

export default VisionMission;