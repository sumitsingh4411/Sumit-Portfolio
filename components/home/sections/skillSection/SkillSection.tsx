import React from "react";
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
        <div className={style.skillSection_container__body}></div>
      </div>
    </div>
  );
}
