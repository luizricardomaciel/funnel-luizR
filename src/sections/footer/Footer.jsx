import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const scrollToSection = (id) => {
    event.preventDefault();
    document
      .getElementById(id)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

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
                <a href="" onClick={() => scrollToSection("header")}>
                  Início
                </a>
              </li>
              <li>
                <a href="" onClick={() => scrollToSection("section2")}>
                  Como funciona
                </a>
              </li>
              <li>
                <a href="" onClick={() => scrollToSection("section5")}>
                  Projetos
                </a>
              </li>
              <li>
                <a href="" onClick={() => scrollToSection("section3")}>
                  Quem sou eu
                </a>
              </li>
              <li>
                <a href="" onClick={() => scrollToSection("section4")}>
                  Contrate agora
                </a>
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
