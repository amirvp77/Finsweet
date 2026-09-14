import SvgIcon2 from "../Svg/SvgIcon2";

export default function HeroFeatures() {
  return (
    <div
      className="
        flex flex-col
        h-auto
        bg-[#1C1E53]
        gap-12
        px-6
        py-10
        md:gap-20
        md:px-16
        md:py-20
        lg:flex-row
        lg:h-[700]
        lg:w-[1600]
        lg:justify-center
        lg:gap-7
        lg:px-0
        lg:py-0
      "
    >
      <div
        className="
          order-1
          w-full
          h-[250]
          flex
          justify-center
          items-center
          relative
          md:h-[380]
          lg:order-2
          lg:w-[638]
          lg:h-[361]
          lg:mt-30
        "
      >
        <SvgIcon2 />

        <img
          src="/Fill 1.png"
          alt=""
          className="
            absolute
            right-0
            bottom-0
            w-[70]
            h-[70]
            md:w-[110]
            md:h-[110]
            lg:w-[145]
            lg:h-[145]
            animate-[spin_6s_linear_infinite]
          "
        />
      </div>

      <div
        className="
          order-2
          w-full
          md:w-[600]
          lg:order-1
          lg:w-[582]
          lg:h-[414]
          lg:mt-30
        "
      >
        <h2
          className="
            text-white
            text-3xl
            font-bold
            md:text-5xl
            lg:w-[468]
            lg:h-[148]
          "
        >
          All the features <br />
          you need
        </h2>

        <p
          className="
            text-gray-400
            text-sm
            mt-5
            md:text-base
            md:mt-8
            lg:mt-0
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button
          className="
            mt-10
            px-8
            py-3
            rounded-2xl
            bg-[#FCD980]
          "
        >
          View our work
        </button>
      </div>
    </div>
  );
}
