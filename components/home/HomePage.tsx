import React from "react";
import style from "./Home.module.scss";
import TopSection from "./sections/topSection/TopSection";
import AboutSection from "./sections/aboutSection/AboutSection";
import Experience from "./sections/experienceSection/Experience";
import SkillSection from "./sections/skillSection/SkillSection";
import ProjectSection from "./sections/projects/ProjectSection";
import Contact from "./sections/contact/Contact";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <TopSection />
        <AboutSection />
        <Experience />
        <SkillSection />
        <ProjectSection />
        <Contact />
      </div>
    </div>
  );
}
