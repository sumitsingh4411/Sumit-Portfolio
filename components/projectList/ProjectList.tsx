import React from "react";
import Mail from "../../common/component/mail/Mail";
import Multimedia from "../../common/component/multimedia/Multimedia";
import List from "./List";
import style from "./ProjectList.module.scss";

export default function ProjectList({ data }: any) {
  return (
    <div className={style.projectList}>
      <Multimedia />
      <List />
      <Mail />
    </div>
  );
}
