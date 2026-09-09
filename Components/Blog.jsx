import Card1 from "../Svg/Card1";
import Card2 from "../Svg/Card2";
import Card3 from "../Svg/Card3";

export default function Blog() {
  return (
    <>
      <section className="w-full md:w-[1280] h-auto md:h-[737] mt-20 m-auto px-6 md:px-0">
        <h2 className="text-3xl md:text-4xl font-medium">Our blog</h2>
        <br />

        <div className="flex mb-10 flex-col md:flex-row gap-10 md:gap-0 justify-between">
          <Card3 />
          <Card2 />
          <Card1 />
        </div>
      </section>
    </>
  );
}
