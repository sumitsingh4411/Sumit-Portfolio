import React from "react";
import ProjectPage from "../components/projects/ProjectPage";

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/sumitsingh4411/repos");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Projects(props: any) {
  return <ProjectPage data={props?.data} />;
}
