import Image from "next/image";
import React from "react";
import style from "./Home.module.scss";
import about from "../../assets/about.jpg";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <p>
          <span className={style.home__container__name}>Sumit Singh</span>
          <br />
          <span className={style.home__container__title}>
            Full Stack Developer
          </span>
          <br />
          <span className={style.home__container__description}>
            I am a Full Stack Developer with 2 years of experience in building
            web applications. I have worked on various projects using React,
            Next.js, Node.js, Express.js, MongoDB, MySQL, and Firebase. I am
            also familiar with various other technologies like Redux, GraphQL,
            Apollo, and Socket.io. I am a quick learner and always eager to
            learn new technologies. I am also a team player and have worked in
            teams of 2 to 5 members. I am also a self-motivated person and can
            work independently. I am also a quick learner and always eager to
            learn new technologies. I am also a team player and have worked in
            teams of 2 to 5 members. I am also a self-motivated person and can
            work independently.
          </span>
        </p>
        <div className={style.home__container__social}>
          <Image
            src={about}
            alt="github"
           
          />
        </div>
      </div>
    </div>
  );
}
