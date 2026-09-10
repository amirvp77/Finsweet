"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

import "swiper/css";

export default function MySwiper() {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full md:w-[843]">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[300]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full p-[48]">
            <p className="text-2xl leading-relaxed">
              "Working with this team was an amazing experience from start to
              finish."
            </p>

            <div className="absolute bottom-[48] left-[48] flex items-center gap-4">
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

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full p-[48]">
            <p className="text-2xl leading-relaxed">
              "Working with this team was an amazing experience from start to
              finish."
            </p>

            <div className="absolute bottom-[48] left-[48] flex items-center gap-4">
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

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full p-[48]">
            <p className="text-2xl leading-relaxed">
              "A great team with excellent communication and attention to
              detail."
            </p>

            <div className="absolute bottom-[48] left-[48] flex items-center gap-4">
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

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full h-full p-[48]">
            <p className="text-2xl leading-relaxed">
              "A great team with excellent communication and attention to
              detail."
            </p>

            <div className="absolute bottom-[48] left-[48] flex items-center gap-4">
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

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="relative w-full h-full p-[48]">
            <p className="text-2xl leading-relaxed">
              "Working with this team was an amazing experience from start to
              finish."
            </p>

            <div className="absolute bottom-[48] left-[48] flex items-center gap-4">
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

      {/* Navigation Buttons */}
      <div className="absolute bottom-[48] right-[48] z-10 flex gap-4">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-[48] w-[48] cursor-pointer items-center justify-center rounded-full bg-white text-[#8A8A8A]"
        >
          <HiArrowLongLeft size={24} />
        </button>

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-[48] w-[48] cursor-pointer items-center justify-center rounded-full bg-[#5B4BFF] text-white"
        >
          <HiArrowLongRight size={24} />
        </button>
      </div>
    </div>
  );
}
