import { HiArrowLongRight } from "react-icons/hi2";
import SvgIcon from "../Svg/Svg";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[757] md:w-[1600] bg-[#1C1E53] md:justify-center md:gap-7 px-6 md:px-0 py-10 md:py-0">
      <div className="order-1 md:order-2 w-full md:w-[638] h-[250] md:h-[361]  md:mt-20 flex justify-center items-center relative">
        <SvgIcon />
      </div>

      <div className="order-2 md:order-1 w-full px-6 md:px-0 md:w-[582] md:h-[414] mt-5 md:mt-20">
        <div>
          <h2 className="text-white text-3xl md:text-5xl font-bold md:w-[582] md:h-[222]">
            Building stellar websites for early startups
          </h2>

          <p className="text-gray-400 text-base mt-5 md:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <div className="flex max-md:flex-wrap">
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
