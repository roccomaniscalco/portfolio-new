import Head from "next/head";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Rocco Maniscalco | Full Stack Developer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
