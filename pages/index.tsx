import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/home/HomePage";

//get repos from github
export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.github.com/users/sumitsingh4411/repos?sort=created&page=1"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Home: NextPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Sumit singh</title>
        <meta name="description" content="sumit singh portfolio" />
        <link rel="icon" href="../sumit.jpg" />
      </Head>
      <HomePage data={data} />
    </>
  );
};

export default Home;
