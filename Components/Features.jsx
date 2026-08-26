    import { HiChatBubbleLeftRight } from "react-icons/hi2";
    import { FaPeopleGroup } from "react-icons/fa6";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsClipboard2DataFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";





    export default function Features(){
        return(
            <>
                <section className="w-full h-auto md:h-[1191] bg-[#F4F6FC] flex flex-col ">

                    <div className="w-full md:w-[630] text-black h-auto md:h-[232] m-auto p-10 text-center">

                        <h5>Features</h5>

                        <br />

                        <h2 className="text-4xl md:text-5xl font-medium">
                            Design that solves problems, one product at a time
                        </h2>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 m-auto gap-5">

                        <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-white gap-3 p-10 md:hover:shadow-xl">
                            <FaPeopleGroup className="text-blue-700 text-4xl" />
                            <h2 className="text-black text-2xl">Uses Client First</h2>
                            <p className="text-gray-500">
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                            </p>
                        </div>

                        <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-white gap-3 p-10 md:hover:shadow-xl">
                            <AiFillCheckCircle className="text-blue-700 text-4xl" />
                            <h2 className="text-black text-2xl">Two Free Revision Round</h2>
                            <p className="text-gray-500">
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                            </p>
                        </div>

                        <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-white gap-3 p-10 md:hover:shadow-xl">
                            <BsPencilFill className="text-blue-700 text-4xl" />
                            <h2 className="text-black text-2xl">Template Customization</h2>
                            <p className="text-gray-500">
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                            </p>
                        </div>

                        <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-white gap-3 p-10 md:hover:shadow-xl">
                            <HiChatBubbleLeftRight className="text-blue-700 text-4xl" />
                            <h2 className="text-black text-2xl">24/7 Support</h2>
                            <p className="text-gray-500">
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                            </p>
                        </div>

                        <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-white gap-3 p-10 md:hover:shadow-xl">
                            <AiFillClockCircle className="text-blue-700 text-4xl" />
                            <h2 className="text-black text-2xl">Quick Delivery</h2>
                            <p className="text-gray-500">
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                            </p>
                        </div>

                        <div className="w-full md:w-[405] h-auto md:h-[316] flex flex-col bg-white gap-3 p-10 md:hover:shadow-xl">
                            <BsClipboard2DataFill className="text-blue-700 text-4xl" />
                            <h2 className="text-black text-2xl">Hands-on approach</h2>
                            <p className="text-gray-500">
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                            </p>
                        </div>

                    </div>

            </section>
            </>
        )
    }