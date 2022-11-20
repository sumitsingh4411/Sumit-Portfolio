import React from "react";
import style from "./Home.module.scss";
import TopSection from "./sections/topSection/TopSection";
import AboutSection from "./sections/aboutSection/AboutSection";
import Experience from "./sections/experienceSection/Experience";
import SkillSection from "./sections/skillSection/SkillSection";
import ProjectSection from "./sections/projects/ProjectSection";
import Contact from "./sections/contact/Contact";
import Footer from "../Footer/Footer";
import useWindowWidth from "../../common/useWindowWidth";
import ExperienceMobile from "./sections/experienceSection/experienceMobile/ExperienceMobile";

export default function Home() {
  const windowWidth = useWindowWidth();
  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <TopSection />
        <AboutSection />
        {windowWidth > 768 ? <Experience /> : <ExperienceMobile />}
        <SkillSection />
        <ProjectSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
