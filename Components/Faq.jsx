import Accordion from "../Svg/Accordion ";

export default function Faq() {
    return (
        <>
            <section className="w-full md:w-[1283.309814453125] h-auto md:h-[537] m-auto gap-10 flex max-md:flex-col justify-between">

                <div className="w-full md:w-[328] h-[160] mt-10 md:mt-20">
                    <h2 className="text-3xl font-medium">
                        Frequently <br /> asked questions
                    </h2>

                    <br />

                    <a className="text-base text-blue-700" href="#">
                        Contact us for more info
                    </a>
                </div>

                <div className="w-full md:w-[846] h-auto md:h-[530] mt-10 md:mt-20">
                    <Accordion />
                </div>

            </section>
        </>
    )
}