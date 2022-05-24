import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css'


import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel2 = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0022/7714/6682/files/slider-1-1.jpg?v=1643197493" className="w-full" alt="" />
                        <div className="absolute lg:left-10 lg:top-[90px] left-5 top-[30px] w-[200px] lg:w-[350px]">
                            <p className="text-primary lg:text-2xl text-xl-1 font-bold">Get up to 50% off Today Only!</p>
                            <p className="lg:text-7xl  text-2xl text-neutral font-bold">Summer Sale for Auto Parts!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0022/7714/6682/files/slider-1-2_0d7abea0-79ef-425d-8940-ab3a2f483b1e.jpg?v=1643198892"
                        className="w-full" alt="" /> /
                    <div className="absolute lg:left-10 lg:top-[90px] left-5 top-[30px] w-[200px] lg:w-[350px]">
                        <p className="text-secondary lg:text-2xl text-xl-1 font-bold">50% off in all products</p>
                        <p className="lg:text-7xl  text-2xl text-neutral font-bold">Latest & Powerful Engine For You</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0022/7714/6682/files/slider-1-1.jpg?v=1643197493" className="w-full" alt="" /> /

                    <div className="absolute lg:left-10 lg:top-[90px] left-5 top-[30px] w-[200px] lg:w-[350px]">
                        <p className="text-secondary lg:text-2xl text-xl-1 font-bold">Get up to 50% off Today Only!</p>
                        <p className="lg:text-7xl  text-2xl text-neutral font-bold">Summer & Powerful Engine For You</p>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Carousel2;