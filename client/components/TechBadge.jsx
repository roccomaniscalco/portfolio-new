import React from "react";
import Icon from "./Icon";

import styles from "../styles/components/techBadge.module.css";

const TechBadge = ({ label, ciClass }) => {
  return (
    <div className={styles.badgeContainer}>
      <Icon ciClass={ciClass} />
      {label}
    </div>
  );
};

export default TechBadge;
