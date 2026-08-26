import Sidbar from "../Svg/Sidbar";
import Hero from "./Hero";

export default function Header(){
    return(
        <header className="w-full h-[92] bg-[#1C1E53] ">

            <div className=" flex items-center md:justify-between py-6 px-7 text-white">

                <div className=" text-2xl font-bold ">
                    finsweet
                </div>

                <nav className="hidden md:flex list-none gap-15 ">

                      <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4] after:w-full after:h-[2] after:bg-[#FCD980] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
Home</li>
                      <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4] after:w-full after:h-[2] after:bg-[#FCD980] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
About us</li>
                      <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4] after:w-full after:h-[2] after:bg-[#FCD980] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
Features</li>
                      <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4] after:w-full after:h-[2] after:bg-[#FCD980] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
Pricing</li>
                      <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4] after:w-full after:h-[2] after:bg-[#FCD980] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
FAQ</li>
                      <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4] after:w-full after:h-[2] after:bg-[#FCD980] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
Blog</li>
                    
                </nav>

                <Sidbar/>

                <button className="hidden md:block w-[185] border-2 border-gray-500 rounded-3xl h-[60] hover:bg-white hover:text-black transition-all">
                    Contact us
                </button>
            </div>
        </header>
    );
}