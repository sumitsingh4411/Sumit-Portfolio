import React from "react";
import style from "./AboutSection.module.scss";
import HeaderLine from "../../../../common/component/headerLine/HeaderLine";
import Icons from "../../../../common/component/icons/Icons";
import {
  ABOUT_SKILLS_1,
  ABOUT_SKILLS_2,
  CONSTANT_URL,
} from "../../../../common/constant";

export default function AboutSection() {
  return (
    <div id="about" className={style.aboutSection}>
      <div className={`${style.aboutSection_container}`}>
        <HeaderLine title="About Me" />
        <div className={style.aboutSection_body}>
          <div className={style.aboutSection_body_left}>
            <p className={style.aboutSection_description}>
              I am a frontend developer specializing in React. I have a passion
              for building web applications and learning new technologies. I
              have completed my B.Tech in Computer Science and Engineering in
              2021. In my college days, I have worked on many{" "}
              <a
                href={CONSTANT_URL.GITHUB}
                className={"hover_underline_animation"}
                target="_blank"
                rel="noreferrer"
              >
                projects
              </a>{" "}
              and also participated in many hackathons and competative
              programming events.
            </p>
            <p className={style.aboutSection_description}>
              In my last year of college, I joined a startup named{" "}
              <a
                href={CONSTANT_URL.MAPUP}
                className={"hover_underline_animation"}
                target="_blank"
                rel="noreferrer"
              >
                Mapup
              </a>{" "}
              as a frontend developer intern for 6 months. After that, I have
              joined a company named{" "}
              <a
                href={CONSTANT_URL.BYTELEARN}
                className={"hover_underline_animation"}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                ByteLearn
              </a>{" "}
              as a frontend developer intern. After 3 months of internship, I
              have joined ByteLearn as a full-time frontend developer.
            </p>
            <p className={style.aboutSection_description}>
              I have a great problem solving skills and I am always ready to
              learn new technologies. I am a quick learner and I am always ready
              to learn new things.
            </p>
            <div className={style.aboutSection_all_teachnology}>
              Here are a few technologies I have been working with recently:
              <div className={style.aboutSection_teachnology}>
                <ul>
                  {ABOUT_SKILLS_1?.map((item, index) => (
                    <li key={index}>
                      <Icons name="point_right" width={20} height={20} />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul>
                  {ABOUT_SKILLS_2?.map((item, index) => (
                    <li key={index}>
                      <Icons name="point_right" width={20} height={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={style.aboutSection_body__container}>
            <Icons
              name="sumit"
              width={300}
              height={300}
              className={style.aboutSection_body__image}
            />
            <div className={style.aboutSection_body__image__overlay}></div>
            <div className={style.aboutSection_body__container__item}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
