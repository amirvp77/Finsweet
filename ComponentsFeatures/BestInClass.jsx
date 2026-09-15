import Image from "next/image";

export default function BestInClass() {
  return (
    <div
      className="
        w-full
        h-auto
        mt-10
        flex
        flex-col
        items-center
        gap-10
        px-6
        md:mt-20
        md:px-16
        md:gap-16
        lg:w-[1280]
        lg:h-[398]
        lg:m-auto
        lg:flex-row
        lg:justify-between
        lg:gap-0
        lg:px-0
        lg:mt-20
      "
    >
      <div
        className="
          w-full
          flex
          flex-col
          justify-center
          gap-6
          md:w-[624]
          md:gap-8
          lg:h-[316]
          lg:gap-10
        "
      >
        <h3 className="text-base md:text-lg font-bold">Use Client-first</h3>

        <h2 className="text-3xl md:text-4xl font-bold">
          Top agencies and freelancers <br className="hidden lg:block" />
          around the world use <br className="hidden lg:block" />
          Client-first
        </h2>

        <p className="text-sm md:text-base text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>

      <div
        className="
          w-full
          overflow-hidden
          md:w-[575]
          lg:w-auto
        "
      >
        <Image
          src="/Class.png"
          alt="Class image"
          width={575}
          height={398}
          className="
            w-full
            h-[280]
            object-cover
            transition-all
            duration-3000
            group-hover:scale-150
            md:h-[398]
            lg:w-[575]
          "
        />
      </div>
    </div>
  );
}
