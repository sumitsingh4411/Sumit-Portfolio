import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/home/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>about sumit</title>
        <meta name="description" content="sumit singh portfolio" />
        <link rel="icon" href="./../assets/sumit.jpg" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
