import React from "react";
import styles from "./Section5.module.css";
import neon from "../../assets/neon-project.png";
import blizzard from "../../assets/blizzard=project.png";
import wireframe from "../../assets/wireframe-project.png";

function Section5() {
  return (
    <section>
      <div className={styles.container}>
        <h2>Veja alguns projetos que desenvolvi</h2>
        <div className={styles.content}>
          <div className={styles.box}>
            <a href="#">
              <img src={neon} alt="home page banco neon" />
            </a>
            <h3>
              projeto <br /> NEON
            </h3>
          </div>
          <div className={styles.box}>
            <a href="#">
              <img src={blizzard} alt="home page banco neon" />
            </a>
            <h3>
              projeto <br /> Blizzard
            </h3>
          </div>
          <div className={styles.box}>
            <a href="#">
              <img src={wireframe} alt="home page banco neon" />
            </a>
            <h3>
              projeto <br /> wireframe
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
