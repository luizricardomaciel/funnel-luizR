import styles from "./SectionStyles.module.css";

const HeroEffect = ({ children }) => {
  return (
    <div className={styles.heroBoxWrapper}>
      <div className={styles.selectionFrame}>
        <div className={`${styles.dot} ${styles.tl}`}></div>
        <div className={`${styles.dot} ${styles.tr}`}></div>
        <div className={`${styles.dot} ${styles.bl}`}></div>
        <div className={`${styles.dot} ${styles.br}`}></div>
        
        <div className={styles.cursorContainer}>
          <svg
            className={styles.heroCursor}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.65376 12.3825L5.46026 3.16126L13.5734 7.61225L9.64269 8.25333L7.38212 11.6623L5.65376 12.3825Z"
              fill="#2563EB"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
          <div className={styles.userTag}>Luiz Ricardo</div>
        </div>
      </div>
      <div className={styles.heroContent}>
        {children}
      </div>
    </div>
  );
};

export default HeroEffect;
