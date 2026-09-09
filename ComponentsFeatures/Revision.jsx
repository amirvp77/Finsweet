import Image from "next/image";

export default function Revision() {
  return (
    <>
      <div className="w-full md:w-[1599] h-auto md:h-[654] mt-10 md:mt-20 bg-[#F4F6FC] flex flex-col md:flex-row justify-center gap-10 md:gap-40 items-center group cursor-pointer px-6 md:px-0 py-10 md:py-0">
        <div className="w-full md:w-auto overflow-hidden">
          <Image
            src="/Revision.png"
            alt="About image"
            width={575}
            height={398}
            className="w-full md:w-[575] h-[280] md:h-[398] object-cover transition-all duration-3000 group-hover:scale-150"
          />
        </div>

        <div className="w-full md:w-[624] h-auto md:h-[260] flex flex-col justify-center gap-5">
          <h3 className="text-base md:text-lg font-bold">
            Free Revision Rounds
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold">
            Get free Revisions and one week of free maintenance
          </h2>

          <p className="text-sm md:text-base text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </>
  );
}
