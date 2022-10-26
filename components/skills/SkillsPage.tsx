import React from "react";
import { SKILLS } from "../../common/constant";
import style from "./Skills.module.scss";
import CustomProgessBar from "./CustomProgessBar";
import Sphare from "../../common/component/sphare3d/Sphare";

export default function SkillsPage() {
  return (
    <div className={style.skills_container}>
      <div className={style.skills_container}>
        <h1 className={style.skills_title}>Skills</h1>
        <div className={style.skills_content}>
          {SKILLS.map((skill, index) => (
            <div key={index} className={style.skill}>
              <h3>{skill.name}</h3>
              <CustomProgessBar value={skill.level} />
            </div>
          ))}
        </div>
        <h1 className={style.skills_subtitle}>
          Also worked on these technology
        </h1>
        <Sphare />
      </div>
    </div>
  );
}
