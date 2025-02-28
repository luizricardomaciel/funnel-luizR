import React, { useState } from "react";
import styles from "./Section4.module.css";
import AnimatedElement from "../AnimatedElement";

import Form from "./Form/Form";

function Section4() {
  const [openForm, setForm] = useState(false);

  return (
    <section id="section4">
      <AnimatedElement />
      <div className={styles.container}>
        <h2 data-aos="fade-left">Escolha o Plano Perfeito para o Sucesso do Seu Site</h2>
        <div className={styles.content}>
          <div className={styles.animate} data-aos="fade-up">
            <div className={styles.card}>
              <div className={styles.title}>
                <p>Manutenção Anual</p>
              </div>
              <div className={styles.bot}>
                <p>
                  Mantenha seu site sempre online e seguro com nosso plano de manutenção
                  anual. Garanta sua vaga agora e evite problemas!
                </p>
                <div className={styles.value}>
                  <h3>12x R$99,70</h3>
                  <p>à vista R$997,00</p>
                </div>
                <button className="btn-primary" onClick={() => setForm(true)}>
                  <h3>Contrate agora</h3>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.animate} data-aos="fade-down">
            <div className={styles.card}>
              <div className={`${styles.title} ${styles.titleClick}`}>
                <p>Site PRO</p>
              </div>
              <div className={styles.bot}>
                <p>Expanda seus negócios online com um site profissional e otimizado.</p>
                <div className={styles.value}>
                  <h3>12x R$55,99</h3>
                  <p>à vista R$597,00</p>
                </div>
                <button className="btn-primary" onClick={() => setForm(true)}>
                  <h3>Última vaga para este mês!</h3>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.animate} data-aos="fade-up">
            <div className={styles.card}>
              <div className={styles.title}>
                <p>Site institucional</p>
              </div>
              <div className={styles.bot}>
                <p>
                  Construa uma imagem sólida para sua empresa. Últimas vagas para este
                  plano!
                </p>
                <div className={styles.value}>
                  <h3>12x R$119,70</h3>
                  <p>à vista R$1.197,00</p>
                </div>
                <button className="btn-primary" onClick={() => setForm(true)}>
                  <h3>Última vaga para este mês!</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form show={openForm} onClose={() => setForm(false)} />
    </section>
  );
}

export default Section4;
