import Svg1 from "../Svg/Svg1";
import Svg2 from "../Svg/Svg2";
import Svg3 from "../Svg/Svg3";
import Svg4 from "../Svg/Svg4";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Section(){
   
    return(
        <>
            <section className="flex max-md:flex-col gap-10 justify-center w-full h-auto md:h-[661] bg bg-[#F4F6FC] ">

                <div className="w-full md:w-[405] h-[184] mt-10 md:mt-30">
                    
                    <h2 className="text-black text-5xl font-medium ">How we work</h2>
                    <br />
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <br />
                    <a className="text-base text-blue-700 md:flex items-center gap-2" href="#">View More

                        <HiArrowLongRight className="text-[#590fd8] w-[24]  " /></a>
                    

                </div>

                <div className="w-full md:w-[656] h-auto md:h-[405] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 mt-20 md:mt-30">

                    <div className="flex flex-col gap-3">
                        <Svg1 />
                        <h2 className="text-black text-3xl">Strategy</h2>
                        <p className="text-gray-500">
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Svg2 />
                        <h2 className="text-black text-3xl">Wireframing</h2>
                        <p className="text-gray-500">
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Svg3 />
                        <h2 className="text-black text-3xl">Design</h2>
                        <p className="text-gray-500">
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Svg4 />
                        <h2 className="text-black text-3xl">Development</h2>
                        <p className="text-gray-500">
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
                        </p>
                    </div>

                </div>

            </section>
        </>
    )

}