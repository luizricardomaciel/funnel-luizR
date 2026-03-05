import styles from "./Section5.module.css";

const ProjectCard = ({ href, image, title, aos }) => {
  return (
    <div className={styles.box} data-aos={aos}>
      <div className={styles.cardContainer}>
        <div className={styles.canvas}>
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`${styles.tracker} ${styles[`tr${i + 1}`]}`}></div>
          ))}
          <div className={styles.cardBody}>
            <a href={href} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <img src={image} alt={title} className={styles.cardImage} />
              <div className={styles.cardGlow}></div>
            </a>
          </div>
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default ProjectCard;
