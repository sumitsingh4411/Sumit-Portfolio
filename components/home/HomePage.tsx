//@ts-nocheck
import React from "react";
import style from "./Home.module.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import { source } from "./constant";

SyntaxHighlighter.registerLanguage("typescript", typescript);

export default function Home() {
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
            <ReactMarkdown
              components={MarkdownComponents}
              className={style.markdown_typescript}
            >
              {source}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
