import React from "react";
import { EXPERIENCE } from "./constant";
import style from "./Experience.module.scss";

export default function ExperiencePage() {
  return (
    <div className={style.experiencePage}>
      <h1>Experience</h1>
      <div className={style.experience}>
        {EXPERIENCE.map((experience: any, index: number) => (
          <div className={style.experienceItem} key={index}>
            <div
              className={style.experienceItem_line}
              style={{
                height: 399,
              }}
            ></div>
            <div className={style.experience__item}>
              <h2>Frontend Developer</h2>
              <h3>ByteLearn</h3>
              <h4>2021 - Present</h4>
              <ul className={style.experience__item__list}>
                <li>
                  Developed a web application for a client using React and
                  TypeScript
                </li>
                <li>
                  Developed a web application for a client using React and
                  TypeScript
                </li>
                <li>
                  Developed a web application for a client using React and
                  TypeScript
                </li>
              </ul>
              <ul className={style.experience__skills}>
                <li>React</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
