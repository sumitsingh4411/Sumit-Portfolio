import React, { useState } from "react";
import { EXPERIENCE_SECTION } from "./constant";
import style from "./Experience.module.scss";

export default function Experience() {
  const [active, setActive] = useState(0);
  return (
    <div id="experience" className={style.experienceSection}>
      <div className={style.experienceSection_container}>
        <div className={style.experienceSection_container__header}>
          <h1 className={style.experienceSection_container__header__title}>
            Experience
          </h1>
          <div
            className={style.experienceSection_container__header__line}
          ></div>
        </div>
        <div className={style.experienceSection_container__body}>
          <div className={style.experienceSection_container__body__left}>
            {EXPERIENCE_SECTION.map((item, index) => (
              <div
                className={`${style.custom_link_btn} ${
                  active === index ? style.custom_link_btn_active : ""
                }`}
                key={item?.id}
                onClick={() => setActive(index)}
              >
                {item?.company_name}
              </div>
            ))}
          </div>
          <div className={style.experienceSection_container__body__right}>
            <h1>
              {EXPERIENCE_SECTION[active]?.designation}@
              <span>{EXPERIENCE_SECTION[active]?.company_name}</span>
            </h1>
            <h2>{EXPERIENCE_SECTION[active]?.duration}</h2>
            {EXPERIENCE_SECTION[active]?.description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
