import Image from "next/image";

export default function Mission() {
  return (
    <div
      className="w-full h-auto mt-10 bg-[#EEF4FA] m-auto flex flex-col gap-14 justify-center items-center px-6 py-10

      md:mt-20 md:px-10 md:gap-20

      lg:w-[1599] lg:h-[1022] lg:px-0 lg:py-0"
    >
      <div
        className="w-full h-auto flex flex-col gap-8 items-center group cursor-pointer

        md:flex-row md:justify-between md:gap-0

        lg:w-[1278] lg:h-[336]"
      >
        <div
          className="w-full h-auto flex flex-col gap-3

          md:w-[48%]

          lg:w-[623] lg:h-[228]"
        >
          <h4>Our Mission</h4>

          <h2 className="text-3xl font-medium lg:text-4xl">Our Mission</h2>

          <p className="text-sm text-gray-500 lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div
          className="w-full overflow-hidden

          md:w-[48%]

          lg:w-auto"
        >
          <Image
            src="/s1.jpg"
            alt="massion image"
            width={515}
            height={336}
            className="w-full h-[240] object-cover transition-all duration-3000 group-hover:scale-150

            md:h-[280]

            lg:w-[515] lg:h-[336]"
          />
        </div>
      </div>

      <div
        className="w-full h-auto flex flex-col gap-8 items-center group cursor-pointer

        md:flex-row md:justify-between md:gap-0

        lg:w-[1278] lg:h-[336]"
      >
        <div
          className="w-full overflow-hidden order-2

          md:w-[48%] md:order-1

          lg:w-auto"
        >
          <Image
            src="/Massion2.png"
            alt="massion image"
            width={515}
            height={336}
            className="w-full h-[240] object-cover transition-all duration-3000 group-hover:scale-150

            md:h-[280]

            lg:w-[515] lg:h-[336]"
          />
        </div>

        <div
          className="w-full h-auto flex flex-col gap-3 order-1

          md:w-[48%] md:order-2

          lg:w-[623] lg:h-[228]"
        >
          <h4>Our Vision</h4>

          <h2 className="text-3xl font-medium lg:text-4xl">Laser focus</h2>

          <p className="text-sm text-gray-500 lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
