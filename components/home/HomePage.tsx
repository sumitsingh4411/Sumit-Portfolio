import React from "react";
import style from "./Home.module.scss";
import Image from "next/image";
import github from "../../assets/github.svg";
import sumit from "../../public/sumit.jpg";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <div className={style.home__container__content}>
          <div className={style.home__container__content__body}>
            <p className={style.home_top_title}>Hi, my name is</p>
            <h1 className={style.home_tilte}>Sumit Kumar Singh.</h1>
            <h2 className={style.home_subtitle}>
              I am working as a front-end developer.
            </h2>
            <p className={style.home_description}>
              I am a frontend developer specializing in React. I have a passion
              for building web applications and learning new technologies.
              Currently I am working on technologies like React, Next.js,
              Typescript, Redux, etc.
            </p>

            <a
              href="https://github.com/sumitsingh4411?tab=repositories"
              target="_blank"
              className={style.home_button_github}
              rel="noreferrer"
            >
              <Image src={github} alt="github" width={20} height={20} />
              <p> Check All Projects</p>
            </a>
          </div>
        </div>
        <div id="about" className={style.home__container__container}>
          <div className={style.home__container__about}>
            <div className={style.home__container__about__header}>
              <h1 className={style.home__container__about__header__title}>
                About Me
              </h1>
              <div className={style.home__container__about__header__line}></div>
            </div>
            <div className={style.home__container__about__body}>
              <div className={style.home__container__about__body_left}>
                <p className={style.home_container_about_description}>
                  I am a frontend developer specializing in React. I have a
                  passion for building web applications and learning new
                  technologies. I have completed my B.Tech in Computer Science
                  and Engineering in 2021. In my college days, I have worked on
                  many{" "}
                  <a href="" className={style.link_text_style}>
                    projects
                  </a>{" "}
                  and also participated in many hackathons and competative
                  programming events.
                </p>
                <p className={style.home_container_about_description}>
                  In my last year of college, I joined a startup named{" "}
                  <a href="" className={style.link_text_style}>
                    Mapup
                  </a>{" "}
                  as a frontend developer intern for 6 months. After that, I
                  have joined a company named{" "}
                  <a href="" className={style.link_text_style}>
                    {" "}
                    ByteLearn
                  </a>{" "}
                  as a frontend developer intern. After 3 months of internship,
                  I have joined Sparsh Technologies as a full-time frontend
                  developer.
                </p>
                <p className={style.home_container_about_description}>
                  I have a great problem solving skills and I am always ready to
                  learn new technologies. I am a quick learner and I am always
                  ready to learn new things.
                </p>
                <div className={style.home_container_about_all_teachnology}>
                  Here are a few technologies I have been working with recently:
                  <div className={style.home_container_about_teachnology}>
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
              <div className={style.home__container__about__body__container}>
                <Image
                  src={sumit}
                  alt="sumit"
                  width={300}
                  height={300}
                  className={style.home__container__about__body__image}
                />
                <div
                  className={style.home__container__about__body__image__overlay}
                ></div>
                <div
                  className={
                    style.home__container__about__body__container__item
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div id="experience" className={style.home__container__container}>
          hello world
        </div>
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
