import React, { useEffect } from "react";
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
  useEffect(() => {
    (() => {
      if (typeof window !== "undefined") {
        (window as any).hj("identify",'sks', {
          'name': "Sumit Kumar Singh",
          'email': "sumit@gmail.com",
          'address': "Bangalore",
          'phone': "1234567890",
          'company': "Google",
          'role': "Software Engineer",
          'experience': "5 years",
        });
      }
    })();
  }, []);
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
