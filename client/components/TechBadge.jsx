import Icon from "./Icon";

import styles from "../styles/components/conveyorBelt.module.css";

const TechBadge = ({ label, ciClass }) => {
  return (
    <div className={styles.techBadge}>
      <Icon ciClass={ciClass} />
      {label}
    </div>
  );
};

export default TechBadge;
