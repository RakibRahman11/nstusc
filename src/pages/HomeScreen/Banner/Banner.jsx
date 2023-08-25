import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/Banner/1.jpg'
import img2 from '../../../assets/Banner/2.jpg'
import img3 from '../../../assets/Banner/3.jpg'
import img4 from '../../../assets/Banner/4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="w-full carousel">
                <div id="slide1" className="relative w-9/12 carousel-item">
                    <img src={img1} className="h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    </div>
                </div>
                <div id="slide2" className="relative w-9/12 carousel-item">
                    <img src={img2} className="h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    </div>
                </div>
                <div id="slide3" className="relative w-9/12 carousel-item">
                    <img src={img3} className="h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    </div>
                </div>
                <div id="slide4" className="relative w-9/12 carousel-item">
                    <img src={img4} className="h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;