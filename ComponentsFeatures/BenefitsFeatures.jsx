import { FaPeopleGroup } from "react-icons/fa6";
import { BsClipboard2DataFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";

export default function BenefitsFeatures() {
  return (
    <div
      className="
        w-full
        h-auto
        mt-10
        flex
        flex-col
        gap-10
        px-6

        md:mt-20
        md:px-16
        md:gap-16

        lg:w-[1280]
        lg:h-[492]
        lg:m-auto
        lg:justify-between
        lg:px-0
      "
    >
      <h2
        className="
          m-auto
          text-center
          text-3xl
          font-bold
          w-full

          md:text-5xl
          md:w-[630]
        "
      >
        The benefits of working with our team
      </h2>

      <div
        className="
          grid
          grid-cols-1
          gap-5
          w-full

          md:grid-cols-2

          lg:grid-cols-3
        "
      >
        <div className="w-full h-auto flex flex-col bg-[#F4F6FC] gap-3 p-7 md:p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,112,184,0.7)]">
          <BsClipboard2DataFill className="text-blue-700 text-4xl" />

          <h2 className="text-black text-2xl">Uses Client First</h2>

          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed
            mi.
          </p>
        </div>

        <div className="w-full h-auto flex flex-col bg-[#F4F6FC] gap-3 p-7 md:p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,112,184,0.7)]">
          <BsPencilFill className="text-blue-700 text-4xl" />

          <h2 className="text-black text-2xl">Two Free Revision Round</h2>

          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed
            mi.
          </p>
        </div>

        <div className="w-full h-auto flex flex-col bg-[#F4F6FC] gap-3 p-7 md:p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,112,184,0.7)]">
          <FaPeopleGroup className="text-blue-700 text-4xl" />

          <h2 className="text-black text-2xl">Template Customization</h2>

          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed
            mi.
          </p>
        </div>
      </div>
    </div>
  );
}
