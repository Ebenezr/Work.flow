import { type NextPage } from "next";
import Head from "next/head";

import { trpc } from "../utils/trpc";
import EmployeeStatus from "./sections/_employeeStatus";
import Header from "./sections/_header";
import SectionTitle from "./sections/_sectionTitle";
import StatsData from "./sections/_statsData";
import StatusCards from "./sections/_statusCards";
import WorkingFormart from "./sections/_workingFormart";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Work.flow</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full w-full min-w-min flex-col">
        {/* header */}
        <Header />
        {/* main panel */}
        <section className="flex h-full w-full flex-col gap-6 p-8">
          {/* section title */}
          <SectionTitle />
          {/* status cards */}
          <StatusCards />
          {/* Stats data */}
          <StatsData />
          {/* lower thirds */}
          <article className="flex w-full h-full gap-6">
            <EmployeeStatus/>
            <WorkingFormart/>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  return <div className=""></div>;
};
