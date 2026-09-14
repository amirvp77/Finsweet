import Card1 from "../Svg/Card1";
import Card2 from "../Svg/Card2";
import Card3 from "../Svg/Card3";

export default function Blog() {
  return (
    <section
      className="w-full h-auto mt-20 m-auto px-6
      lg:w-[1280] lg:h-[737] lg:px-0"
    >
      <h2 className="text-3xl font-medium lg:text-4xl">Our blog</h2>
      <br />
      <div
        className="flex flex-col items-center gap-10 mb-10
        lg:flex-row lg:items-start lg:gap-0 lg:justify-between"
      >
        <Card3 />
        <Card2 />
        <Card1 />
      </div>
    </section>
  );
}
