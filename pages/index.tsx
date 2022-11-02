import type { NextPage } from "next";
import Head from "next/head";
import ContactPage from "../components/contact/ContactPage";
import CVPage from "../components/cv/CVPage";
import ExperiencePage from "../components/experience/ExperiencePage";
import HomePage from "../components/home/HomePage";
import ProjectPage from "../components/projects/ProjectPage";
import SkillsPage from "../components/skills/SkillsPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The sumit</title>
        <meta name="description" content="sumit singh portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
