import Image from "next/image";
import React, { useState } from "react";
import { PROJECTS } from "./constant";
import style from "./ProjectSection.module.scss";
import github from "../../../../assets/github.svg";
import live from "../../../../assets/external.svg";
import folder from "../../../../assets/folder.svg";
import { useRouter } from "next/router";
import {
  selectGithubData,
} from "../../../../redux/slices/githubDataSlice";
import { useDispatch, useSelector } from "react-redux";
import HeaderLine from "../../../../common/component/headerLine/HeaderLine";

export default function ProjectSection() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { customProjects } = useSelector(selectGithubData);
  const [showMore, setShowMore] = useState(false);
  const showData = () => {
    setShowMore(!showMore);
  };
  const showAllProjects = () => {
    router.push("/projects");
  };

  return (
    <div id="projects" className={style.projectSection}>
      <div className={style.projectSection_container}>
        <HeaderLine title="Projects" />
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
        <div className={style.projectSection_container__footer}>
          <div
            className={style.projectSection_container__footer__}
            style={{
              textAlign: "center",
            }}
          >
            <h2 className={style.projectSection_container__footer__title}>
              You can like this project also
            </h2>
            `
            <p
              className={`${style.projectSection_container__footer__list} hover_underline_animation`}
              style={{
                cursor: "pointer",
                marginTop: "8px",
              }}
              onClick={showAllProjects}
            >
              Show all projects in list view
            </p>
          </div>
          <div className={style.projectSection_container__footer__links}>
            {customProjects &&
              customProjects
                ?.slice(0, showMore ? customProjects?.length : 6)
                ?.map((project: any, index: number) => (
                  <div
                    className={style.projectSection_container__body__project}
                    key={index}
                  >
                    <div
                      className={
                        style.projectSection_container__body__project__top
                      }
                    >
                      <Image
                        src={folder}
                        alt="project"
                        width={36}
                        height={36}
                        style={{ borderRadius: "4px" }}
                      />

                      <div
                        className={
                          style.projectSection_container__body__project__right
                        }
                      >
                        <Image
                          src={github}
                          alt="github"
                          width={24}
                          height={24}
                          className={style.project_link}
                          onClick={() => window.open(project.html_url)}
                        />
                        {project?.homepage && (
                          <Image
                            src={live}
                            alt="live"
                            width={22}
                            height={22}
                            className={style.project_link}
                            onClick={() =>
                              window.open(project?.homepage, "_blank")
                            }
                          />
                        )}
                      </div>
                    </div>
                    <div
                      className={
                        style.projectSection_container__body__project__middle
                      }
                    >
                      <h1 className={style.project_title}>{project?.name}</h1>
                      <p className={style.project_description}>
                        {project?.description}
                      </p>
                    </div>
                    <div
                      className={
                        style.projectSection_container__body__project__bottom
                      }
                    >
                      <div className={style.project_teachnology_used}>
                        {project?.topics?.map((topic: any, index: number) => (
                          <p key={index}>{topic}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          <button
            className={style.projectSection_container__footer__button}
            onClick={showData}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
}
