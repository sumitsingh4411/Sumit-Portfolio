/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.foonter_container_text}>
          <div className={style.footer_container_text_social_left}>
            <p> Made with</p>
            <p role="img" aria-label="heart" className={style.heart_blink}>
              ❤️
            </p>{" "}
            <p>by @Sumit Kumar Singh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
