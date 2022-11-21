import React from "react";
import style from "./Home.module.scss";
import TopSection from "./sections/topSection/TopSection";
import AboutSection from "./sections/aboutSection/AboutSection";
import Experience from "./sections/experienceSection/Experience";
import SkillSection from "./sections/skillSection/SkillSection";
import ProjectSection from "./sections/projects/ProjectSection";
import Contact from "./sections/contact/Contact";
import Footer from "../Footer/Footer";
import ExperienceMobile from "./sections/experienceSection/experienceMobile/ExperienceMobile";
import useWindowWidth from "../../common/hooks/useWindowWidth";
import { DEVICE_TYPE } from "../../common/constant";

export default function Home() {
  const windowWidth = useWindowWidth();
  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <TopSection />
        <AboutSection />
        {windowWidth > DEVICE_TYPE.MOBILE ? (
          <Experience />
        ) : (
          <ExperienceMobile />
        )}
        <SkillSection />
        <ProjectSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
