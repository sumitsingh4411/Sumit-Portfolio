import React from "react";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.foonter_container_text}>
          <p> Made with</p>
          <p role="img" aria-label="heart" className={style.heart_blink}>
            ❤️
          </p>{" "}
          <p>by @Sumit Kumar Singh</p>
        </div>
      </div>
    </div>
  );
}
