import MySwiper from "../Svg/Swiper";

export default function Testimonials() {
  return (
    <section
      className="w-full h-auto flex flex-col justify-center gap-10 px-6 py-10
      md:flex-row md:items-start md:gap-12 md:px-10
      lg:w-[1600] lg:h-[506] lg:items-center lg:gap-50 lg:px-0 lg:py-0"
    >
      <div
        className="w-full h-auto
        md:w-[300] md:pt-5
        lg:w-[327] lg:h-[184] lg:pt-0"
      >
        <h2 className="text-3xl font-bold lg:text-4xl">
          What our clients <br /> say about us
        </h2>

        <br />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
      </div>

      <div
        className="w-full h-[250]
        md:w-[600]
        lg:w-[843]"
      >
        <MySwiper />
      </div>
    </section>
  );
}
