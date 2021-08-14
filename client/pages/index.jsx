import React from "react";
import useCursor from "../customHooks/useCursor";

import Button from "../components/Button";
import Icon from "../components/Icon";
import LandingGraphic from "../components/LandingGraphic";
import TechBadge from "../components/TechBadge";

import styles from "../styles/index.module.css";

const index = () => {
  const [cursor, targetEl] = useCursor();

  return (
    <div id={styles.layoutContainer} ref={targetEl}>
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
          <TechBadge label="HTML5" ciClass="ci-html5"/>
        </div>
        <LandingGraphic cursor={cursor} />
      </div>
    </div>
  );
};

export default index;
