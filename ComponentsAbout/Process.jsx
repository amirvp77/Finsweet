import Image from "next/image";

export default function Section() {
  return (
    <div
      className="w-full h-auto bg-[#F4F5F5] m-auto mt-10 flex flex-col justify-center transition-all duration-500 px-6 py-10

      md:mt-20 md:px-10 md:py-0

      lg:w-[1280] lg:h-[716] lg:px-0 lg:hover:shadow-xl/40"
    >
      <div
        className="w-full h-auto flex flex-col gap-10

        md:flex-row md:justify-center md:gap-10

        lg:w-[1280] lg:h-[376] lg:mt-10 lg:p-3 lg:gap-10"
      >
        <div
          className="flex flex-col gap-4 w-full

          md:w-1/2

          lg:w-[590]"
        >
          <h4 className="text-base">Who we are</h4>

          <h3 className="text-3xl font-bold lg:text-4xl">Goal focussed</h3>

          <p className="text-gray-500 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div
          className="flex flex-col gap-4 w-full

          md:w-1/2

          lg:w-[590]"
        >
          <br className="hidden lg:block" />

          <h3 className="text-3xl font-bold lg:text-4xl">
            Continuous improvement
          </h3>

          <p className="text-gray-500 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <Image
        src="/about2.jpg"
        alt="About2 image"
        width={1280}
        height={340}
        className="w-full p-2 h-[250] object-cover

        md:h-[300]

        lg:h-[340]"
      />
    </div>
  );
}
