import React from "react";
import style from "./Skills.module.scss";

export default function CustomProgessBar({ value }: any) {
  return (
    <div className={style.progress_bar}>
      <div
        className={style.progress_bar_value}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
