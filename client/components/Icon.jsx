import styles from "../styles/components/icon.module.css";

const Icon = ({ ciClass, color }) => {
  return <i className={`${ciClass} ${styles.icon}`} style={{color: color}} />;
};

export default Icon;
