"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

import "swiper/css";

export default function MySwiper() {
  const swiperRef = useRef(null);
const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full md:w-[500] lg:w-[843]">
      <Swiper
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={false}
        className="w-full h-[250] lg:h-[300]"
      >
        <SwiperSlide>
          <div className="relative w-full h-full p-6 lg:p-[48]">
            <p className="text-xl lg:text-2xl leading-relaxed">
              "Working with this team was an amazing experience from start to
              finish."
            </p>

            <div className="absolute bottom-6 left-6 lg:bottom-[48] lg:left-[48] flex items-center gap-4">
              <img
                src="/Profile.png"
                alt="Jenny Wilson"
                className="w-[48] h-[48] rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold">Jenny Wilson</h4>
                <p className="text-sm">Vice President</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full p-6 lg:p-[48]">
            <p className="text-xl lg:text-2xl leading-relaxed">
              "A great team with excellent communication and attention to
              detail."
            </p>

            <div className="absolute bottom-6 left-6 lg:bottom-[48] lg:left-[48] flex items-center gap-4">
              <img
                src="/Profile.png"
                alt="Jenny Wilson"
                className="w-[48] h-[48] rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold">Jenny Wilson</h4>
                <p className="text-sm">Vice President</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full p-6 lg:p-[48]">
            <p className="text-xl lg:text-2xl leading-relaxed">
              "Working with this team was an amazing experience from start to
              finish."
            </p>

            <div className="absolute bottom-6 left-6 lg:bottom-[48] lg:left-[48] flex items-center gap-4">
              <img
                src="/Profile.png"
                alt="Jenny Wilson"
                className="w-[48] h-[48] rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold">Jenny Wilson</h4>
                <p className="text-sm">Vice President</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-6 right-6 lg:bottom-[48] lg:right-[48] z-10 flex gap-4">
        <button
          type="button"
          onClick={() => {
            if (!swiperRef.current.isBeginning) {
              swiperRef.current.slidePrev();
            }
          }}
          className={`flex h-[48] w-[48] cursor-pointer items-center justify-center rounded-full text-white ${
            currentSlide === 0 ? "bg-gray-400" : "bg-[#5B4BFF]"
          }`}
        >
          <HiArrowLongLeft size={24} />
        </button>

        <button
          type="button"
          onClick={() => {
            if (!swiperRef.current.isEnd) {
              swiperRef.current.slideNext();
            }
          }}
          className={`flex h-[48] w-[48] cursor-pointer items-center justify-center rounded-full text-white ${
            currentSlide === 2 ? "bg-gray-400" : "bg-[#5B4BFF]"
          }`}
        >
          <HiArrowLongRight size={24} />
        </button>
      </div>
    </div>
  );
}
