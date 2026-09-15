import { HiArrowLongRight } from "react-icons/hi2";
import SvgIcon from "../Svg/Svg";

export default function Hero() {
  return (
    <div
      className="flex flex-col bg-[#1C1E53] px-6 py-10

      md:flex-col md:gap-10

      lg:flex-row lg:h-[757] lg:w-full lg:justify-center lg:gap-7 "
    >
      <div
        className="order-1 w-full h-[250] flex justify-center items-center relative

        md:h-[350]

        lg:order-2 lg:w-[638] lg:h-[361] lg:mt-20"
      >
        <SvgIcon />
      </div>

      <div
        className="order-2 w-full mt-5 px-6

        md:max-w-[582] md:mx-auto

        lg:order-1 lg:w-[582] lg:h-[414] lg:mt-20 lg:px-0"
      >
        <div>
          <h2
            className="text-white text-3xl font-bold

            md:text-4xl

            lg:text-5xl lg:w-[582] lg:h-[222]"
          >
            Building stellar websites for early startups
          </h2>

          <p className="text-gray-400 text-base mt-5 lg:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <div className="flex flex-wrap">
          <button className="relative cursor-pointer opacity-90 hover:opacity-100 mt-10 transition-opacity p-[2] bg-black rounded-[16] bg-linear-to-t from-[#FCD980] to-[#FCD980] active:scale-95">
            <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#FCD980] rounded-[14px] bg-linear-to-t from-[#FCD980] to-[#FCD980]">
              View our work
            </span>
          </button>

          <a
            className="text-base ml-6 mt-10 text-white flex items-center group gap-2"
            href="#"
          >
            View More
            <HiArrowLongRight className="text-white text-2xl w-[24] transition-all duration-300 group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
