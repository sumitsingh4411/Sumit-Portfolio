import React from "react";
import style from "./Header.module.scss";
import { SIDEBAR_LINKS } from "../../common/constant";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const openPdf = (url: string) => {
    if (url.trim().length === 0) {
      window.open("../sumit_cv.pdf", "_blank");
    }
  };
  const logoClick = () => {
    router.push("/");
  };
  return (
    <div className={style.header}>
      <div className={style.header__left}>
        <div className={style.header__left__logo} onClick={logoClick}>
          <span className={style.header_title}>S</span>
        </div>
      </div>
      <div className={style.header__right}>
        <div className={style.header__right__item}>
          {router?.pathname !== "/projects" &&
            SIDEBAR_LINKS.map((item, index) => (
              <Link href={item.url} key={index}>
                <a
                  className={`${style.header_link} hover_underline_animation`}
                  onClick={() => openPdf(item.url)}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          {router?.pathname === "/projects" && (
            <Link href="/">
              <a className={`${style.header_link} hover_underline_animation`}>
                Go to Home Page
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
