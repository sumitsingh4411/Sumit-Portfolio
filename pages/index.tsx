import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/home/HomePage";

const Home: NextPage = () => {
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
