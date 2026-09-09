import { AiFillCaretRight } from "react-icons/ai";

export default function PricingCard() {
  return (
    <>
      <div className="w-full mt-10 h-auto md:h-[745] flex flex-col md:flex-row justify-center gap-6 md:gap-10 px-6 md:px-0">
        <div className="w-full md:w-[406] h-auto md:h-[745] rounded-2xl flex flex-col bg-[#F4F6FC] items-start justify-center gap-8 md:gap-10 p-8 md:p-0 duration-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
          <div className="flex gap-3 items-center ml-0 md:ml-20">
            <h2 className="text-3xl md:text-4xl font-bold">$299</h2>
            <a className="text-blue-800" href="#">
              Per Design
            </a>
          </div>

          <h3 className="ml-0 md:ml-20">Landing Page</h3>

          <p className="text-gray-400 ml-0 md:ml-20">
            When you’re ready to go beyond <br className="hidden md:block" />
            prototyping in Figma,
          </p>

          <div className="w-full md:w-[217] h-auto md:h-[220] flex flex-col gap-4 ml-0 md:ml-20">
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-green-500 text-2xl" />
              All limited links
            </h4>
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-green-500 text-2xl" />
              Own analytics platform
            </h4>
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-green-500 text-2xl" />
              Chat support
            </h4>
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-red-500 text-2xl" />
              Optimize hashtags
            </h4>
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-red-500 text-2xl" />
              Unlimited users
            </h4>
          </div>

          <button className="relative ml-0 md:ml-30 flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>

            <span className="absolute bottom-0 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded rotate-180 group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>

            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>

            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Get Started
            </span>
          </button>
        </div>

        <div className="w-full md:w-[406] h-auto md:h-[745] rounded-2xl flex flex-col bg-[#1C1E53] justify-center items-start gap-8 md:gap-10 p-8 md:p-0 duration-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
          <div className="flex gap-3 items-center ml-0 md:ml-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white">$399</h2>
            <a className="text-amber-300" href="#">
              Multi Design
            </a>
          </div>

          <h3 className="text-white ml-0 md:ml-20">Website Page</h3>

          <p className="text-gray-400 ml-0 md:ml-20">
            When you’re ready to go beyond prototyping in Figma, Webflow’s ready{" "}
            <br className="hidden md:block" /> to help.
          </p>

          <div className="w-full md:w-[217] h-auto md:h-[220] text-white flex flex-col gap-4 ml-0 md:ml-20">
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-green-500 text-2xl" />
              All limited links
            </h4>
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-green-500 text-2xl" />
              Own analytics platform
            </h4>
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-green-500 text-2xl" />
              Chat support
            </h4>
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-gray-500 text-2xl" />
              Optimize hashtags
            </h4>
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-gray-500 text-2xl" />
              Unlimited users
            </h4>
          </div>

          <button className="relative ml-0 md:ml-30 flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#FCD980] rounded-md group">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#e8c56f] rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>

            <span className="absolute bottom-0 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#e8c56f] rounded rotate-180 group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>

            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#e8c56f] rounded-md group-hover:translate-x-0"></span>

            <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out">
              Get Started
            </span>
          </button>
        </div>

        <div className="w-full md:w-[406] h-auto md:h-[745] rounded-2xl flex flex-col bg-[#F4F6FC] justify-center items-start gap-8 md:gap-10 p-8 md:p-0 duration-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
          <div className="flex gap-3 items-center ml-0 md:ml-20">
            <h2 className="text-3xl md:text-4xl font-bold">$499+</h2>
            <a className="text-blue-800" href="#">
              Per Design
            </a>
          </div>

          <h3 className="ml-0 md:ml-20">Landing Page</h3>

          <p className="text-gray-400 ml-0 md:ml-20">
            When you’re ready to go beyond <br className="hidden md:block" />
            prototyping in Figma,
          </p>

          <div className="w-full md:w-[217] h-auto md:h-[220] flex flex-col gap-4 ml-0 md:ml-20">
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-green-500 text-2xl" />
              All limited links
            </h4>
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-green-500 text-2xl" />
              Own analytics platform
            </h4>
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-green-500 text-2xl" />
              Chat support
            </h4>
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-green-500 text-2xl" />
              Optimize hashtags
            </h4>
            <h4 className="flex items-center">
              <AiFillCaretRight className="text-green-500 text-2xl" />
              Unlimited users
            </h4>
          </div>

          <button className="relative ml-0 md:ml-30 flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>

            <span className="absolute bottom-0 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded rotate-180 group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>

            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>

            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Get Started
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
