import { HiArrowLongRight } from "react-icons/hi2";
import SvgIcon from "../Svg/Svg";

export default function Hero(){
    return(
        <div className="flex h-[510] max-md:flex-col md:justify-center gap-7 md:h-[688] bg-[#1C1E53]">
            
            <div className="w-full md:w-[582] md:h-[414] mt-20 ">

                <div>
                    <h2 className=" text-white text-3xl md:text-5xl font-bold md:w-[582] md:h-[222] ">Building stellar websites for early startups</h2>
                    <p className="text-gray-400 text-base mt-5 md:mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>

               
                <div className="flex max-md:flex-wrap">
                    <button className=" w-[150] h-[50] md:w-[230] md:h-[64] text-black rounded-4xl mt-10 cursor-pointer bg-[#FCD980]">
                        View our work
                    </button>

                    <a className="hidden text-base ml-6 mt-10 text-white  md:flex items-center gap-2" href="#">View More

                        <HiArrowLongRight className="text-white w-[24]  " /></a> 

                    
                </div>

            </div>


            <div className="left hidden md:block w-[638] h-[361] mt-20">

                <SvgIcon />

            </div>


        </div>
    )
}