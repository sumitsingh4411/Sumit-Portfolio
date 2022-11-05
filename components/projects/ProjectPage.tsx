import Image from "next/image";
import React, { useEffect } from "react";
import style from "./Project.module.scss";
import github from "../../assets/github.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { PROJECTS } from "./constant";
import axios from "axios";

export default function ProjectPage({ data }: any) {
  console.log(data);
  return (
    <div className={style.project_page}>
      <div className={style.project_page__container_main}>
        {data?.map((project: any) => (
          <div className={style.project_page__container} key={project?.id}>
            <h1 className={style.project_name}>
              {project?.name?.toUpperCase()}
            </h1>
            <div className={style.project_page__container__image}>
              <Carousel autoPlay={true}>
                {project?.imageUrl?.map((image: any, index: number) => (
                  <Image
                    src={image}
                    key={index}
                    width={300}
                    height={220}
                    alt={index + "image"}
                  />
                ))}
              </Carousel>
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
                Live Demo
              </span>
              {/* {project?.updated_at && (
                <span className={style.custom_btn}>
                  {new Date(project?.created_at)?.toLocaleDateString()}
                </span>
              )}
              <span className={style.custom_btn}>
                {new Date(project?.updated_at)?.toLocaleDateString()}
              </span>
              <span className={style.custom_btn}>
                <a href={project?.downloads_url} download>
                  download
                </a>
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
