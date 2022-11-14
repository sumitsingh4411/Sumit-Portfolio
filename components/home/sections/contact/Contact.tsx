import React from "react";
import style from "./Contact.module.scss";
export default function Contact() {
  return (
    <div id="contact" className={style.contactSection}>
      <div className={style.contactSection_container}>
        <div className={style.contactSection_container__header}>
          <h1 className={style.contactSection_container__header__title}>
            Contact
          </h1>
          <div className={style.contactSection_container__header__line}></div>
        </div>
        <div className={style.contactSection_container__body}></div>
      </div>
    </div>
  );
}
