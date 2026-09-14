import Button from "../Svg/Button";

export default function Convert() {
  return (
    <section
      className="w-full h-auto m-auto flex flex-col group cursor-pointer transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
      md:flex-row md:px-6
      lg:w-[1280] lg:h-[691] lg:px-0"
    >
      <div
        className="hidden md:block w-full h-[650] overflow-hidden relative bg-cover

        md:w-1/2

        lg:w-[658] lg:h-[691]"
      >
        <img
          src="/Card4.jpg"
          priority
          alt="Card image"
          width={1280}
          height={691}
          className="w-full h-full object-cover transition-transform duration-3000 group-hover:scale-150"
        />

        <div className="absolute inset-0 bg-[#1C1E536B]"></div>

        <div
          className="absolute inset-0 z-10 w-full h-auto px-6 m-auto mt-20 text-white

          lg:w-[464] lg:h-[334] lg:px-0 lg:mt-30"
        >
          <h2 className="text-3xl font-bold lg:text-5xl">
            Building stellar <br />
            websites for <br />
            early startups
          </h2>

          <p className="mt-5 lg:mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
      </div>

      <div
        className="w-full h-auto bg-[#1C1E53] text-white p-6

        md:w-1/2 md:h-[650] md:p-10

        lg:w-[658] lg:h-[691] lg:p-16"
      >
        <h3 className="text-3xl font-bold lg:text-4xl">Send inquiry</h3>

        <p className="text-gray-400 mt-4 lg:mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>

        <form
          className="w-full h-auto flex flex-col gap-6 mt-8

          lg:w-[432] lg:h-[224] lg:gap-10 lg:mt-10"
          action=""
        >
          <input
            className="w-full h-[56] border border-gray-300 rounded-2xl p-5 lg:h-[64]"
            type="text"
            placeholder="Your Name"
          />

          <input
            className="w-full h-[56] border border-gray-300 rounded-2xl p-5 lg:h-[64]"
            type="email"
            placeholder="email"
          />

          <input
            className="w-full h-[56] border border-gray-300 rounded-2xl p-5 lg:h-[64]"
            type="url"
            placeholder="Paste your Figma design URL"
          />

          <Button />

          <a className="text-center" href="">
            Get in touch with us
          </a>
        </form>
      </div>
    </section>
  );
}
