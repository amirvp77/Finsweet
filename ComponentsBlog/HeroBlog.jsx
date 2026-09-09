import Image from "next/image";

export default function HeroBlog() {
  return (
    <>
      <div className="w-full md:w-[1280] h-auto md:h-[857] mt-10 md:mt-20 m-auto flex flex-col items-center justify-between gap-8 md:gap-0 px-6 md:px-0">
        <h3 className="text-3xl md:text-5xl text-center p-3">
          A UX Case Study on Creating a Studious Environment for Students
        </h3>

        <a href="#" className="text-sm md:text-base">
          Andrew Jonson
          <span className="font-bold">Posted on 27th January 2021</span>
        </a>

        <div className="w-full md:w-[1280] h-[250] md:h-[477] overflow-hidden group cursor-pointer transition-all duration-300 md:hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <Image
            priority
            src="/Blog.jpg"
            alt="About image"
            width={1280}
            height={477}
            className="w-full h-full object-cover transition-transform duration-3000 group-hover:scale-110"
          />
        </div>

        <p className="text-center text-sm md:text-base text-gray-500 w-full md:w-[831] h-auto md:h-[84]">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>

        <a className="text-[#2405F2]" href="#">
          Read more
        </a>
      </div>
    </>
  );
}
