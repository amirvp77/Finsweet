import { HiArrowLongRight } from "react-icons/hi2";

export default function OurWork() {
  return (
    <section
      className="w-full h-auto m-auto flex flex-col justify-center gap-8 px-4 py-10
      md:px-8
      lg:w-[1280] lg:h-[728] lg:px-0 lg:py-0"
    >
      <div
        className="flex flex-col gap-4 mt-10 justify-between items-start
        md:flex-row md:items-center
        lg:mt-10"
      >
        <h2 className="text-3xl font-bold text-black lg:text-5xl">
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

      <div
        className="w-full flex flex-col gap-6
        lg:flex-row"
      >
        <div
          className="w-full h-[350] relative bg-[url('/CardBd.png')] bg-cover bg-center hover:shadow-2xl transition-all duration-600
          md:h-[500]
          lg:w-[843] lg:h-[600]"
        >
          <div
            className="absolute inset-y-0 left-0 w-full bg-[#1C1E53BF]
            lg:w-[400]"
          ></div>

          <div
            className="absolute inset-y-0 left-0 w-full gap-8 p-8 flex flex-col justify-center text-white z-10
            lg:w-[350] lg:p-12 lg:mt-65"
          >
            <h3 className="text-2xl font-bold">
              Workhub office Webflow Webflow Design
            </h3>

            <p className="text-sm text-gray-200 opacity-80">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam
            </p>

            <a
              className="flex text-base text-amber-300 items-center group gap-2"
              href="#"
            >
              View More
              <HiArrowLongRight className="text-amber-300 text-2xl w-[24] transition-all duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </div>

        <div
          className="flex flex-col gap-6 w-full
          md:flex-row
          lg:w-[414] lg:flex-col"
        >
          <div
            className="w-full h-[200] relative bg-[url('/Card3.png')] bg-cover bg-center overflow-hidden hover:shadow-2xl transition-all duration-600
            md:h-[250]
            lg:h-[284]"
          >
            <div className="absolute inset-0 bg-[#1C1E536B]"></div>

            <div
              className="absolute inset-0 p-6 flex flex-col gap-2 justify-end text-white z-10
              lg:p-8 lg:justify-center lg:mt-30"
            >
              <h3 className="text-lg lg:text-xl font-bold leading-tight">
                Unisaas Website <br className="hidden lg:block" /> Design
              </h3>

              <a
                className="flex items-center text-sm lg:text-base text-amber-300 group gap-2"
                href="#"
              >
                View More
                <HiArrowLongRight className="text-amber-300 text-lg lg:text-2xl w-[24] transition-all duration-300 group-hover:translate-x-2" />
              </a>
            </div>
          </div>

          <div
            className="w-full h-[200] bg-[url('/Card2.png')] bg-cover bg-center hover:shadow-2xl transition-all duration-600
            md:h-[250]
            lg:h-[284]"
          ></div>
        </div>
      </div>
    </section>
  );
}
