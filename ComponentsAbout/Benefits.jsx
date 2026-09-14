import { FaPeopleGroup } from "react-icons/fa6";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import Logo1 from "../Svg/Logo1";
import Logo2 from "../Svg/Logo2";
import Logo3 from "../Svg/Logo3";
import Logo4 from "../Svg/Logo4";
import Logo5 from "../Svg/Logo5";

export default function Benefits() {
  return (
    <div
      className="w-full h-auto m-auto flex flex-col justify-between px-6 py-10  md:px-10
      lg:w-[1280] lg:h-[624] lg:px-0 lg:py-0"
    >
      <h2
        className="m-auto text-center text-3xl w-full
        md:text-5xl
        lg:w-[630]"
      >
        The benefits of working with us
      </h2>

      <div
        className="grid grid-cols-1 gap-5 w-full
        lg:grid-cols-3"
      >
        <div className="w-full h-auto flex flex-col bg-[#F4F6FC] gap-3 p-7 transition-all duration-500 lg:w-[405] lg:h-[316] lg:p-10 lg:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <FaPeopleGroup className="text-blue-700 text-4xl" />

          <h2 className="text-black text-2xl">Uses Client First</h2>

          <p className="text-gray-500 text-sm md:text-base">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed
            mi.
          </p>
        </div>

        <div className="w-full h-auto flex flex-col bg-[#F4F6FC] gap-3 p-7 transition-all duration-500 lg:w-[405] lg:h-[316] lg:p-10 lg:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <AiFillCheckCircle className="text-blue-700 text-4xl" />

          <h2 className="text-black text-2xl">Two Free Revision Round</h2>

          <p className="text-gray-500 text-sm md:text-base">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed
            mi.
          </p>
        </div>

        <div className="w-full h-auto flex flex-col bg-[#F4F6FC] gap-3 p-7 transition-all duration-500 lg:w-[405] lg:h-[316] lg:p-10 lg:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <BsPencilFill className="text-blue-700 text-4xl" />

          <h2 className="text-black text-2xl">Template Customization</h2>

          <p className="text-gray-500 text-sm md:text-base">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed
            mi.
          </p>
        </div>
      </div>

      <div
        className="w-full h-auto flex flex-col justify-center items-center gap-8 mt-10

        lg:w-[1280] lg:h-[84] lg:flex-row lg:gap-16 lg:mt-0"
      >
        <div className="w-full text-center lg:w-[176] lg:text-left">
          <h2 className="text-3xl font-bold lg:text-4xl">100.000+</h2>

          <p>Finsweet Users</p>
        </div>

        <div
          className="w-full h-auto flex flex-wrap justify-center items-center gap-6

          md:gap-10

          lg:w-[1015] lg:h-[32] lg:justify-between"
        >
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
          <Logo5 />
        </div>
      </div>
    </div>
  );
}
