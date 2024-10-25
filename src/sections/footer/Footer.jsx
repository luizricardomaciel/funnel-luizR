import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <a href="#">
              <h2>
                Luiz <br /> Ricardo.
              </h2>
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="">Início</a>
              </li>
              <li>
                <a href="">Como funciona</a>
              </li>
              <li>
                <a href="">Projetos</a>
              </li>
              <li>
                <a href="">Quem sou eu</a>
              </li>
              <li>
                <a href="">Contrate agora</a>
              </li>
            </ul>
          </nav>
        </div>
        <p className={styles.copy}>Copyright ©, Luiz Ricardo. </p>
      </div>
    </section>
  );
}

export default Footer;
