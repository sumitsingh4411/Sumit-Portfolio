import Head from "next/head";
import React from "react";
import ProjectList from "../components/projectList/ProjectList";

export default function projects() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Best portfolio website using next js with typescript and redux"
        />
        <meta
          name="keywords"
          content="next js, typescript, redux, portfolio, best portolio, india top portfolio, reactjs, html and css"
        />
        <meta name="author" content="Sumit Kumar singh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>
      <ProjectList />
    </>
  );
}
