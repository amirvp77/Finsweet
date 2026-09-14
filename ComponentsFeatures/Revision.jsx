import Image from "next/image";

export default function Revision() {
  return (
    <div
      className="
        w-full
        h-auto
        mt-10
        bg-[#F4F6FC]
        flex
        flex-col
        gap-10
        items-center
        group
        cursor-pointer
        px-6
        py-10
        md:mt-20
        md:px-16
        md:gap-16
        lg:w-[1599]
        lg:h-[654]
        lg:flex-row
        lg:justify-center
        lg:gap-40
        lg:px-0
        lg:py-0
      "
    >
      <div
        className="
          w-full
          overflow-hidden
          md:w-[575]
        "
      >
        <Image
          src="/Revision.png"
          alt="Revision image"
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

      <div
        className="
          w-full
          flex
          flex-col
          justify-center
          gap-5
          md:w-[624]
          lg:h-[260]
        "
      >
        <h3 className="text-base md:text-lg font-bold">Free Revision Rounds</h3>

        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
          "
        >
          Get free Revisions and one week of free maintenance
        </h2>

        <p
          className="
            text-sm
            md:text-base
            text-gray-400
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
    </div>
  );
}
