import React from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Phone from "../components/Phone";
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
          <div className={styles.btnGroup}>
            <Button primary>
              Let's connect <Icon ciClass={"ci-chevron_right"} />
            </Button>
            <Button secondary>
              Download resume <Icon ciClass={"ci-download"} />
            </Button>
          </div>
        </div>
        <Phone />
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
