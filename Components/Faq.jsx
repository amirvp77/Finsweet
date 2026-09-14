import Accordion from "../Svg/Accordion ";

export default function Faq() {
  return (
    <section
      id="faq"
      className="w-full h-auto m-auto flex flex-col justify-between gap-10 px-6 py-10
      md:flex-row md:px-10 md:gap-10
      lg:w-[1283.309814453125] lg:h-[537] lg:px-0 lg:py-0"
    >
      <div
        className="w-full h-auto mt-0
        md:w-[280] md:mt-10
        lg:w-[328] lg:h-[160] lg:mt-20"
      >
        <h2 className="text-3xl font-bold lg:text-4xl">
          Frequently <br /> asked questions
        </h2>

        <br />

        <a className="text-base text-blue-700" href="#">
          Contact us for more info
        </a>
      </div>

      <div
        className="w-full h-auto mt-0
        md:w-[500]
        lg:w-[846] lg:h-[530] lg:mt-20"
      >
        <Accordion />
      </div>
    </section>
  );
}
