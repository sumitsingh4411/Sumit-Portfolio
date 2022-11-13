import React from "react";
import style from "./Header.module.scss";
import { SIDEBAR_LINKS } from "../../common/constant";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <div className={style.header}>
      <div className={style.header__left}>
        <div className={style.header__left__logo}>
          <span className={style.header_title}>S</span>
        </div>
      </div>
      <div className={style.header__right}>
        <div className={style.header__right__item}>
          {SIDEBAR_LINKS.map((item, index) => (
            <Link href={router?.pathname + item.url} key={index}>
              <a className={`${style.header_link}`}>{item.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
