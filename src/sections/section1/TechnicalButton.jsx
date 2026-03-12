import styles from "./SectionStyles.module.css";

const TechnicalButton = ({ children, onClick, href, className = "" }) => {
  const renderCircles = () => (
    <>
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>
      <div className={`${styles.circle} ${styles.circle3}`}></div>
      <div className={`${styles.circle} ${styles.circle4}`}></div>
      <div className={`${styles.circle} ${styles.circle5}`}></div>
      <div className={`${styles.circle} ${styles.circle6}`}></div>
      <div className={`${styles.circle} ${styles.circle7}`}></div>
      <div className={`${styles.circle} ${styles.circle8}`}></div>
      <div className={`${styles.circle} ${styles.circle9}`}></div>
      <div className={`${styles.circle} ${styles.circle10}`}></div>
      <div className={`${styles.circle} ${styles.circle11}`}></div>
      <div className={`${styles.circle} ${styles.circle12}`}></div>
    </>
  );

  const wrapperContent = (
    <div className={styles.wrapper}>
      <span>{children}</span>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        onClick={onClick} 
        className={`${styles.uiverse} ${className}`}
      >
        {renderCircles()}
        {wrapperContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${styles.uiverse} ${className}`}>
      {renderCircles()}
      {wrapperContent}
    </button>
  );
};

export default TechnicalButton;