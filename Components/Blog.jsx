import Card1 from "../Svg/Card1";
import Card2 from "../Svg/Card2";
import Card3 from "../Svg/Card3";

export default function Blog(){
    return(
        <>
            <section className="w-full md:w-[1280] h-auto md:h-[737] mt-20 m-auto">
                 <h2 className=" text-4xl font-medium">Our blog</h2>
                 <br />

                <div className="flex max-md:flex-col justify-between ">
                    <Card3  />
                    <Card2 />
                    <Card1/>
                </div>

            </section>
        </>
    )
}