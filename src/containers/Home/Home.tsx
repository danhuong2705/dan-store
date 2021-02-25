import Head from "next/head";
import React from "react";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <>
      <Head>
        <title>Dan Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.banner}>
          <img src="/banners/banner01.jpg" alt="banner01" />
        </div>
        <div className={styles.banner}>
          <img src="/banners/banner02.jpg" alt="banner02" />
        </div>
        <div className={styles.banner}>
          <img src="/banners/banner03.png" alt="banner03" />
        </div>
        <div className={styles.banner}>
          <img src="/banners/banner04.jpg" alt="banner04" />
        </div>
      </div>
    </>
  );
};
export default Home;
