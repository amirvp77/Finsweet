"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

import "swiper/css";
import "swiper/css/navigation";

export default function MySwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) return null;

  return (
    <div className="relative w-full md:w-[843]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[300]"
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        <SwiperSlide>
          <div className="relative w-full h-full p-[48]">
            <p className="text-2xl leading-relaxed">
              "The best agency we've worked with so far. They understand our
              product and are able to add new features with a great focus."
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

        <SwiperSlide>
          <div className="relative w-full h-full p-[48]">
            <p className="text-2xl leading-relaxed">
              "They delivered everything we needed and made the whole process
              very simple."
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

        <SwiperSlide>
          <div className="relative w-full h-full p-[48]">
            <p className="text-2xl leading-relaxed">
              "We are very happy with the final result and would definitely work
              with them again."
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

      <div className="absolute bottom-[48] right-[48] z-10 flex gap-4">
        <button
          ref={prevRef}
          className="w-[48] h-[48] rounded-full flex items-center justify-center bg-white text-[#8A8A8A] cursor-pointer"
        >
          <HiArrowLongLeft size={24} />
        </button>

        <button
          ref={nextRef}
          className="w-[48] h-[48] rounded-full flex items-center justify-center bg-[#5B4BFF] text-white cursor-pointer"
        >
          <HiArrowLongRight size={24} />
        </button>
      </div>
    </div>
  );
}
