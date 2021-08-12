import React from "react";
import styles from "../styles/index.module.css";

const index = () => {
  return (
    <div id={styles.layoutContainer}>
      <div id={styles.landingContainer}>
        <div id={styles.copyContainer}>
          <h1>
            Build <span className={styles.fireH1}>powerful</span> web
            experiences.
          </h1>
          <p>
            Hi—I’m <strong>Rocco Maniscalco</strong>. I’m a full stack developer
            leveraging modern web technologies to build applications that
            deliver impact.
          </p>
        </div>
        <img
          src="/orange-flare.png"
          id={styles.orangeFlare}
          alt="orange flare"
        />
      </div>
    </div>
  );
};

export default index;
