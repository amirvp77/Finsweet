import MySwiper from "../Svg/Swiper";

export default function Testimonials() {
  return (
    <section className="w-full md:w-[1600] h-auto md:h-[506] flex flex-col md:flex-row justify-center gap-10 md:gap-50 items-center px-6 md:px-0 py-10 md:py-0">
      <div className="w-full md:w-[327] h-auto md:h-[184]">
        <h2 className="text-3xl md:text-4xl font-bold">
          What our clients <br /> say about us
        </h2>

        <br />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
      </div>

      <div className="w-full md:w-[843] h-[250]">
        <MySwiper />
      </div>
    </section>
  );
}
