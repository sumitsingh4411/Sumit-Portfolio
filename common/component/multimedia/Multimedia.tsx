import Image from "next/image";
import React from "react";
import { MULTIMEDIA } from "../../../components/header/constant";
import style from "./Multimedia.module.scss";

export default function Multimedia() {
  return (
    <div className={style.multimedia}>
      <div className={style.multimedia__container}>
        {MULTIMEDIA.map((item, index) => (
          <Image
            src={item.icon}
            alt={item.name}
            key={index}
            width={30}
            height={30}
            className={style.multimedia__container__item}
            onClick={() => window.open(item?.url, "_blank")}
          />
        ))}
        <div className={style.multimedia__container__straigt_line}></div>
      </div>
    </div>
  );
}
