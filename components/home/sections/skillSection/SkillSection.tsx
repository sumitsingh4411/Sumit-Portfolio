import React from "react";
import { skillSection } from "./constant";
import style from "./SkillSection.module.scss";

export default function SkillSection() {
  return (
    <div id="skills" className={style.skillSection}>
      <div className={style.skillSection_container}>
        <div className={style.skillSection_container__header}>
          <h1 className={style.skillSection_container__header__title}>
            Skills
          </h1>
          <div className={style.skillSection_container__header__line}></div>
        </div>
        <div className={style.skillSection_container__body}>
          {skillSection?.map((skill, index) => (
            <svg
              viewBox="0 0 36 36"
              className={style.circular_chart}
              key={index}
            >
              <path
                className={style.circle_bg}
                d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={style.circle}
                strokeDasharray={skill.percentage + ", 100"}
                d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className={style.text}>
                {skill?.title}
              </text>
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
