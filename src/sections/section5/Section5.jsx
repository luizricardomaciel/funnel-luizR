import React from "react";
import styles from "./Section5.module.css";
import neon from "../../assets/neon-project.png";
import blizzard from "../../assets/blizzard=project.png";
import wireframe from "../../assets/wireframe-project.png";
import fortalecendoSuaFe from "../../assets/fortalecendo-sua-fe-small.png";
import AnimatedElement from "../AnimatedElement";

function Section5() {
  return (
    <section id="section5">
      <AnimatedElement />
      <div className={styles.container}>
        <div data-aos="fade-left">
          <h2>Veja alguns projetos que desenvolvi</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.box} data-aos="fade-right">
            <a href="https://home-page-banco-neon.vercel.app/" target="_blank">
              <img src={neon} alt="home page banco neon" />
            </a>
            <h3>
              Projeto <br /> NEON
            </h3>
          </div>
          <div className={styles.box} data-aos="fade-right">
            <a href="https://fortalecendosuafe.com.br/" target="_blank">
              <img src={fortalecendoSuaFe} alt="Landing Page profissional" />
            </a>
            <h3>
              Projeto <br /> Landing Page
            </h3>
          </div>
          <div className={styles.box} data-aos="fade-left">
            <a href="https://project-blizzard.vercel.app/" target="_blank">
              <img src={blizzard} alt="home page banco neon" />
            </a>
            <h3>
              Projeto <br /> Blizzard
            </h3>
          </div>
          <div className={styles.box} data-aos="fade-right">
            <a href="https://landing-page-wire-frame.vercel.app/" target="_blank">
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
