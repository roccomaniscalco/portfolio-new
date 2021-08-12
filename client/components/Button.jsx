import React from "react";
import styles from "../styles/components/button.module.css";

const Button = ({ primary, secondary, handleClick, children }) => {
  const switchStyles = () => {
    if (primary) return styles.btnPrimary;
    if (secondary) return styles.btnSecondary;
  };

  return (
    <button className={`${styles.btn} ${switchStyles()}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
