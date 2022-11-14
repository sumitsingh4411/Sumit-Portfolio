import React from "react";
import style from "./ProjectSection.module.scss";

export default function ProjectSection() {
  return (
    <div id="projects" className={style.projectSection}>
      <div className={style.projectSection_container}>
        <div className={style.projectSection_container__header}>
          <h1 className={style.projectSection_container__header__title}>
            Projects
          </h1>
          <div className={style.projectSection_container__header__line}></div>
        </div>
        <div className={style.projectSection_container__body}></div>
      </div>
    </div>
  );
}
