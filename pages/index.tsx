import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomePage from "../components/home/HomePage";
import { githubActions } from "../redux/slices/githubDataSlice";

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://api.github.com/users/sumitsingh4411/repos?sort=created&per_page=100"
  );
  let data = await response.json();
  data = data.map((repo: any) => ({
    created_at: repo?.created_at,
    homepage: repo?.homepage,
    html_url: repo?.html_url,
    id: repo?.id,
    topics: repo?.topics,
    name: repo?.name,
    description: repo?.description,
    language: repo?.language,
    updated_at: repo?.updated_at,
    url: repo?.url,
  }));
  return {
    props: { data },
  };
};

const Home: NextPage = ({ data }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(githubActions.setGithubData(data));
    dispatch(githubActions.setCustomProjectList(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head>
        <title>Sumit singh</title>
        <meta name="description" content="sumit singh portfolio" />
        <link rel="icon" href="../sumit.jpg" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
