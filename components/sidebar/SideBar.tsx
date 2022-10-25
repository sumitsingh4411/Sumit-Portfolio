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
          width={100}
          height={100}
          className={style.sidebar__image}
        />
        <p>Sumit Kumar Singh</p>
        <p>FrontEnd Developer</p>
      </div>
      <div className={style.sidebar__middle}>
        <div className={style.sidebar__middle__item}>
          <p>Experience</p>
          <p>Projects</p>
          <p>Skills</p>
          <p>Education</p>
          <p>Contact me</p>
          <p>CV</p>
        </div>
      </div>
      <div className={style.sidebar__bottom}>
        <div className={style.sidebar__bottom__icons}>
          <Image src={linkedin} alt="linkedin" width={30} height={30} />
          <Image src={github} alt="github" width={30} height={30} />
          <Image
            src={stackoverflow}
            alt="stackoverflow"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}
