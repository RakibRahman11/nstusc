const Gallery = () => {
    return (
        <div>
            <div className="w-full carousel">
                <div id="slide1" className="relative w-1/2 m-2 carousel-item">
                    <img src="https://i.ibb.co/N3qVsxN/E3.jpg" className="w-full" />
                    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div> */}
                </div>
                <div id="slide2" className="relative w-1/2 m-2 carousel-item">
                    <img src="https://i.ibb.co/N3qVsxN/E3.jpg" className="w-full" />
                </div>
                <div id="slide3" className="relative w-1/2 m-2 carousel-item">
                    <img src="https://i.ibb.co/N3qVsxN/E3.jpg" className="w-full" />
                </div>
                <div id="slide4" className="relative w-1/2 m-2 carousel-item">
                    <img src="https://i.ibb.co/N3qVsxN/E3.jpg" className="w-full" />
                </div>
            </div>
        </div>

    );
};

export default Gallery;

{/* <Carousel>
            <div className="w-3/5 mx-auto">
                <img src="https://i.ibb.co/N3qVsxN/E3.jpg" />
            </div> */}