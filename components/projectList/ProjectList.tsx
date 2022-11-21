import React from "react";
import Mail from "../../common/component/mail/Mail";
import Multimedia from "../../common/component/multimedia/Multimedia";
import { DEVICE_TYPE } from "../../common/constant";
import useWindowWidth from "../../common/hooks/useWindowWidth";
import List from "./List";
import style from "./ProjectList.module.scss";

export default function ProjectList() {
  const windowWidth = useWindowWidth();
  return (
    <div className={style.projectList}>
      {windowWidth > DEVICE_TYPE.MOBILE && <Multimedia />}
      <List />
      {windowWidth > DEVICE_TYPE.MOBILE && <Mail />}
    </div>
  );
}
