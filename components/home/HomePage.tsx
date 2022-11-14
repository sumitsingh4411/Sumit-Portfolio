import React from "react";
import style from "./Home.module.scss";
import TopSection from "./sections/topSection/TopSection";
import AboutSection from "./sections/aboutSection/AboutSection";
import Experience from "./sections/experienceSection/Experience";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <TopSection />
        <AboutSection />
        <Experience />
        <div id="skills" className={style.home__container__container}>
          hello world
        </div>
        <div id="projects" className={style.home__container__container}>
          hello world
        </div>
        <div id="cv" className={style.home__container__container}>
          hello world
        </div>
        <div id="contact" className={style.home__container__container}>
          hello world
        </div>
      </div>
    </div>
  );
}
