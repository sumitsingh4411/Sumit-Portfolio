import Image from "next/image";
import React from "react";
import style from "./Home.module.scss";
import home from "../../assets/home.svg";
import { MarkdownPreviewProps } from "@uiw/react-markdown-preview";
import dynamic from "next/dynamic";
import MarkdownPreview from "@uiw/react-markdown-preview";



export default function Home() {
  const source = `
## नमस्ते 🙏
[![](https://img.shields.io/badge/LinkedIn-sumitsingh-blue)](https://www.linkedin.com/in/sumit-singh-81a73817a/)
[![](https://img.shields.io/badge/Gmail-sumitsingh841208@gmail.com-red)](mailto:sumitsingh841208@gmail.com)
[![](https://img.shields.io/badge/HackerRank-mega4411-brightgreen)](https://www.hackerrank.com/mega4411)
[![](https://img.shields.io/badge/Codechef-mega4411-brown)](https://www.codechef.com/users/mega4411)
[![](https://img.shields.io/badge/leetcode-mega4411-yellow)](https://leetcode.com/mega4411/)


## About Me:

\`\`\`javascript
const sumit = {
    pronouns: "He" | "Him",
    code: ["Javascript", "c++", "Typescript"],
    askMeAbout: ["web dev", "tech", "app dev"],
    technologies: {
        mobileApp: ["Android App", "Native App"],
        frontEnd: {
            js: ["React"],
            css: ["materialui", "chhakra", "bootstrap"]
        },
        backEnd: {
            js: ["node", "express"], 
        },
        databases: ["mongo"],
        misc: ["Firebase"]
    },
    architecture: ["Serverless Architecture", "Progressive web applications", "Single page applications"],
    currentProject: "I am developing Argumented Reality with react native with help of react-viro"
};
\`\`\`
#### Always curious to learn cutting edge technology.  enthusiast towards web development. I like Competitive programming.  <br> <br>

![visitors](https://visitor-badge.glitch.me/badge?page_id=sumitsingh4411.sumitsingh4411) <br>


![visitors](https://visitor-badge.glitch.me/badge?page_id=sumitsingh4411.sumitsingh4411)


---

⭐️ From [@sumitsingh4411](https://github.com/sumitsingh4411)

<!-- TO make screenshot of your code, copy below link:  
https://carbon.now.sh/ -->

`;

  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <div className={style.left_container}>
          <div data-color-mode="dark">
            <MarkdownPreview source={source} />
          </div>
        </div>
        <div className={style.right_container}>
          <Image src={home} alt="home" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}
