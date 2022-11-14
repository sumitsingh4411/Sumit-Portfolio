import React from "react";
import style from "./Experience.module.scss";

export default function Experience() {
  return (
    <div id="experience" className={style.experienceSection}>
      <div className={style.experienceSection_container}>
        <div className={style.experienceSection_container__header}>
          <h1 className={style.experienceSection_container__header__title}>
            Experience
          </h1>
          <div className={style.aboutSection_header__line}>
            
          </div>
        </div>
        <div className={style.experienceSection_container__body}></div>
      </div>
    </div>
  );
}
