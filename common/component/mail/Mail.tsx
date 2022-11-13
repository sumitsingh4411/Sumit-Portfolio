import React from "react";
import style from "./Mail.module.scss";

export default function Mail() {
  return (
    <div className={style.mail}>
      <div className={style.mail__container}>
        <p className={style.mail_sumit}>sumitsingh841208@gmail.com</p>
        <div className={style.multimedia__container__straigt_line}></div>
      </div>
    </div>
  );
}
