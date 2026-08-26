import MySwiper from "../Svg/Swiper";

export default function Testimonials() {
    return (
        <section className="hidden md:flex w-full md:w-[1600] h-auto md:h-[506] justify-center md:gap-50 items-center">


            <div className="w-full md:w-[327] h-[184]">
                <h2 className="text-4xl font-medium">
                    What our clients <br /> say about us
                </h2>

                <br />

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                </p>
            </div>

            <div className="w-full md:w-[843] h-[250]">
                <MySwiper />
            </div>

        </section>
    );
}