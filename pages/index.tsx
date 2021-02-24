import Head from "next/head";
import React from "react";
import Layout from "../src/components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dan Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>Welcome to Dan Store</Layout>
    </>
  );
}
