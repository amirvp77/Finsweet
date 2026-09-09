import { FaPeopleGroup } from "react-icons/fa6";
import { BsClipboard2DataFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";

export default function BenefitsFeatures() {
  return (
    <>
      <div className="w-full md:w-[1280] h-auto md:h-[492] mt-10 md:mt-20 m-auto flex flex-col gap-10 md:gap-20 justify-between px-6 md:px-0">
        <h2 className="m-auto text-center text-3xl md:text-5xl font-bold w-full md:w-[630]">
          The benefits of working with our team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 m-auto gap-5 w-full">
          <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-[#F4F6FC] gap-3 p-7 md:p-10 md:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-500">
            <BsClipboard2DataFill className="text-blue-700 text-4xl" />
            <h2 className="text-black text-2xl">Uses Client First</h2>
            <p className="text-gray-500">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>

          <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-[#F4F6FC] gap-3 p-7 md:p-10 md:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-500">
            <BsPencilFill className="text-blue-700 text-4xl" />
            <h2 className="text-black text-2xl">Two Free Revision Round</h2>
            <p className="text-gray-500">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>

          <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-[#F4F6FC] gap-3 p-7 md:p-10 md:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-500">
            <FaPeopleGroup className="text-blue-700 text-4xl" />
            <h2 className="text-black text-2xl">Template Customization</h2>
            <p className="text-gray-500">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
