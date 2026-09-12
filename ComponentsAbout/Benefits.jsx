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
    <>
      <div className="w-full md:w-[1280] h-auto md:h-[624] m-auto flex flex-col justify-between px-6 md:px-0 py-10 md:py-0">
        <h2 className="m-auto text-center text-3xl md:text-5xl w-full md:w-[630]">
          The benefits of working with us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 m-auto gap-5 w-full">
          <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-[#F4F6FC] gap-3 p-7 md:p-10 md:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-500">
            <FaPeopleGroup className="text-blue-700 text-4xl" />
            <h2 className="text-black text-2xl">Uses Client First</h2>
            <p className="text-gray-500 text-sm md:text-base">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>

          <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-[#F4F6FC] gap-3 p-7 md:p-10 md:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-500">
            <AiFillCheckCircle className="text-blue-700 text-4xl" />
            <h2 className="text-black text-2xl">Two Free Revision Round</h2>
            <p className="text-gray-500 text-sm md:text-base">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>

          <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-[#F4F6FC] gap-3 p-7 md:p-10 md:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-500">
            <BsPencilFill className="text-blue-700 text-4xl" />
            <h2 className="text-black text-2xl">Template Customization</h2>
            <p className="text-gray-500 text-sm md:text-base">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[1280] h-auto md:h-[84] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-10 md:mt-0">
          <div className="w-full md:w-[176] h-[84] text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">100.000+</h2>
            <p>Finsweet Users</p>
          </div>

          <div className="w-full md:w-[1015] h-auto md:h-[32] flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-10">
            <Logo1 />
            <Logo2 />
            <Logo3 />
            <Logo4 />
            <Logo5 />
          </div>
        </div>
      </div>
    </>
  );
}
