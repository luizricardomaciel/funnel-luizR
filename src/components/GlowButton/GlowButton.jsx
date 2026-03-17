import PropTypes from "prop-types";
import styles from "./GlowButton.module.css";

const GlowButton = ({ children, onClick, className = "" }) => {
  return (
    <div className={`${styles.buttonContainer} ${className}`}>
      <button className={styles.realButton} onClick={onClick}></button>
      <div className={styles.backdrop}></div>
      <div className={`${styles.spin} ${styles.spinBlur}`}></div>
      <div className={`${styles.spin} ${styles.spinIntense}`}></div>
      
      <div className={styles.buttonBorder}>
        <div className={`${styles.spin} ${styles.spinInside}`}></div>
        <div className={styles.button}>{children}</div>
      </div>
    </div>
  );
};

GlowButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default GlowButton;
