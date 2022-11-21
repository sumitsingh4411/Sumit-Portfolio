import React from "react";
import Sphare from "../../../../common/component/sphare/Sphare";
import { skillSection } from "./constant";
import style from "./SkillSection.module.scss";
import HeaderLine from "../../../../common/component/headerLine/HeaderLine";
import SphareMobile from "../../../../common/component/sphare/SphareMobile";
import useWindowWidth from "../../../../common/hooks/useWindowWidth";
import { DEVICE_TYPE } from "../../../../common/constant";

export default function SkillSection() {
  const windowWidth = useWindowWidth();
  return (
    <div id="skills" className={style.skillSection}>
      <div className={style.skillSection_container}>
        <HeaderLine title="Skills" />
        <div className={style.skillSection_container__body}>
          <div className={style.skillSection_container__body__left}>
            {skillSection?.map((skill, index) => (
              <div
                key={index}
                className={style.skillSection_container__body__left__item}
              >
                <p className={style.skill_item_title}>{skill.title}</p>
                <div
                  className={
                    style.skillSection_container__body__left__item__line
                  }
                >
                  <div
                    className={
                      style.skillSection_container__body__left__item__line__inner
                    }
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: "white",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className={style.skillSection_container__body__right}>
            {windowWidth > DEVICE_TYPE.MOBILE ? <Sphare /> : <SphareMobile />}
          </div>
        </div>
      </div>
    </div>
  );
}
