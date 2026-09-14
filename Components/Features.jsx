import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiFillClockCircle, AiFillCheckCircle } from "react-icons/ai";
import { BsClipboard2DataFill, BsPencilFill } from "react-icons/bs";

export default function Features() {
  return (
    <section className="w-full h-auto bg-[#F4F6FC] flex flex-col gap-10 py-10 lg:h-[1191] lg:gap-0 lg:py-0">
      <div
        className="w-full h-auto text-black text-center px-6 m-auto
        md:w-[630]
        lg:h-[232] lg:p-10"
      >
        <h5>Features</h5>

        <br />

        <h2 className="text-3xl font-bold lg:text-5xl">
          Design that solves problems, one product at a time
        </h2>
      </div>

      <div
        className="grid grid-cols-1 gap-5 px-5 m-auto
        md:grid-cols-2 md:px-10
        lg:grid-cols-3 lg:px-0"
      >
        <div className="w-full h-auto flex flex-col bg-white gap-3 p-7 transition-all duration-500 lg:w-[405] lg:h-[316] lg:p-10 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <FaPeopleGroup className="text-blue-700 text-4xl" />
          <h2 className="text-black text-2xl">Uses Client First</h2>
          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed
            mi.
          </p>
        </div>

        <div className="w-full h-auto flex flex-col bg-white gap-3 p-7 transition-all duration-500 lg:w-[405] lg:h-[316] lg:p-10 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <AiFillCheckCircle className="text-blue-700 text-4xl" />
          <h2 className="text-black text-2xl">Two Free Revision Round</h2>
          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed
            mi.
          </p>
        </div>

        <div className="w-full h-auto flex flex-col bg-white gap-3 p-7 transition-all duration-500 lg:w-[405] lg:h-[316] lg:p-10 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <BsPencilFill className="text-blue-700 text-4xl" />
          <h2 className="text-black text-2xl">Template Customization</h2>
          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed
            mi.
          </p>
        </div>

        <div className="w-full h-auto flex flex-col bg-white gap-3 p-7 transition-all duration-500 lg:w-[405] lg:h-[316] lg:p-10 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <HiChatBubbleLeftRight className="text-blue-700 text-4xl" />
          <h2 className="text-black text-2xl">24/7 Support</h2>
          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed
            mi.
          </p>
        </div>

        <div className="w-full h-auto flex flex-col bg-white gap-3 p-7 transition-all duration-500 lg:w-[405] lg:h-[316] lg:p-10 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <AiFillClockCircle className="text-blue-700 text-4xl" />
          <h2 className="text-black text-2xl">Quick Delivery</h2>
          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed
            mi.
          </p>
        </div>

        <div className="w-full h-auto flex flex-col bg-white gap-3 p-7 transition-all duration-500 lg:w-[405] lg:h-[316] lg:p-10 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <BsClipboard2DataFill className="text-blue-700 text-4xl" />
          <h2 className="text-black text-2xl">Hands-on approach</h2>
          <p className="text-gray-500">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed
            mi.
          </p>
        </div>
      </div>
    </section>
  );
}
