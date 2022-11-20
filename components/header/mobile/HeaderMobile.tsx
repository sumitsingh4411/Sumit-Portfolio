import { useRouter } from "next/router";
import React from "react";
import style from "./HeaderMobile.module.scss";
import cross_btn from "../../../assets/cross.svg";
import Image from "next/image";
import Link from "next/link";
import { SIDEBAR_LINKS } from "../../../common/constant";

export default function HeaderMobile() {
  const [showMenu, setShowMenu] = React.useState(false);
  const router = useRouter();
  const logoClick = () => {
    router.push("/");
  };
  const openMenu = () => {
    setShowMenu(true);
  };

  const openPdf = (url: string) => {
    if (url.trim().length === 0) {
      window.open("../sumit_cv.pdf", "_blank");
    }
    setShowMenu(false);
  };
  return (
    <>
      <div className={style.headerMobile}>
        <div className={style.headerMobile__left}>
          <div className={style.header__left__logo} onClick={logoClick}>
            <span className={style.header_title}>S</span>
          </div>
        </div>
        <div className={style.headerMobile__right}>
          {showMenu ? (
            <Image
              src={cross_btn}
              alt="X"
              width={28}
              height={28}
              style={{
                cursor: "pointer",
                zIndex: 1000,
              }}
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <>
              <div
                className={style.headerMobile__right__item_1}
                onClick={openMenu}
              ></div>
              <div
                className={style.headerMobile__right__item_2}
                onClick={openMenu}
              ></div>
              <div
                className={style.headerMobile__right__item_3}
                onClick={openMenu}
              ></div>
            </>
          )}
        </div>
      </div>
      {showMenu && (
        <div className={style.headerMobile__menu__overlay}>
          <div className={style.headerMobile__menu}>
            <div className={style.headerMobile__menu__item}>
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
                  <a
                    className={`${style.header_link} hover_underline_animation`}
                  >
                    Go to Home Page
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
