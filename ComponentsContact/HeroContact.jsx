export default function HeroContact() {
  return (
    <>
      <div className="flex justify-center items-center h-[100]">
        <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
        <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
        <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
      </div>

      <div className="w-full md:w-[562] h-auto md:h-[136] m-auto text-center px-6 md:px-0 mt-10 md:mt-0">
        <h2 className="font-bold text-3xl md:text-5xl">Contact Us</h2>

        <br />

        <p className="text-gray-500 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
    </>
  );
}
