import React from "react";
import style from "./HeaderLine.module.scss";

export default function HeaderLine({ title }: any) {
  return (
    <div className={style.headerLine}>
      <h1 className={style.headerLine__title}>{title}</h1>
      <div className={style.headerLine__line}></div>
    </div>
  );
}
