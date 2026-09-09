import Image from "next/image";

export default function Support() {
  return (
    <>
      <div className="w-full md:w-[1599] h-auto md:h-[654] flex group cursor-pointer px-6 md:px-0 py-10 md:py-0">
        <div className="w-full md:w-[1279] h-auto md:h-[398] m-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40">
          <div className="w-full md:w-[624] h-auto md:h-[260] flex flex-col justify-center gap-6 md:gap-10">
            <h3 className="text-base md:text-lg font-bold">24/7 Support</h3>

            <h2 className="text-3xl md:text-4xl font-bold">
              Working with us, you will be getting 24/7 priority support
            </h2>

            <p className="text-sm md:text-base text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <div className="w-full md:w-auto overflow-hidden">
            <Image
              priority
              src="/Support.png"
              alt="About image"
              width={575}
              height={398}
              className="w-full md:w-[575] h-[280] md:h-[398] object-cover transition-all duration-3000 group-hover:scale-150"
            />
          </div>
        </div>
      </div>
    </>
  );
}
