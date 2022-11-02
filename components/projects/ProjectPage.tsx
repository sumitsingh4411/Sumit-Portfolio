import Image from "next/image";
import React, { useEffect } from "react";
import style from "./Project.module.scss";
import github from "../../assets/github.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { PROJECTS } from "./constant";

export default function ProjectPage() {
  return (
    <div className={style.project_page}>
      {PROJECTS.map((project: any, index: number) => (
        <div className={style.project_page__container} key={index}>
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
          <div className={style.project_page__container_bottom}>
            <span
              className={style.custom_btn}
              onClick={() => {
                window.open(project?.githubUrl);
              }}
            >
              View More
            </span>
            <span
              className={style.custom_btn}
              onClick={() => {
                window.open(project?.githubUrl);
              }}
            >
              View Live
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
