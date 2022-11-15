import Image from "next/image";
import React from "react";
import { PROJECTS } from "./constant";
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
        <div className={style.projectSection_container__body}>
          {PROJECTS.map((project, index) => (
            <div
              className={style.projectSection_container__body__project}
              key={index}
            >
              <div
                className={style.projectSection_container__body__project__left}
              >
                <Image
                  src={project.image_url}
                  alt="project"
                  width={600}
                  height={350}
                />
              </div>
              <div
                className={style.projectSection_container__body__project__right}
              >
                <p className={style.project_featured}>Featured Project</p>
                <h1 className={style.project_title}>{project.title}</h1>
                <div className={style.project_description}>
                  <p>{project?.description}</p>
                </div>
                <p>
                  {project?.technologies?.map((technology, index) => (
                    <span key={index}>{technology}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
