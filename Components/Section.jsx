import Svg1 from "../Svg/Svg1";
import Svg2 from "../Svg/Svg2";
import Svg3 from "../Svg/Svg3";
import Svg4 from "../Svg/Svg4";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Section() {
  return (
    <section
      className="flex flex-col gap-10 justify-center w-full h-auto bg-[#F4F6FC] px-6 py-10
      md:flex-row md:gap-10 md:py-16
      lg:h-[661] lg:px-0 lg:gap-10 lg:py-0"
    >
      <div
        className="w-full h-auto mt-0
        md:w-[300] md:mt-10
        lg:w-[405] lg:h-[184] lg:mt-30"
      >
        <h2 className="text-black text-4xl font-bold lg:text-5xl">
          How we work
        </h2>

        <br />

        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>

        <br />

        <a
          className="text-base text-blue-700 flex items-center gap-2 group"
          href="#"
        >
          View More
          <HiArrowLongRight className="text-[#590fd8] w-[24] text-2xl transition-all duration-300 group-hover:translate-x-2" />
        </a>
      </div>

      <div
        className="w-full h-auto grid grid-cols-1 gap-10
        md:w-[500] md:grid-cols-2 md:gap-8
        lg:w-[656] lg:h-[405] lg:gap-10 lg:mt-30"
      >
        <div className="flex flex-col gap-3">
          <Svg1 />
          <h2 className="text-black text-3xl">Strategy</h2>
          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit
            aliquam.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Svg2 />
          <h2 className="text-black text-3xl">Wireframing</h2>
          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit
            aliquam.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Svg3 />
          <h2 className="text-black text-3xl">Design</h2>
          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit
            aliquam.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Svg4 />
          <h2 className="text-black text-3xl">Development</h2>
          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit
            aliquam.
          </p>
        </div>
      </div>
    </section>
  );
}
