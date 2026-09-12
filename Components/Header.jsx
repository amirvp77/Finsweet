import Link from "next/link";
import Finsweet from "../Svg/Finsweet";

export default function Header() {
  return (
    <header className="w-full h-[92] bg-[#1C1E53] relative z-50">
      <div className="flex items-center justify-between md:ml-15 md:justify-between py-6 px-7 text-white">
        <Finsweet />

        <label
          htmlFor="menu"
          className="md:hidden border border-white/30 rounded-full px-8 py-3 text-lg cursor-pointer"
        >
          Menu
        </label>

        <input type="checkbox" id="menu" className="peer hidden" />

        <nav className="absolute top-[92] right-0 w-[250] bg-[#1C1E53] border-2 border-[#5B4BFF] rounded-bl-4xl flex flex-col items-start gap-2 p-3 z-50 translate-x-[120%] peer-checked:translate-x-0 transition-transform duration-500 ease-in-out md:static md:w-auto md:border-0 md:rounded-none md:p-0 md:translate-x-0 md:flex-row md:items-center md:gap-15 md:bg-transparent">
          <Link
            href="/"
            className="w-full transition-all duration-300 border-b-2 border-transparent hover:border-amber-300 pb-1"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="w-full md:w-[72] transition-all duration-300 whitespace-nowrap border-b-2 border-transparent hover:border-amber-300 pb-1"
          >
            About us
          </Link>

          <Link
            href="/Features"
            className="w-full transition-all duration-300 border-b-2 border-transparent hover:border-amber-300 pb-1"
          >
            Features
          </Link>

          <Link
            href="/Pricing"
            className="w-full transition-all duration-300 border-b-2 border-transparent hover:border-amber-300 pb-1"
          >
            Pricing
          </Link>

          <Link
            href="/Pricing#faq"
            className="w-full transition-all duration-300 border-b-2 border-transparent hover:border-amber-300 pb-1"
          >
            FAQ
          </Link>

          <Link
            href="/Blog"
            className="w-full transition-all duration-300 border-b-2 border-transparent hover:border-amber-300 pb-1"
          >
            Blog
          </Link>

          <Link
            href="/Contact"
            className="w-full transition-all duration-300 hover:text-amber-300 md:hidden"
          >
            Contact Us
          </Link>

          <Link href="/Contact">
            <button className="hidden md:block cursor-pointer relative bg-white/10 py-2 rounded-full min-w-34 min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-[#FCD980] transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]">
              <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                <div className="w-[0%] group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>

                <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-[#FCD980] transition-all duration-1000 ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
                  <div className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-1000 ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      height="100%"
                      width="100%"
                    >
                      <path
                        fill="currentColor"
                        d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-1000 ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-white">
                Contacts
              </div>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
