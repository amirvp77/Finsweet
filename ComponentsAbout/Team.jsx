import Socials1 from "../Svg/Socials1";
import Socials2 from "../Svg/Socials2";
import Socials3 from "../Svg/Socials3";
import Socials4 from "../Svg/Socials4";

export default function Team() {
  return (
    <div
      className="w-full h-auto bg-[#F4F6FC] mt-10 flex flex-col items-center justify-center gap-8 px-6 py-10

      md:gap-12 md:px-10

      lg:w-[1600] lg:h-[712] lg:px-0 lg:py-0"
    >
      <h2 className="text-3xl font-bold lg:text-5xl">Meet our team</h2>

      <div
        className="w-full h-auto grid grid-cols-1 gap-6 place-items-center

        md:grid-cols-2

        lg:w-[1280] lg:h-[344] lg:flex lg:flex-row lg:justify-center lg:gap-10"
      >
        <Socials1 />
        <Socials2 />
        <Socials3 />
        <Socials4 />
      </div>
    </div>
  );
}
