import styles from "./SectionStyles.module.css";

const TechnicalButton = ({ children, onClick, href, className = "" }) => {
  const content = (
    <div className={styles.uiverseWrapper}>
      <div className={styles.wrapper}>
        <span>{children}</span>
        <div className={`${styles.circle} ${styles.circle12}`}></div>
        <div className={`${styles.circle} ${styles.circle11}`}></div>
        <div className={`${styles.circle} ${styles.circle10}`}></div>
        <div className={`${styles.circle} ${styles.circle9}`}></div>
        <div className={`${styles.circle} ${styles.circle8}`}></div>
        <div className={`${styles.circle} ${styles.circle7}`}></div>
        <div className={`${styles.circle} ${styles.circle6}`}></div>
        <div className={`${styles.circle} ${styles.circle5}`}></div>
        <div className={`${styles.circle} ${styles.circle4}`}></div>
        <div className={`${styles.circle} ${styles.circle3}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
      </div>
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

export default TechnicalButton;
