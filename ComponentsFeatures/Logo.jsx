import Logo1 from "../Svg/Logo1";
import Logo2 from "../Svg/Logo2";
import Logo3 from "../Svg/Logo3";
import Logo4 from "../Svg/Logo4";
import Logo5 from "../Svg/Logo5";

export default function Logo() {
  return (
    <>
      <div className="w-full md:w-[1280] h-auto md:h-[84] m-auto mt-10 md:mt-20 flex flex-row justify-center items-start gap-8 md:gap-16 px-6 md:px-0">
        <div className="w-[120] md:w-[176] h-auto md:h-[84] shrink-0 ">
          <h2 className="text-2xl md:text-4xl font-bold mt-10 md:mt-0 ">100.000+</h2>
          <p>Finsweet Users</p>
        </div>

        <div className="w-full md:w-[1015] h-auto md:h-[32] flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-8 md:gap-10 scale-75 md:scale-100">
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
          <Logo5 />
        </div>
      </div>
    </>
  );
}
