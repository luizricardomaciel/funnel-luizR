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
            <a href="https://home-page-banco-neon.vercel.app/" target="_blank">
              <img src={neon} alt="home page banco neon" />
            </a>
            <h3>
              Projeto <br /> NEON
            </h3>
          </div>
          <div className={styles.box}>
            <a href="https://project-blizzard.vercel.app/" target="_blank">
              <img src={blizzard} alt="home page banco neon" />
            </a>
            <h3>
              Projeto <br /> Blizzard
            </h3>
          </div>
          <div className={styles.box}>
            <a
              href="https://landing-page-wire-frame.vercel.app/"
              target="_blank"
            >
              <img src={wireframe} alt="home page banco neon" />
            </a>
            <h3>
              Projeto <br /> wireframe
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
