import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Featured = () => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/dPKQwZf/1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/dPKQwZf/1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/dPKQwZf/1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/dPKQwZf/1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/dPKQwZf/1.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Featured;