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
                width={320}
                height={320}
                alt={index + "image"}
              />
            ))}
          </Carousel>
        </div>
      ))}
      <div className={style.project_page__container_bottom}>
        <button className={style.project_page__container_bottom__button}>
          <Image src={github} width={20} height={20} alt="github" />
          <span>View More</span>
        </button>
        <button className={style.project_page__container_bottom__button}>
          <Image src={github} width={20} height={20} alt="github" />
          <span>View Live</span>
        </button>
      </div>
    </div>
  );
}
