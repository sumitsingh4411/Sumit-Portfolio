import React from "react";
import style from "./SideBar.module.scss";
import { useRouter } from "next/router";
import { SIDEBAR_LINKS } from "../../common/constant";
import Link from "next/link";

export default function SideBar() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className={style.sidebar}>
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
  );
}
