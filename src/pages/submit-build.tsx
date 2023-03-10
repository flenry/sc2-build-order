import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { appRouter } from "~/server/api/root";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const createBuildMutation = api.builds.createBuild.useMutation();
  const [matchUp, setMatchUp] = useState("");
  const [build, setBuildOrder] = useState("");

  async function handleSubmitBuildOrder(e: React.FormEvent) {
    e.preventDefault();
    await createBuildMutation.mutateAsync({
      matchUp,
      build,
    });
  }

  return (
    <>
      <Head>
        <title>Submit a Build</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Submit a Build Order</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmitBuildOrder}>
          <label htmlFor="match-up-select">Match up</label>
          <select
            className="text-black"
            value={matchUp}
            // onSelect={(e) => setMatchUp(e.target.value)}
            onChange={(e) => setMatchUp(e.target.value)}
            id="match-up-select"
          >
            <option value="zvt">ZvT</option>
            <option value="zvp">ZvP</option>
            <option value="zvz">ZvZ</option>

            <option value="pvt">PvT</option>
            <option value="pvp">PvP</option>
            <option value="pvz">PvT</option>

            <option value="tvt">TvT</option>
            <option value="tvp">TvP</option>
            <option value="tvz">TvZ</option>
          </select>
        </form>
        <textarea
          className="bg-white p-2 text-black"
          value={build}
          onChange={(e) => setBuildOrder(e.target.value)}
        />
        <button>submit</button>
      </main>
    </>
  );
};

export default Home;
