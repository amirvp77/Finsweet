import { HiArrowLongRight } from "react-icons/hi2";

export default function OurWork() {
  return (
    <section className="w-full md:w-[1280] h-auto md:h-[728] m-auto flex flex-col justify-center gap-8 px-4 md:px-0">
      <div className="flex max-md:flex-col max-md:gap-4 mt-10 justify-between items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          View our projects
        </h2>

        <a
          className="text-base font-bold text-black flex items-center gap-2 group"
          href="#"
        >
          View More
          <HiArrowLongRight className="w-6 h-6 transition-all duration-300 group-hover:translate-x-2" />
        </a>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-3 md:gap-6">
        <div className="w-full md:w-[843] h-[300] md:h-[600] relative bg-[url('/CardBd.png')] bg-cover bg-center hover:shadow-2xl  transition-all duration-600">
          <div className="absolute inset-y-0 left-0 w-full md:w-[400] bg-[#1C1E53BF]"></div>

          <div className="absolute inset-y-0 left-0 w-full md:w-[350] gap-8 p-8 md:p-12 flex flex-col justify-center mt-0 md:mt-65 text-white z-10">
            <h3 className="text-2xl font-bold">
              Workhub office Webflow Webflow Design
            </h3>

            <p className="text-sm text-gray-200 opacity-80">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam
            </p>

            <a
              className="flex text-base text-amber-300 md:flex items-center group gap-2"
              href="#"
            >
              View More
              <HiArrowLongRight className="text-amber-300 text-2xl w-[24] transition-all duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-3 md:gap-6 w-full md:w-[414]">
          <div className="w-full h-[150] md:h-[284] relative bg-[url('/Card3.png')] bg-cover bg-center overflow-hidden hover:shadow-2xl l transition-all duration-600">
            <div className="absolute inset-0 bg-[#1C1E536B]"></div>

            <div className="absolute inset-0 p-8 flex flex-col justify-center mt-0 md:mt-30 gap-5 text-white z-10">
              <h3 className=" md:text-xl font-bold">
                Unisaas Website <br /> Design
              </h3>

              <a
                className="flex text-base text-amber-300 md:flex items-center group gap-2"
                href="#"
              >
                View More
                <HiArrowLongRight className=" text-amber-300 text-2xl w-[24] transition-all duration-300 group-hover:translate-x-2" />
              </a>
            </div>
          </div>

          <div className="w-full h-[150] md:h-[284] bg-[url('/Card2.png')] bg-cover bg-center hover:shadow-2xl transition-all duration-600"></div>
        </div>
      </div>
    </section>
  );
}
