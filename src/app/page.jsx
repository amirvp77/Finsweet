import Image from "next/image";
import Hero from "../../Components/Hero";
import Section from "../../Components/Section";
import Features from "../../Components/Features";
import OurWork from "../../Components/OurWork";
import Faq from "../../Components/Faq";
import Convert from "../../Components/Convert";
import Blog from "../../Components/Blog";
import Testimonials from "../../Components/Testimonials";

export default function Home() {
  return (
    <div >
       
      <Hero/>
      <Section/>
      <OurWork />
      <Features/>
      <Testimonials/>
      <Faq/>
      <Convert/>
      <Blog/>

      

    </div>
  )
}
