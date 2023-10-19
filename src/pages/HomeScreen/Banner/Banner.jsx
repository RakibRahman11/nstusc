import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="h-80 hero" style={{ backgroundImage: 'url(https://i.ibb.co/N3qVsxN/E3.jpg)' }}>
            <div className="bg-opacity-50 hero-overlay"></div>
            <div className="text-end hero-content text-neutral-content">
                <div className="text-end">
                    <h1 className="text-4xl font-bold text-end">Welcome to NSTUSC</h1>
                    {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>

    );
};
// https://i.ibb.co/N3qVsxN/E3.jpg
export default Banner;