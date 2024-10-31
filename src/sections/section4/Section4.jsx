import React from "react";
import styles from "./Section4.module.css";

function Section4() {
  return (
    <section id="section4">
      <div className={styles.container}>
        <h2>Escolha o Plano Perfeito para o Sucesso do Seu Site</h2>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.title}>
              <p>Manutenção</p>
            </div>
            <div className={styles.bot}>
              <p>para quem já tem um site</p>
              <div className={styles.value}>
                <h3>12x R$56,94</h3>
                <p>à vista R$597,00</p>
              </div>
              <a href="#" className="btn-primary">
                <h3>Contrate Agora</h3>
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={`${styles.title} ${styles.titleClick}`}>
              <p>Site PRO</p>
            </div>
            <div className={styles.bot}>
              <p>Solução ideal para alavancar seu negócio</p>
              <div className={styles.value}>
                <h3>R$1.197,00</h3>
                <p>à vista R$1088,00</p>
              </div>
              <a href="#" className="btn-primary">
                <h3>Contrate Agora</h3>
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>
              <p>Site institucional</p>
            </div>
            <div className={styles.bot}>
              <p>A Solução Completa para Impulsionar sua Presença Online</p>
              <div className={styles.value}>
                <h3>R$2.997,00</h3>
                <p>à vista R$2.847,15</p>
              </div>
              <a href="#" className="btn-primary">
                <h3>Contrate Agora</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
