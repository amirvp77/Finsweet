import Image from "next/image";

export default function HeroAbout() {
  return (
    <div
      className="
      w-[1280] h-[336]
      flex justify-between
      group cursor-pointer
      items-center
      m-auto mt-22
      max-lg:w-full
      max-lg:h-auto
      max-lg:flex-col
      max-lg:gap-10
      max-lg:px-10
      max-md:px-5
              "
    >
      <div
        className="
        w-[595] h-[303]
        flex flex-col gap-6
        max-lg:w-full
        max-lg:h-auto
              "
      >
        <h4 className="text-lg">About us</h4>

        <h2 className=" text-6xl font-boldmax-lg:text-5xl max-md:text-4xl">
          Our designs solve problems
        </h2>

        <p className="text-base text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      <div
        className="
        overflow-hidden
        max-lg:w-full
        flex justify-center
        "
      >
        <Image
          src="/About.png"
          alt="About image"
          width={500}
          height={336}
          className="
          transition-all duration-3000
          group-hover:scale-150
          max-lg:w-full
          "
        />
      </div>
    </div>
  );
}
