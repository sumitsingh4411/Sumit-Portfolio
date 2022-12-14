import React from "react";
import style from "./TopSection.module.scss";
import { GITHUB_REPO_URL } from "../../../../common/constant";
import Icons from "../../../../common/component/icons/Icons";

export default function TopSection() {
  return (
    <div className={style.topSection}>
      <div className={`${style.topSection_container} fade_in_animation`}>
        <p className={style.topSection_top_title}>Hi, my name is</p>
        <h1 className={style.topSection_title}>Sumit Kumar Singh.</h1>
        <h2 className={style.topSection_subtitle}>
          I am working as a front-end developer.
        </h2>
        <p className={style.topSection_description}>
          I am a frontend developer specializing in React. I have a passion for
          building web applications and learning new technologies. Currently I
          am working on technologies like React, Next.js, Typescript, Redux,
          etc.
        </p>
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          className={style.topSection_button_github}
          rel="noreferrer"
        >
          <Icons name="github" width={20} height={20} />
          <p> Check All Projects</p>
        </a>
      </div>
    </div>
  );
}
