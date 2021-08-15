import Head from "next/head";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Rocco Maniscalco | Full Stack Developer</title>
        <meta
          name="description"
          content="Leverage powerful web technologies to build impactful web experiences."
        />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/coolicons.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
