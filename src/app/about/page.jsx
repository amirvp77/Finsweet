import Benefits from "../../../ComponentsAbout/Benefits";
import HeroAbout from "../../../ComponentsAbout/HeroAbout";
import Mission from "../../../ComponentsAbout/Mission";
import Process from "../../../ComponentsAbout/Process";
import Section from "../../../ComponentsAbout/Section";
import Team from "../../../ComponentsAbout/Team";

export default function About(){
    return(
        <>
        <HeroAbout/>
        <Section/>
        <Process/>
        <Mission/>
        <Benefits/>
        <Team/>
        </>
    )
}