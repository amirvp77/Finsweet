import Image from "next/image";

export default function Mission() {
  return (
    <>
      <div className="w-full md:w-[1599] h-auto md:h-[1022] mt-10 md:mt-20 bg-[#EEF4FA] m-auto flex flex-col gap-14 md:gap-20 justify-center items-center px-6 md:px-0 py-10 md:py-0">
        <div className="w-full md:w-[1278] h-auto md:h-[336] flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 group cursor-pointer">
          <div className="w-full md:w-[623] h-auto md:h-[228] flex flex-col gap-3">
            <h4>Our Mission</h4>

            <h2 className="text-3xl md:text-4xl font-medium">Our Mission</h2>

            <p className="text-sm md:text-base text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="w-full md:w-auto overflow-hidden">
            <Image
              src="/s1.jpg"
              alt="massion image"
              width={515}
              height={336}
              className="w-full md:w-[515] h-[240] md:h-[336] object-cover transition-all duration-3000 group-hover:scale-150"
            />
          </div>
        </div>

        <div className="w-full md:w-[1278] h-auto md:h-[336] flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 group cursor-pointer">
          <div className="w-full md:w-auto overflow-hidden order-2 md:order-1">
            <Image
              src="/Massion2.png"
              alt="massion image"
              width={515}
              height={336}
              className="w-full md:w-[515] h-[240] md:h-[336] object-cover transition-all duration-3000 group-hover:scale-150"
            />
          </div>

          <div className="w-full md:w-[623] h-auto md:h-[228] flex flex-col gap-3 order-1 md:order-2">
            <h4>Our Vision</h4>

            <h2 className="text-3xl md:text-4xl font-medium">Laser focus</h2>

            <p className="text-sm md:text-base text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
