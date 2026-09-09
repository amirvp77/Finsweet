import Button from "../Svg/Button";

export default function Convert() {
  return (
    <>
      <section className="w-full md:w-[1280] h-auto md:h-[691] m-auto flex max-md:flex-col group cursor-pointer transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
        <div className="hidden md:block w-full md:w-[658] h-[400] md:h-[691] overflow-hidden relative bg-cover">
          <img
            src="/Card4.jpg"
            priority
            alt="Card image"
            width={1280}
            height={691}
            className="w-full h-full object-cover transition-transform duration-3000 group-hover:scale-150"
          />
          <div className="absolute inset-0 bg-[#1C1E536B]"></div>
          <div className="absolute inset-0 z-10 w-full md:w-[464] h-auto md:h-[334] px-6 md:px-0 m-auto mt-20 md:mt-30 text-white">
            <h2 className="text-3xl md:text-5xl font-bold">
              Building stellar <br />
              websites for <br />
              early startups
            </h2>

            <p className="mt-5 md:mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[658] h-auto md:h-[691] bg-[#1C1E53] text-white p-6 md:p-16">
          <h3 className="text-3xl md:text-4xl font-bold">Send inquiry</h3>

          <p className="text-gray-400 mt-4 md:mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <form
            className="w-full md:w-[432] h-auto md:h-[224] flex flex-col gap-6 md:gap-10 mt-8 md:mt-10"
            action=""
          >
            <input
              className="w-full md:w-[432] h-[56] md:h-[64] border border-gray-300 rounded-2xl p-5"
              type="text"
              placeholder="Your Name"
            />

            <input
              className="w-full md:w-[432] h-[56] md:h-[64] border border-gray-300 rounded-2xl p-5"
              type="email"
              placeholder="email"
            />

            <input
              className="w-full md:w-[432] h-[56] md:h-[64] border border-gray-300 rounded-2xl p-5"
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
    </>
  );
}
