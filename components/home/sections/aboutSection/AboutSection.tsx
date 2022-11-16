import Image from "next/image";
import React from "react";
import style from "./AboutSection.module.scss";
import sumit from "../../../../public/sumit.jpg";

export default function AboutSection() {
  return (
    <div id="about" className={style.aboutSection}>
      <div className={style.aboutSection_container}>
        <div className={style.aboutSection_header}>
          <h1 className={style.aboutSection_header__title}>About Me</h1>
          <div className={style.aboutSection_header__line}></div>
        </div>
        <div className={style.aboutSection_body}>
          <div className={style.aboutSection_body_left}>
            <p className={style.aboutSection_description}>
              I am a frontend developer specializing in React. I have a passion
              for building web applications and learning new technologies. I
              have completed my B.Tech in Computer Science and Engineering in
              2021. In my college days, I have worked on many{" "}
              <a href="" className={"hover_underline_animation"}>
                projects
              </a>{" "}
              and also participated in many hackathons and competative
              programming events.
            </p>
            <p className={style.aboutSection_description}>
              In my last year of college, I joined a startup named{" "}
              <a href="" className={"hover_underline_animation"}>
                Mapup
              </a>{" "}
              as a frontend developer intern for 6 months. After that, I have
              joined a company named{" "}
              <a href="" className={"hover_underline_animation"}>
                {" "}
                ByteLearn
              </a>{" "}
              as a frontend developer intern. After 3 months of internship, I
              have joined Sparsh Technologies as a full-time frontend developer.
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
                  <li>☞ React</li>
                  <li>☞ Next.js</li>
                  <li>☞ Typescript</li>
                  <li>☞ Redux</li>
                </ul>
                <ul>
                  <li>☞ JavaScript</li>
                  <li>☞ Scss</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.aboutSection_body__container}>
            <Image
              src={sumit}
              alt="sumit"
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
