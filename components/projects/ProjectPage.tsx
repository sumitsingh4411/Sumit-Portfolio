import Image from "next/image";
import React, { useState } from "react";
import style from "./Project.module.scss";
import star from "../../assets/star.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getProjectUrl } from "../../common/helpers";

export default function ProjectPage({ data }: any) {
  const [currentPage, setCurrentPage] = useState(2);
  const [projects, setProjects] = useState([]);

  const goToNextPage = async () => {
    const res = await fetch(
      "https://api.github.com/users/sumitsingh4411/repos?page=" + currentPage
    );
    const data = await res.json();
    data.sort((a: any, b: any) => {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });
    setCurrentPage(1);
    setProjects(data);
  };

  return (
    <div className={style.project_page}>
      <div className={style.project_page__header}>
        <h1 className={style.project_main_title}>My Project</h1>
        <div className={style.project_page__header__info}>
          <p>
            Projects :{" "}
            <span>{(currentPage !== 1 ? data : projects)?.length}</span>
          </p>
          <button
            className={style.project_page__header__go_to_next_page__btn}
            onClick={goToNextPage}
          >
            {currentPage !== 1 ? "Go to next page" : "Go to previous page"}
          </button>
        </div>
      </div>
      <div className={style.project_page__container_main}>
        {(currentPage !== 1 ? data : projects)?.map((project: any) => (
          <div className={style.project_page__container} key={project?.id}>
            <div className={style.project_page__container__top}>
              <div className={style.project_page__container__details}>
                <p className={style.project_name}>
                  Name : <span>{project?.name?.toUpperCase()}</span>
                </p>
                <p className={style.project_subtitle}>{project?.description}</p>
                <p className={style.project_subtitle}>
                  CREATED AT : {new Date(project?.created_at).toDateString()}
                </p>
                <p className={style.project_subtitle}>
                  UPDATED AT : {new Date(project?.updated_at).toDateString()}
                </p>
                <div className={style.stars_count}>
                  <Image src={star} alt="*" width={20} height={20} />
                  <span className={style.project_stars}>
                    {" : "}
                    {project?.stargazers_count}
                  </span>
                </div>
                <p className={style.project_subtitle}>
                  TECHNOLOY USED :{" "}
                  {project?.topics && (
                    <ol className={style.project_list_technology}>
                      {project?.topics?.map((item: any, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ol>
                  )}
                </p>
              </div>
              <div className={style.project_page__container__image}>
                <Carousel autoPlay={true}>
                  {getProjectUrl(project?.id)?.map(
                    (image: any, index: number) => (
                      <Image
                        src={image}
                        key={index}
                        height={230}
                        width={400}
                        alt={index + "image"}
                        className={style.project_page__container__image__img}
                      />
                    )
                  )}
                </Carousel>
              </div>
            </div>
            <div className={style.project_page__container_bottom}>
              <span
                className={style.custom_btn}
                onClick={() => {
                  window.open(project?.html_url);
                }}
              >
                View Details
              </span>
              <span
                className={style.custom_btn}
                onClick={() => {
                  window.open(project?.homepage);
                }}
              >
                Copy Clone Url
              </span>
              <span
                className={style.custom_btn}
                onClick={() => {
                  window.open(project?.homepage);
                }}
              >
                Live Demo
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
