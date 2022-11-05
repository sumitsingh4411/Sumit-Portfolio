import React from "react";
import ProjectPage from "../components/projects/ProjectPage";

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.github.com/users/sumitsingh4411/repos?page=2"
  );
  const data = await res.json();
  data.sort((a: any, b: any) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return {
    props: {
      data,
    },
  };
}

export default function Projects(props: any) {
  return <ProjectPage data={props?.data} />;
}
