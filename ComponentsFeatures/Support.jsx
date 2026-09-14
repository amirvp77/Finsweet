import Image from "next/image";

export default function Support() {
  return (
    <div
      className="
        w-full
        h-auto
        flex
        px-6
        py-10
        group
        cursor-pointer
        md:px-16
        md:py-16
        lg:w-[1599]
        lg:h-[654]
        lg:px-0
        lg:py-0
      "
    >
      <div
        className="
          w-full
          h-auto
          m-auto
          flex
          flex-col
          gap-10
          items-center
          md:w-[1279]
          md:gap-16
          lg:h-[398]
          lg:flex-row
          lg:justify-center
          lg:gap-40
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
            lg:h-[260]
            lg:gap-10
          "
        >
          <h3 className="text-base md:text-lg font-bold">24/7 Support</h3>

          <h2 className="text-3xl md:text-4xl font-bold">
            Working with us, you will be getting 24/7 priority support
          </h2>

          <p className="text-sm md:text-base text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
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
            priority
            src="/Support.png"
            alt="Support image"
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
    </div>
  );
}
