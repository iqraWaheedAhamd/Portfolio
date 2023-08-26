import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Project from "./component/Project";
import About from "./component/About";
import Skill from "./component/Skill";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}
