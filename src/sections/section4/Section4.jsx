import { useState } from "react";
import styles from "./Section4.module.css";
import AnimatedElement from "../AnimatedElement";
import { useTranslation } from "react-i18next";

import Form from "./Form/Form";
import TechnicalButton from "../section1/TechnicalButton";
import GlowButton from "../../components/GlowButton/GlowButton";

function Section4() {
  const { t } = useTranslation();
  const [openForm, setForm] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const plans = ["maintenance", "pro", "institutional"];

  return (
    <section id="section4" className={styles.sectionSection}>
      <AnimatedElement />
      <div className={styles.container}>
        <h2 className="text-shine" data-aos="fade-up">{t("section4.title")}</h2>
        <div className={styles.content}>
          {plans.map((id, index) => (
            <div key={id} className={styles.animate} data-aos="fade-up" data-aos-delay={index * 100}>
              <div 
                className={`${styles.card} ${id === 'pro' ? styles.proCard : ''}`}
                onMouseMove={handleMouseMove}
              >
                <div className={`${styles.title} ${id === 'pro' ? styles.titleClick : ''}`}>
                  <p>{t(`section4.plans.${id}.name`)}</p>
                </div>
                <div className={styles.bot}>
                  <p>{t(`section4.plans.${id}.desc`)}</p>
                  <div className={styles.value}>
                    <h3>{t(`section4.plans.${id}.price`)}</h3>
                    <p>{t(`section4.plans.${id}.cash`)}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 'auto' }}>
                    {id === 'pro' ? (
                      <GlowButton onClick={() => setForm(true)}>
                        {t(`section4.plans.${id}.button`)}
                      </GlowButton>
                    ) : (
                      <TechnicalButton onClick={() => setForm(true)}>
                        {t(`section4.plans.${id}.button`)}
                      </TechnicalButton>
                    )}
                  </div>
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
