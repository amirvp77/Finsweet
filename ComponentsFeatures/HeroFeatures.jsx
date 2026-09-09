import SvgIcon2 from "../Svg/SvgIcon2";

export default function HeroFeatures() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[757] md:w-[1600] bg-[#1C1E53] md:justify-center gap-10 md:gap-7 px-6 md:px-0 py-10 md:py-0">
      <div className="order-1 md:order-2 w-full md:w-[638] h-[250] md:h-[361] mt-0 md:mt-20 flex justify-center items-center relative">
        <SvgIcon2 />

        <img
          src="/Fill 1.png"
          priority
          className="absolute right-0 bottom-0 w-[70] h-[70] md:w-[145] md:h-[145] animate-[spin_6s_linear_infinite]"
          alt=""
        />
      </div>

      <div className="order-2 md:order-1 w-full md:w-[582] h-auto md:h-[414] mt-0 md:mt-20">
        <div>
          <h2 className="text-white text-3xl md:text-5xl font-bold md:w-[468] md:h-[148]">
            All the features <br /> you need
          </h2>

          <p className="text-gray-400 text-sm md:text-base mt-5 md:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex max-md:flex-wrap">
          <button className="relative cursor-pointer opacity-90 hover:opacity-100 mt-10 transition-opacity p-[2] bg-black rounded-[16px] bg-gradient-to-t from-[#FCD980] to-[#FCD980] active:scale-95">
            <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#FCD980] rounded-[14px] bg-gradient-to-t from-[#FCD980] to-[#FCD980]">
              View our work
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
