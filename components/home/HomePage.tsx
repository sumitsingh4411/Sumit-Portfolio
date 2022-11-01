import Image from "next/image";
import React from "react";
import style from "./Home.module.scss";
import home from "../../assets/home.svg";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <p className={style.left_container}>
          <span className={style.custom_html}>{"<html>"}</span>
          <span className={style.custom_html}>&ensp;&ensp;{"<body>"}</span>
          <span className={style.custom_html}>
            &ensp;&ensp;&ensp;&ensp;{"<h1>"}
          </span>
          <span className={style.home__container__name}>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Sumit Singh, <br />
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;FrontEnd Developer
          </span>
          <span className={style.custom_html}>
            &ensp;&ensp;&ensp;&ensp;{"</h1>"}
          </span>
          <br />
          <span className={style.custom_html}>&ensp;&ensp;{"</body>"}</span>
          <span className={style.custom_html}>{"</html>"}</span>
        </p>
        <div className={style.right_container}>
          <Image src={home} alt="home" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}
