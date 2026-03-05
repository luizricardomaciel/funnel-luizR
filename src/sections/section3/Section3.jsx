
import styles from "./SectionStyles.module.css";
import whats from "../../assets/whatsapp-icon.svg";
import criador from "../../assets/foto pro 1.png";
import AnimatedElement from "../AnimatedElement";
import { useTranslation } from "react-i18next";

function Section3() {
  const { t } = useTranslation();

  return (
    <section id="section3">
      <AnimatedElement />
      <div className={styles.container}>
        <div className={styles.left} data-aos="fade-right">
          <div className={styles.title}>
            <h1>
              Luiz <br /> Ricardo.
            </h1>
          </div>
          <div className={styles.info}>
            <p>{t("section3.intro")}</p>
            <p>
              <strong>{t("section3.whyMe")}</strong> {t("section3.reasons")}
            </p>
            <p>
              <strong>{t("section3.limited")}</strong> {t("section3.limitedDesc")}
            </p>
            <a
              href={t("thanks.whatsappLink")}
              target="_blank"
              className="btn-primary"
            >
              <div className={styles.img}>
                <img
                  src={whats}
                  alt="icone de WhatsApp em svg"
                  title="icone whatsapp"
                  className={styles.whats}
                />
              </div>
              {t("section3.contact")}
            </a>
          </div>
        </div>
        <div className={styles.boxImage} data-aos="fade-left" data-aos-delay="200">
          <img
            src={criador}
            alt="Foto do criador/programador do site"
            title="foto do programador"
          />
        </div>
      </div>
    </section>
  );
}

export default Section3;
