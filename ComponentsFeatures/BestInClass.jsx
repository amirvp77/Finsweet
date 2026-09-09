import Image from "next/image";

export default function BestInClass() {
  return (
    <>
      <div className="w-full md:w-[1280] h-auto md:h-[398] mt-10 md:mt-20 m-auto flex flex-col md:flex-row justify-between group cursor-pointer items-center gap-10 md:gap-0 px-6 md:px-0">
        <div className="w-full md:w-[624] h-auto md:h-[316] flex flex-col justify-center gap-6 md:gap-10">
          <h3 className="text-base md:text-lg font-bold">Use Client-first</h3>

          <h2 className="text-3xl md:text-4xl font-bold">
            Top agencies and freelancers <br className="hidden md:block" />
            around the world use <br className="hidden md:block" />
            Client-first
          </h2>

          <p className="text-sm md:text-base text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div className="w-full md:w-auto overflow-hidden">
          <Image
            src="/Class.png"
            alt="About image"
            width={575}
            height={398}
            className="w-full md:w-[575] h-[280] md:h-[398] object-cover transition-all duration-3000 group-hover:scale-150"
          />
        </div>
      </div>
    </>
  );
}
