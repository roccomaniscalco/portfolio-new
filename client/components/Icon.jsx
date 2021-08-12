import React from "react";
import styles from "../styles/components/icon.module.css";

const Icon = ({ ciClass }) => {
  return <i className={`${ciClass} ${styles.icon}`} />;
};

export default Icon;
