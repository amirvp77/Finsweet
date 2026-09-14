import Logo1 from "../Svg/Logo1";
import Logo2 from "../Svg/Logo2";
import Logo3 from "../Svg/Logo3";
import Logo4 from "../Svg/Logo4";
import Logo5 from "../Svg/Logo5";

export default function Logo() {
  return (
    <div
      className="
        w-full
        h-auto
        m-auto
        mt-10
        flex
        flex-col
        items-center
        gap-8
        px-6
        md:mt-20
        md:gap-12
        lg:w-[1280]
        lg:h-[84]
        lg:flex-row
        lg:justify-center
        lg:items-start
        lg:px-0
        lg:gap-16
      "
    >
      <div
        className="
          w-[176]
          h-[84]
          text-center
          lg:text-left
        "
      >
        <h2 className="text-3xl lg:text-4xl font-bold">100.000+</h2>

        <p>Finsweet Users</p>
      </div>

      <div
        className="
          w-full
          flex
          flex-wrap
          justify-center
          items-center
          gap-8
          md:gap-10
          lg:w-[1015]
          lg:flex-nowrap
          lg:justify-between
          lg:gap-10
        "
      >
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
        <Logo5 />
      </div>
    </div>
  );
}
