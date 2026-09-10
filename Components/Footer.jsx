import IconMedia from "./IconMedia";
import Link from "next/link";

export default function Footer() {
    return (
      <>
        <section className="w-full h-auto md:h-[489] bg-[#1C1E53] flex flex-col">
          <div className="grow flex flex-col justify-center items-center mr-0 md:mr-116">
            <div className="w-full md:w-[1058] h-auto md:h-[206] flex max-md:flex-col gap-10 md:gap-30 p-7">
              <div className="">
                <h1 className="text-2xl font-bold text-white">Finsweet</h1>

                <br />

                <p className="text-base text-gray-400">
                  We are always open to discuss your project and improve your
                  online presence.
                </p>
              </div>

              <div className="">
                <h1 className="text-5xl font-bold text-white">Lets Talk!</h1>

                <br />

                <p className="text-base text-gray-400">
                  We are always open to discuss your project, improve your
                  online presence and help with your UX/UI design challenges.
                </p>

                <IconMedia />
              </div>
            </div>
          </div>

          <div className="w-[517] max-md:w-full h-[95] max-md:h-auto bg-amber-200 flex justify-center md:flex max-md:flex-col md:items-center md:justify-center gap-6 text-base">
            <div >
              <h3 className="text-black font-bold">Call us</h3>

              <p className="text-gray-600">0927 6277 28525</p>
            </div>

            <div >
              <h3 className="text-black font-bold">Email me at</h3>

              <p className="text-gray-600">contact@website.com</p>
            </div>
          </div>
        </section>

        <div className="text-black h-auto md:h-[92] flex max-md:flex-col justify-between items-center gap-5 p-6">
          <p className="font-bold">Copyright 2022, Finsweet.com</p>

          <nav className="hidden md:flex gap-3 list-none">
            <Link
              className="transition-all duration-300 border-b-2 border-transparent hover:border-amber-300 pb-1"
              href="/"
            >
              Home
            </Link>
            <Link
              className="transition-all duration-300 border-b-2 border-transparent hover:border-amber-300 pb-1"
              href="/about"
            >
              About us
            </Link>
            <Link
              className="transition-all duration-300 border-b-2 border-transparent hover:border-amber-300 pb-1"
              href="/Features"
            >
              Features
            </Link>
            <Link
              className="transition-all duration-300 border-b-2 border-transparent hover:border-amber-300 pb-1"
              href="/Pricing"
            >
              Pricing
            </Link>
            <Link
              className="transition-all duration-300 border-b-2 border-transparent hover:border-amber-300 pb-1"
              href="/FAQ"
            >
              FAQ
            </Link>
            <Link
              className="transition-all duration-300 border-b-2 border-transparent hover:border-amber-300 pb-1"
              href="/Blog"
            >
              Blog
            </Link>
          </nav>
        </div>
      </>
    );
}