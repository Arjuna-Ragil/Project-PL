"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Hero() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      loop={true}
      className="sm:mt-22 mt-17 lg:h-130 md:h-80 sm:h-50 h-35 2xl:w-[1440px] w-full mx-auto bg-white/70 backdrop-blur-3xl dark:brightness-90"
    >
      <SwiperSlide>
        <div className="h-full bg-[url('/hero1.svg')] max-xl:bg-contain bg-no-repeat bg-center"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full bg-[url('/hero2.svg')] max-xl:bg-contain bg-no-repeat bg-center"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full bg-[url('/hero3.svg')] max-xl:bg-contain bg-no-repeat bg-center"></div>
      </SwiperSlide>
    </Swiper>
  );
}
