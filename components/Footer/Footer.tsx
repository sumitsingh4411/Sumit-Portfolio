import React from "react";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_container}>
        <p>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by Sumit Kumar Singh
        </p>
      </div>
    </div>
  );
}
