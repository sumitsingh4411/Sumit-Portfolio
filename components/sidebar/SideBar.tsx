import Image from "next/image";
import React from "react";
import style from "./SideBar.module.scss";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import stackoverflow from "../../assets/stack-overflow.svg";
import sumit from "../../assets/sumit.jpg";
import { useRouter } from "next/router";
import { SIDEBAR_LINKS, URLPaths } from "../../common/constant";
import Link from "next/link";

export default function SideBar() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__top}>
        <Image
          src={sumit}
          alt="profile"
          width={180}
          height={180}
          className={style.sidebar__image}
        />
        <p className={style.sidebar_name}>Sumit Kumar Singh</p>
        <p className={style.sidebar_title}>FrontEnd Developer</p>
      </div>
      <div className={style.sidebar__middle}>
        <div className={style.sidebar__middle__item}>
          {SIDEBAR_LINKS.map((item, index) => (
            <Link href={item.path} key={index}>
              <a
                className={`${style.sidebar_link} ${
                  path === item.path ? style.siderbar_link_active : ""
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className={style.sidebar__bottom}>
        <div className={style.sidebar__bottom__icons}>
          <Image
            src={linkedin}
            alt="linkedin"
            width={30}
            height={30}
            className={style.sidebar_icon}
          />
          <Image
            src={github}
            alt="github"
            width={30}
            height={30}
            className={style.sidebar_icon}
          />
          <Image
            src={stackoverflow}
            alt="stackoverflow"
            width={30}
            height={30}
            className={style.sidebar_icon}
          />
        </div>
      </div>
    </div>
  );
}
