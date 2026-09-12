import Socials1 from "../Svg/Socials1";
import Socials2 from "../Svg/Socials2";
import Socials3 from "../Svg/Socials3";
import Socials4 from "../Svg/Socials4";

export default function Team() {
  return (
    <>
      <div className="w-full md:w-[1600] h-auto md:h-[712] bg-[#F4F6FC] mt-10 md:mt-10 flex flex-col items-center justify-center gap-8 md:gap-12 px-6 md:px-0 py-10 md:py-0">
        <h2 className="text-3xl md:text-5xl font-bold">Meet our team</h2>

        <div className="w-full md:w-[1280] h-auto md:h-[344] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
          <Socials1 />
          <Socials2 />
          <Socials3 />
          <Socials4 />
        </div>
      </div>
    </>
  );
}
