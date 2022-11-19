import React from "react";
import Sphare from "../../../../common/component/sphare/Sphare";
import { skillSection } from "./constant";
import style from "./SkillSection.module.scss";
import css from "styled-jsx/css";
import HeaderLine from "../../../../common/component/headerLine/HeaderLine";

export default function SkillSection() {
  const pulse = css`
    @keyframes pulse {
      0% {
        background-color: #fff;
      }
      50% {
        background-color: #f5f5f5;
      }
      100% {
        background-color: #fff;
      }
    }
  `;
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
                      width: `${skill.percentage}px`,
                      animation: `${pulse} 3s ease-in-out`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className={style.skillSection_container__body__right}>
            <h2 className={style.skillSection_container__body__right__title}>
              Also I have experience with{" "}
            </h2>
            <Sphare />
          </div>
        </div>
      </div>
    </div>
  );
}
