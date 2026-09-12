import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";




export default function Socials3() {
  return (
    <>
      <div className="group w-[296] h-[344] bg-white flex flex-col justify-center items-center gap-5 hover:shadow-[0_20px_50px_rgba(8,112,184,0.7)] transition-all duration-600">
        <div className="w-[168] h-[168] relative rounded-full overflow-hidden">
          <Image
            priority
            src="/img3.png"
            alt="massion image"
            width={168}
            height={168}
            className="w-[168] h-[168] rounded-full object-cover"
          />

          <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-[#5339fa] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-end gap-2">
            <a href="#" className="text-white mb-5">
              <FaFacebook />
            </a>
            <a href="#" className="text-white mb-5">
              <FaTwitter />
            </a>
            <a href="#" className="text-white mb-5">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <h3 className="text-2xl">Simon Adams</h3>

        <p className="text-gray-500">CTO</p>
      </div>
    </>
  );
}
