import Image from "next/image";
import React from "react";
import { MULTIMEDIA } from "./constant";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.header__left}>
        <h1 className={style.header__title}>Sumit Kumar Singh</h1>
      </div>
      <div className={style.header__right}>
        <div className={style.header__right__item}>
          <p className={style.header__right__item__title}>FrontEnd Developer</p>
          <div className={style.header__right__item__image}>
            {MULTIMEDIA?.map((item, index) => (
              <Image
                src={item?.icon}
                alt={item?.name}
                width={24}
                height={24}
                className={style.header__right__item__icon}
                onClick={() => window?.open(item?.url)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
