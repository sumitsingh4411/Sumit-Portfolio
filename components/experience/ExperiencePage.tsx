import React from "react";
import { EXPERIENCE, IExperience } from "./constant";
import style from "./Experience.module.scss";

export default function ExperiencePage() {
  return (
    <div className={style.experiencePage}>
      <div className={style.experiencePage_container}>
        <h1>Experience</h1>
        <div className={style.experience}>
          {EXPERIENCE.map((experience: IExperience, index: number) => (
            <div className={style.experienceItem} key={index}>
              <div
                className={style.experienceItem_line}
                style={{
                  height: 399,
                }}
              ></div>
              <div className={style.experience__item}>
                <h2>{experience?.name}</h2>
                <h3>{experience?.company}</h3>
                <h4>{experience?._date}</h4>
                <ul className={style.experience__item__list}>
                  {experience?.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
                <ul className={style.experience__skills}>
                  {experience?.technologies.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
