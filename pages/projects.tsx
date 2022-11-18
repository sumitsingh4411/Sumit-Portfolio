import React from "react";
import ProjectList from "../components/projectList/ProjectList";
//ssr
export async function getServerSideProps() {
  const res = await fetch(
    "https://api.github.com/users/sumitsingh4411/repos?sort=created&per_page=100"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function projects({data}:any) {
  return <ProjectList data={data}/>;
}
