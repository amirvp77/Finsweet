import { HiArrowLongRight } from "react-icons/hi2";
import SvgIcon from "../Svg/Svg";

export default function Hero() {
  return (
    <div className="flex h-[510] max-md:flex-col md:justify-center gap-7 md:h-[688] bg-[#1C1E53]">
      <div className="w-full px-6 md:px-0 md:w-[582] md:h-[414] mt-20 md:mt-20">
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
          <button className="relative cursor-pointer opacity-90 hover:opacity-100 mt-10 transition-opacity p-[2] bg-black rounded-[16] bg-gradient-to-t from-[#FCD980] to-[#FCD980] active:scale-95">
            <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#FCD980] rounded-[14px] bg-gradient-to-t from-[#FCD980] to-[#FCD980]">
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

      <div className="hidden md:block w-[638] h-[361] mt-20">
        <SvgIcon />
      </div>
    </div>
  );
}
