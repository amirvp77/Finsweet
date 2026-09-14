export default function Process() {
  return (
    <div
      className="w-full h-auto mt-10 m-auto px-6

      md:mt-20 md:px-10

      lg:w-[1280] lg:h-[268] lg:px-0"
    >
      <h1
        className="text-3xl text-center mb-10 p-4 font-bold

        md:text-5xl"
      >
        The process we follow
      </h1>

      <div
        className="w-full h-auto grid grid-cols-2 gap-8

        md:grid-cols-4 md:gap-6

        lg:w-[1280] lg:h-[156] lg:flex lg:justify-center lg:gap-4"
      >
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-full flex flex-col gap-3

            lg:w-[272] lg:h-[156]"
          >
            <div
              className="w-full h-[24] flex items-center gap-2

              lg:w-[272]"
            >
              <div className="size-5 shrink-0 bg-[#2405F2] rounded-full"></div>

              <div className="w-full border-b-[2] border-dashed border-[#2405F2]"></div>
            </div>

            <h2
              className="text-sm font-bold

              md:text-xl

              lg:text-2xl"
            >
              Development
            </h2>

            <p
              className="text-sm

              md:text-base

              lg:w-[272]"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
