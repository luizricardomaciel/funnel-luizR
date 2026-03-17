import PropTypes from "prop-types";
import styles from "./SectionStyles.module.css";

const TechnicalButton = ({ children, onClick, href, className = "" }) => {
  const content = (
    <div className={styles.wrapper}>
      <span>{children}</span>
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>
      <div className={`${styles.circle} ${styles.circle3}`}></div>
    </div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${styles.uiverse} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${styles.uiverse} ${className}`}>
      {content}
    </button>
  );
};

TechnicalButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default TechnicalButton;