import { HiArrowLongRight } from "react-icons/hi2";
export default function OurWork(){
    return(
        <>
            <section className="w-full md:w-[1280] h-auto md:h-[728] m-auto flex flex-col justify-center gap-8">

                <div className="flex max-md:flex-col max-md:gap-4 mt-10 justify-between ">

                    <h2 className="text-3xl md:text-5xl font-medium text-black">View our projects</h2>
                    <a className="text-base text-blue-700 md:flex items-center gap-2" href="#">View More 

                        <HiArrowLongRight className="text-[#590fd8] w-[24]  " /></a>
                </div>

                <div className="w-full flex max-md:flex-col gap-6">

                    <div className="w-[843] max-md:w-full h-[600] max-md:h-[300] bg-[url('/CardBd.png')] bg-cover">

                    </div>

                    <div className="flex flex-col gap-8 max-md:w-full">

                        <div className="w-[414] max-md:w-full h-[284] max-md:h-[200] bg-[url('/Card3.png')] bg-cover"></div>

                        <div className="w-[414] max-md:w-full h-[284] max-md:h-[200] bg-[url('/Card2.png')] bg-cover"></div>

                    </div>

                </div>

            </section>
        </>
    )
}