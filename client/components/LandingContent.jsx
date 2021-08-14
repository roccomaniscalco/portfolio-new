import Button from "./Button";
import Icon from "./Icon";
import LandingGraphic from "./LandingGraphic";

import styles from "../styles/components/landingContent.module.css";

const LandingContent = () => {
  return (
    <div id={styles.landingContainer}>
      <div id={styles.heroContainer}>
        <div id={styles.heroContent}>
          <h1>
            Build <span className={styles.fireText}>powerful</span> web
            experiences.
          </h1>
          <p>
            Hi—I’m Rocco Maniscalco. I’m a full stack developer leveraging
            modern web technologies to build applications that deliver impact.
          </p>
          <div className={styles.btnGroup}>
            <Button primary>
              Let's connect <Icon ciClass="ci-chevron_right" />
            </Button>
            <Button secondary>
              Download resume <Icon ciClass="ci-cloud_down" />
            </Button>
          </div>
        </div>
        <LandingGraphic />
      </div>
    </div>
  );
};

export default LandingContent;
