//@ts-nocheck
import Image from "next/image";
import React from "react";
import style from "./Home.module.scss";
import home from "../../assets/home.svg";
import dynamic from "next/dynamic";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";

SyntaxHighlighter.registerLanguage("typescript", typescript);

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
#### Always curious to learn cutting edge technology.  enthusiast towards web development. I like Competitive programming.  

---
`;
  const syntaxTheme = atomDark;

  const MarkdownComponents: object = {
    code({ node, inline, className, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const hasMeta = node?.data?.meta;

      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, "");
          const strlineNumbers = RE?.test(metadata)
            ? RE?.exec(metadata)[1]
            : "0";
          const highlightLines = rangeParser(strlineNumbers);
          const highlight = highlightLines;
          const data: string = highlight.includes(applyHighlights)
            ? "highlight"
            : null;
          return { data };
        } else {
          return {};
        }
      };
      return match ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={match[1]}
          PreTag="div"
          className="codeStyle"
          showLineNumbers={true}
          wrapLines={hasMeta ? true : false}
          useInlineStyles={true}
          lineProps={applyHighlights}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      );
    },
  };
  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <div className={style.left_container}>
          <div data-color-mode="dark">
            <ReactMarkdown components={MarkdownComponents}>
              {source}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
