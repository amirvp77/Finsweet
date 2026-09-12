import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsClipboard2DataFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";

export default function Features() {
  return (
    <>
      <section className="w-full h-auto md:h-[1191] bg-[#F4F6FC] flex flex-col py-10 md:py-0">
        <div className="w-full md:w-[630] text-black h-auto md:h-[232] m-auto px-6 md:p-10 text-center">
          <h5>Features</h5>

          <br />

          <h2 className="text-3xl md:text-5xl font-bold">
            Design that solves problems, one product at a time
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 m-auto gap-5 px-5 md:px-0">
          <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-white gap-3 p-7 md:p-10 md:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-500">
            <FaPeopleGroup className="text-blue-700 text-4xl" />
            <h2 className="text-black text-2xl">Uses Client First</h2>
            <p className="text-gray-500">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>

          <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-white gap-3 p-7 md:p-10 md:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-500">
            <AiFillCheckCircle className="text-blue-700 text-4xl" />
            <h2 className="text-black text-2xl">Two Free Revision Round</h2>
            <p className="text-gray-500">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>

          <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-white gap-3 p-7 md:p-10 md:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-500">
            <BsPencilFill className="text-blue-700 text-4xl" />
            <h2 className="text-black text-2xl">Template Customization</h2>
            <p className="text-gray-500">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>

          <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-white gap-3 p-7 md:p-10 md:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-500">
            <HiChatBubbleLeftRight className="text-blue-700 text-4xl" />
            <h2 className="text-black text-2xl">24/7 Support</h2>
            <p className="text-gray-500">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>

          <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-white gap-3 p-7 md:p-10 md:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-500">
            <AiFillClockCircle className="text-blue-700 text-4xl" />
            <h2 className="text-black text-2xl">Quick Delivery</h2>
            <p className="text-gray-500">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>

          <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-white gap-3 p-7 md:p-10 md:hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-500">
            <BsClipboard2DataFill className="text-blue-700 text-4xl" />
            <h2 className="text-black text-2xl">Hands-on approach</h2>
            <p className="text-gray-500">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
