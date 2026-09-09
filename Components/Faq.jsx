import Accordion from "../Svg/Accordion ";

export default function Faq() {
  return (
    <>
      <section
        id="faq"
        className="w-full md:w-[1283.309814453125] h-auto md:h-[537] m-auto gap-10 flex max-md:flex-col justify-between px-6 md:px-0 py-10 md:py-0"
      >
        <div className="w-full md:w-[328] h-auto md:h-[160] mt-0 md:mt-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently <br /> asked questions
          </h2>

          <br />

          <a className="text-base text-blue-700" href="#">
            Contact us for more info
          </a>
        </div>

        <div className="w-full md:w-[846] h-auto md:h-[530] mt-0 md:mt-20">
          <Accordion />
        </div>
      </section>
    </>
  );
}
