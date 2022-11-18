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
  const data = await response.json();
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
