import React from "react";
import style from "./Home.module.scss";
import TopSection from "./sections/topSection/TopSection";
import AboutSection from "./sections/aboutSection/AboutSection";
import Experience from "./sections/experienceSection/Experience";
import SkillSection from "./sections/skillSection/SkillSection";
import ProjectSection from "./sections/projects/ProjectSection";
import Contact from "./sections/contact/Contact";
import Footer from "../Footer/Footer";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <TopSection />
          <AboutSection />
          <Experience />
          <SkillSection />
          <ProjectSection />
          <Contact />
        </AnimationOnScroll>
        <Footer />
      </div>
    </div>
  );
}
