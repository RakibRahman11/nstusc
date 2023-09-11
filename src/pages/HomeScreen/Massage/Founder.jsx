import { Helmet } from "react-helmet-async";

const Founder = () => {
    return (
        <div className="m-5">
            <Helmet>
                <title>NSTUSC | Founder</title>
            </Helmet>
            <div className="w-1/2 m-auto lg:w-1/3">
                <img className="mx-auto" src="https://i.ibb.co/pf3G8Nm/375020027-1338353420392254-260059806773435632-n.jpg" />
            </div>
            <div>
                <h2 className="pt-5 pb-3 text-xl font-bold text-center uppercase md:text-4xl">Massage from Founder</h2>
                <p className="px-5 text-center">Today, I stand before you as one of the proud founders of the Noakhali Science and Technology University Science Club.
                    Our journey began with a simple yet powerful idea – to foster a community of passionate individuals who share a profound love for science. We envisioned a platform where scientific curiosity knows no bounds, where knowledge is not confined within the walls of a classroom but is free to soar beyond the realms of textbooks.
                    The Noakhali Science and Technology University Science Club was founded on the principles of curiosity, exploration, and collaboration. It is a place where science transcends boundaries, where diverse minds come together to celebrate the wonders of the natural world and the innovations of human ingenuity.
                    Our Science Club is not just an organization; it is a haven for those who seek to unravel the mysteries of the universe, who yearn to conduct experiments that challenge the status quo, and who aspire to inspire the next generation of scientists. It is a place where dreams take flight, where ideas evolve into projects, and where students transform into scientists.
                    As we embark on this new chapter with the launch of our website, let us remember that our Science Club is not just a club; it is a movement. A movement towards a more scientifically literate society, a movement towards innovation and discovery, and a movement towards a better future for all.
                    Thank you and let the spirit of science guide us on this exciting adventure!<br />
                </p>
            </div>
            <div className="p-5 font-bold">
                <h1>
                    SK. FAISAL AHMED<br />
                    Founder and Former President,<br />
                    Noakhali Science and Technology University Science Club.
                </h1>
            </div>
            <div className="flex justify-center gap-2 m-3 md:justify-start">
                <a href="https://www.facebook.com/nstusc">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg></a>
                <a href="https://www.linkedin.com/company/nstusc/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                </a>
            </div>
        </div>
    );
};

export default Founder;