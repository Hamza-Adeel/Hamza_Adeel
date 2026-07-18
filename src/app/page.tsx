import About from "@/components/about";
import ContactForm from "@/components/contact";
import HeroSection from "@/components/hero";
import HorizontalSkill from "@/components/horizontal-skill";
import Projects from "@/components/project";
// import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <About/>
      {/* <Skills/> */}
      <HorizontalSkill/>
      <Projects/>
      <ContactForm/>
    </div>
  );
}
