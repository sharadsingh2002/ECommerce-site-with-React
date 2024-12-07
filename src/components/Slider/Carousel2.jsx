import { Swiper, SwiperSlide } from 'swiper/react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

import slider1 from '../../Footage/slider1.webp';
import slider2 from '../../Footage/slider2.webp';
import slider3 from '../../Footage/slider3.webp';
import slider4 from '../../Footage/slider4.webp';
import slider5 from '../../Footage/slider5.webp';
import mobile1 from '../../Footage/mobile-b-1.webp';
import mobile2 from '../../Footage/mobile-b-2.webp';
import mobile3 from '../../Footage/mobile-b-3.webp';
import mobile4 from '../../Footage/mobile-b-4.webp';
import mobile5 from '../../Footage/mobile-b-5.webp';


function Carousel() {
    return (
        <div className="relative h-full w-[80%] m-auto mt-8  ">
            <h1 className="text-center text-4xl font-bold mb-10">Flower Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={2.5}
                spaceBetween={40}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 2.5,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                }}
                navigation={{
                    nextEl: '.swiper-button-p',
                    prevEl: '.swiper-button-n',
                }}
                modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                className="swiper-container gap-4"
            >
                <SwiperSlide>
                    <img src={slider1} alt="slide_image" className="hidden md:flex object-cover w-full h-full rounded-lg shadow-lg" />
                    <img src={mobile1} className="flex md:hidden object-cover w-full h-full rounded-lg shadow-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="slide_image" className="hidden md:flex object-cover w-full h-full rounded-lg shadow-lg" />
                    <img src={mobile2} className="flex md:hidden object-cover w-full h-full rounded-lg shadow-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="slide_image" className="hidden md:flex object-cover w-full h-full rounded-lg shadow-lg" />
                    <img src={mobile3} className="flex md:hidden object-cover w-full h-full rounded-lg shadow-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="slide_image" className="hidden md:flex object-cover w-full h-full rounded-lg shadow-lg" />
                    <img src={mobile4} className="flex md:hidden object-cover w-full h-full rounded-lg shadow-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="slide_image" className="hidden md:flex object-cover w-full h-full rounded-lg shadow-lg" />
                    <img src={mobile5} className="flex md:hidden object-cover w-full h-full rounded-lg shadow-lg" />
                </SwiperSlide>


                <div className="absolute inset-0  flex justify-between  items-center z-50 ">
                    <div className="swiper-button-n text-4xl text-[#FF735C] cursor-pointer h-7 w-7 rounded-full border border-[#FF735C] flex items-center justify-center">
                        <KeyboardArrowLeftIcon />
                    </div>
                    <div className="swiper-button-p text-4xl text-[#FF735C] cursor-pointer h-7 w-7 rounded-full border border-[#FF735C] flex items-center justify-center">
                        <KeyboardArrowRightIcon />
                    </div>
                </div>


            </Swiper>
        </div>
    );
}

export default Carousel;
