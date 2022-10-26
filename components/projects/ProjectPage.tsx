import Image from "next/image";
import React, { useEffect } from "react";
import style from "./Project.module.scss";
import github from "../../assets/github.svg";

export default function ProjectPage() {
  return (
    <div className={style.project_page}>
      <div className={style.project_page__container}>
        <div className={style.project_description}>
          <h1 className={style.description_link}>View Full Details</h1>
          <h1 className={style.description_link}>Open in web VsCode</h1>
          <h1 className={style.description_link}>View Live Demo</h1>
        </div>
        <div className={style.project_image}>
          <div className={style.project__title}>
            <h1>hello world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              incidunt.
            </p>
            <p>
              <b>Technology used: </b>
              <span>
                React, Next.js, TypeScript, TailwindCSS, Framer Motion
              </span>
            </p>
          </div>
          <div className={style.project_page__container__content}>
            <Image src={github} alt="nextjs" width={300} height={300} />
          </div>
        </div>
      </div>

      <div className={style.project_page__container}>
        <div className={style.project_description}>
          <h1 className={style.description_link}>View Full Details</h1>
          <h1 className={style.description_link}>Open in web VsCode</h1>
          <h1 className={style.description_link}>View Live Demo</h1>
        </div>
        <div className={style.project_image}>
          <div className={style.project__title}>
            <h1>hello world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              incidunt.
            </p>
            <p>
              <b>Technology used: </b>
              <span>
                React, Next.js, TypeScript, TailwindCSS, Framer Motion
              </span>
            </p>
          </div>
          <div className={style.project_page__container__content}>
            <Image src={github} alt="nextjs" width={300} height={300} />
          </div>
        </div>
      </div>

      <div className={style.project_page__container}>
        <div className={style.project_description}>
          <h1 className={style.description_link}>View Full Details</h1>
          <h1 className={style.description_link}>Open in web VsCode</h1>
          <h1 className={style.description_link}>View Live Demo</h1>
        </div>
        <div className={style.project_image}>
          <div className={style.project__title}>
            <h1>hello world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              incidunt.
            </p>
            <p>
              <b>Technology used: </b>
              <span>
                React, Next.js, TypeScript, TailwindCSS, Framer Motion
              </span>
            </p>
          </div>
          <div className={style.project_page__container__content}>
            <Image src={github} alt="nextjs" width={300} height={300} />
          </div>
        </div>
      </div>


      <div className={style.project_page__container}>
        <div className={style.project_description}>
          <h1 className={style.description_link}>View Full Details</h1>
          <h1 className={style.description_link}>Open in web VsCode</h1>
          <h1 className={style.description_link}>View Live Demo</h1>
        </div>
        <div className={style.project_image}>
          <div className={style.project__title}>
            <h1>hello world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              incidunt.
            </p>
            <p>
              <b>Technology used: </b>
              <span>
                React, Next.js, TypeScript, TailwindCSS, Framer Motion
              </span>
            </p>
          </div>
          <div className={style.project_page__container__content}>
            <Image src={github} alt="nextjs" width={300} height={300} />
          </div>
        </div>
      </div>


      <div className={style.project_page__container}>
        <div className={style.project_description}>
          <h1 className={style.description_link}>View Full Details</h1>
          <h1 className={style.description_link}>Open in web VsCode</h1>
          <h1 className={style.description_link}>View Live Demo</h1>
        </div>
        <div className={style.project_image}>
          <div className={style.project__title}>
            <h1>hello world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              incidunt.
            </p>
            <p>
              <b>Technology used: </b>
              <span>
                React, Next.js, TypeScript, TailwindCSS, Framer Motion
              </span>
            </p>
          </div>
          <div className={style.project_page__container__content}>
            <Image src={github} alt="nextjs" width={300} height={300} />
          </div>
        </div>
      </div>


      <div className={style.project_page__container}>
        <div className={style.project_description}>
          <h1 className={style.description_link}>View Full Details</h1>
          <h1 className={style.description_link}>Open in web VsCode</h1>
          <h1 className={style.description_link}>View Live Demo</h1>
        </div>
        <div className={style.project_image}>
          <div className={style.project__title}>
            <h1>hello world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              incidunt.
            </p>
            <p>
              <b>Technology used: </b>
              <span>
                React, Next.js, TypeScript, TailwindCSS, Framer Motion
              </span>
            </p>
          </div>
          <div className={style.project_page__container__content}>
            <Image src={github} alt="nextjs" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
