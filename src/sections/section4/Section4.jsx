import { useState } from "react";
import styles from "./Section4.module.css";
import AnimatedElement from "../AnimatedElement";
import { useTranslation } from "react-i18next";

import Form from "./Form/Form";

function Section4() {
  const { t } = useTranslation();
  const [openForm, setForm] = useState(false);

  const plans = ["maintenance", "pro", "institutional"];

  return (
    <section id="section4">
      <AnimatedElement />
      <div className={styles.container}>
        <h2 data-aos="fade-left">{t("section4.title")}</h2>
        <div className={styles.content}>
          {plans.map((id, index) => (
            <div key={id} className={styles.animate} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={`${styles.card} ${id === 'pro' ? styles.proCard : ''}`}>
                <div className={`${styles.title} ${id === 'pro' ? styles.titleClick : ''}`}>
                  <p>{t(`section4.plans.${id}.name`)}</p>
                </div>
                <div className={styles.bot}>
                  <p>{t(`section4.plans.${id}.desc`)}</p>
                  <div className={styles.value}>
                    <h3>{t(`section4.plans.${id}.price`)}</h3>
                    <p>{t(`section4.plans.${id}.cash`)}</p>
                  </div>
                  <button className="btn-primary" onClick={() => setForm(true)}>
                    {t(`section4.plans.${id}.button`)}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Form show={openForm} onClose={() => setForm(false)} />
    </section>
  );
}

export default Section4;
