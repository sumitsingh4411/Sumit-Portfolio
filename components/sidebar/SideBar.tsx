import Image from "next/image";
import React from "react";
import style from "./SideBar.module.scss";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import stackoverflow from "../../assets/stack-overflow.svg";
import sumit from "../../assets/sumit.jpg";

export default function SideBar() {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__top}>
        <Image
          src={sumit}
          alt="profile"
          width={180}
          height={180}
          className={style.sidebar__image}
        />
        <p className={style.sidebar_name}>Sumit Kumar Singh</p>
        <p className={style.sidebar_title}>FrontEnd Developer</p>
      </div>
      <div className={style.sidebar__middle}>
        <div className={style.sidebar__middle__item}>
          <p className={style.sidebar_link}>About me</p>
          <p className={style.sidebar_link}>Experience</p>
          <p className={style.sidebar_link}>Projects</p>
          <p className={style.sidebar_link}>Skills</p>
          <p className={style.sidebar_link}>Education</p>
          <p className={style.sidebar_link}>Contact me</p>
          <p className={style.sidebar_link}>CV</p>
        </div>
      </div>
      <div className={style.sidebar__bottom}>
        <div className={style.sidebar__bottom__icons}>
          <Image
            src={linkedin}
            alt="linkedin"
            width={30}
            height={30}
            className={style.sidebar_icon}
          />
          <Image
            src={github}
            alt="github"
            width={30}
            height={30}
            className={style.sidebar_icon}
          />
          <Image
            src={stackoverflow}
            alt="stackoverflow"
            width={30}
            height={30}
            className={style.sidebar_icon}
          />
        </div>
      </div>
    </div>
  );
}
