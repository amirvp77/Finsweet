
import Button from "../Svg/Button";

export default function Convert() {
    return (
        <>
            <section className="w-full  md:w-[1280] h-auto md:h-[691] m-auto flex max-md:flex-col">

                <div className="w-full md:w-[658] h-[691] bg-[url('/Card4.jpg')] bg-cover">

                    <div className="w-[464]  text-center max-md:w-full h-[334] m-auto mt-30 text-white">
                        <h2 className="text-5xl font-bold">
                            Building stellar <br /> websites for <br /> early startups
                        </h2>

                        <br /><br />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                        </p>
                    </div>

                </div>

                <div className="w-full md:w-[658] h-auto md:h-[691] bg-[#1C1E53] text-white p-16">

                    <h3 className="text-4xl font-bold">
                        Send inquiry
                    </h3>

                    <p className="text-gray-400 md:mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                    </p>

                    <form className="w-[432] max-md:w-full h-auto md:h-[224] flex flex-col gap-10 mt-10" action="">

                        <input
                            className="w-[432] max-md:w-full h-[64] border border-gray-300 rounded-2xl p-5"
                            type="text"
                            placeholder="Your Name"
                        />

                        <input
                            className="w-[432] max-md:w-full h-[64] border border-gray-300 rounded-2xl p-5"
                            type="email"
                            placeholder="email"
                        />

                        <input
                            className="w-[432] max-md:w-full h-[64] border border-gray-300 rounded-2xl p-5"
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
    )
}