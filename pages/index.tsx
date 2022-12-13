import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GITHUB_URL } from "../common/constant";
import { getParticulatInfo } from "../common/helper";
import HomePage from "../components/home/HomePage";
import { githubActions } from "../redux/slices/githubDataSlice";

//ssr
export const getServerSideProps = async () => {
  // get data from github
  const response = await fetch(GITHUB_URL);
  let data = await response.json();
  data = getParticulatInfo(data);
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
        <link rel="icon" href="../sumit.jpg" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
