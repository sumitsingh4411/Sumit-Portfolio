import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  githubActions,
  selectGithubData,
} from "../../redux/slices/githubDataSlice";
import style from "./ProjectList.module.scss";
import github from "../../assets/github.svg";
import live from "../../assets/external.svg";

export default function List() {
  const dispatch = useDispatch();
  const { projects } = useSelector(selectGithubData);
  useEffect(() => {
    if (projects.length === 0) {
      dispatch(githubActions.githubRepoData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);
  return (
    <div className={style.projectList_container}>
      <p className={style.project_list_title}>List of projects</p>
      <table className={style.project_list_table}>
        <thead>
          <tr>
            <th className={style.project_table_header}>Title</th>
            <th className={style.project_table_header}>Created at</th>
            <th className={style.project_table_header}>Teachnoloy</th>
            <th className={style.project_table_header}>Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project: any, index: number) => (
            <tr key={index}>
              <td style={{ fontSize: 20 }}>{project.name}</td>
              <td className={style.custom_font_small}>
                {new Date(project?.created_at).toLocaleString()}
              </td>
              <td className={style.custom_font_small}>
                {project.topics?.length > 0
                  ? project?.topics?.map((item: any) => item + ", ")
                  : "___"}
              </td>
              <td className={style.project_links}>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className={style.project_list_links}
                >
                  <Image src={github} alt="github" width={20} height={20} />
                </a>
                {project?.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className={style.project_list_links}
                  >
                    <Image src={live} alt="live" width={20} height={20} />
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
