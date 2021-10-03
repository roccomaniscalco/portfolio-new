import styles from "../styles/components/button.module.css";
import useCursor from "../customHooks/useCursor";

const Button = ({ primary, secondary, handleClick, children }) => {
  const [cursor, targetEl] = useCursor();

  const switchStyles = () => {
    if (primary) return styles.btnPrimary;
    if (secondary) return styles.btnSecondary;
  };

  return (
    <div className={"btn-container"}
      style={{
        transform: `perspective(${cursor.clientWidth}px) 
      rotateX(${cursor.rotationX}deg) 
      rotateY(${cursor.rotationY}deg)`,
      }}
    >
      <button
        className={`${styles.btn} ${switchStyles()}`}
        onClick={handleClick}
        ref={targetEl}
      >
        <div className={styles.btnContent}>{children}</div>
      </button>
    </div>
  );
};

export default Button;
