import Image from "next/image";
import React from "react";
import style from "./Home.module.scss";
import home from "../../assets/home.svg";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <div className={style.left_container}>
          <div className={style.custom_html}>{"<html>"}</div>
          <div
            className={`${style.custom_html} ${style.custom_html_second_tag}`}
          >
            {"<body>"}
          </div>
          <div
            className={`${style.custom_html} ${style.custom_html_third_tag}`}
          >
            {"<h1>"}
          </div>
          <div
            className={`${style.home__container__name} ${style.home_container_name_title}`}
          >
            Sumit Singh,
            <br /> FrontEnd Developer
          </div>
          <div
            className={`${style.custom_html} ${style.custom_html_third_tag}`}
          >
            {"</h1>"}
          </div>
          <div
            className={`${style.custom_html} ${style.custom_html_second_tag}`}
          >
            {"</body>"}
          </div>
          <div className={style.custom_html}>{"</html>"}</div>
        </div>
        <div className={style.right_container}>
          <Image src={home} alt="home" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}
