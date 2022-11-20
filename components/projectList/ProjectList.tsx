import React from "react";
import Mail from "../../common/component/mail/Mail";
import Multimedia from "../../common/component/multimedia/Multimedia";
import useWindowWidth from "../../common/useWindowWidth";
import List from "./List";
import style from "./ProjectList.module.scss";

export default function ProjectList() {
  const windowWidth = useWindowWidth();
  return (
    <div className={style.projectList}>
      {windowWidth > 768 && <Multimedia />}
      <List />
      {windowWidth > 768 && <Mail />}
    </div>
  );
}
