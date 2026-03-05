import { useState, Fragment } from "react";
import styles from "./Section6.module.css";
import arrow from "../../assets/arrow-icon.svg";
import whats from "../../assets/whatsapp-icon.svg";
import { useTranslation } from "react-i18next";

function Section6() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = t("section6.questions", { returnObjects: true });

  return (
    <section id="section6" className={styles.section6}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.faq}>
              <p>FAQ</p>
            </div>
            <h2>{t("section6.title")}</h2>
          </div>
          <div className={styles.right}>
            {questions.map((item, index) => (
              <div
                key={index}
                className={`${styles.question} ${
                  activeIndex === index ? styles.active : ""
                }`}
              >
                <div
                  onClick={() => handleClick(index)}
                  className={`${styles.content}`}
                >
                  <p>{item.q}</p>
                  <img src={arrow} alt="icone de seta indicando mais conteudo" />
                </div>
                {activeIndex === index && (
                  <p className={styles.answer}>
                    {item.a.split("\n\n").map((text, i) => (
                      <Fragment key={i}>
                        {text}
                        {i < item.a.split("\n\n").length - 1 && <br />}
                        {i < item.a.split("\n\n").length - 1 && <br />}
                      </Fragment>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bot}>
          <h3 className={styles.title}>{t("section6.footer.title")}</h3>
          <p>{t("section6.footer.desc")}</p>
          <a
            href={t("thanks.whatsappLink")}
            target="_blank"
            className="btn-primary-white"
          >
            <div className={styles.img}>
              <img
                src={whats}
                alt="icone de WhatsApp em svg"
                title="icone whatsapp"
                className={styles.whats}
              />
            </div>
            {t("section6.footer.button")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section6;
