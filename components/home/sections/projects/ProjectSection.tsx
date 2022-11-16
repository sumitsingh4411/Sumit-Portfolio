import Image from "next/image";
import React from "react";
import { PROJECTS } from "./constant";
import style from "./ProjectSection.module.scss";
import github from "../../../../assets/github.svg";
import live from "../../../../assets/external.svg";

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
                  style={{ borderRadius: "4px" }}
                />
                <div
                  className={
                    style.projectSection_container_body__image__overlay
                  }
                ></div>
              </div>
              <div
                className={style.projectSection_container__body__project__right}
              >
                <p className={style.project_featured}>Featured Project</p>
                <h2 className={style.project_title}>{project.title}</h2>
                <div className={style.project_description}>
                  <p>{project?.description}</p>
                </div>
                <p className={style.project_teachnology_used}>
                  {project?.technologies?.map((technology, index) => (
                    <span key={index}>{technology}</span>
                  ))}
                </p>
                <div className={style.project_links}>
                  <Image
                    src={github}
                    alt="github"
                    width={24}
                    height={24}
                    className={style.project_link}
                    onClick={() => window.open(project.github_url)}
                  />
                  <Image
                    src={live}
                    alt="live"
                    width={22}
                    height={22}
                    className={style.project_link}
                    onClick={() => window.open(project.live_url)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
