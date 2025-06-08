"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      loop={true}
      navigation={true}
      className="mt-27 h-130 w-full"
    >
      <SwiperSlide>
        <div className="h-full bg-[url('/hero1.svg')]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full bg-[url('/hero2.svg')]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full bg-[url('/hero3.svg')]"></div>
      </SwiperSlide>
    </Swiper>
  );
}
