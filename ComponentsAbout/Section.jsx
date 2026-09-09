import Image from "next/image";

export default function Section() {
  return (
    <>
      <div className="w-full md:w-[1280] h-auto md:h-[716] bg-[#F4F5F5] m-auto mt-10 md:mt-20 flex flex-col justify-center transition-all duration-500 md:hover:shadow-xl/40">

        <div className="w-full md:w-[1280] h-auto md:h-[376] flex flex-col md:flex-row justify-center mt-0 md:mt-10 p-6 md:p-3 gap-10">
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <h4 className="text-base">Who we are</h4>

            <h3 className="text-3xl md:text-4xl font-bold">Goal focussed</h3>

            <p className="text-gray-500 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <br className="hidden md:block" />

            <h3 className="text-3xl md:text-4xl font-bold">
              Continuous improvement
            </h3>

            <p className="text-gray-500 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <Image
          src="/About2.jpg"
          alt="About2 image"
          width={1280}
          height={340}
          className="md:w-full p-2  h-[250] md:h-[340] object-cover"
        />
      </div>
    </>
  );
}
