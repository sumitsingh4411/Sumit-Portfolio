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
              <p className={style.home__container__about__body__description}>
                I am a frontend developer specializing in React. I have a
                passion for building web applications and learning new
                technologies. Currently I am working on technologies like React,
                Next.js, Typescript, Redux, etc.
              </p>
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
