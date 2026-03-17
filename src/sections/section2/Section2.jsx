import style from "./Section2Styles.module.css";
import engrenagem from "../../assets/engrenagem-icon.svg";
import graphic from "../../assets/grafico-icon.svg";
import monitor from "../../assets/monitor-icon.svg";
import Swiper from "./swiper/Slide";
import AnimatedElement from "../AnimatedElement";
import { useTranslation } from "react-i18next";
import TechnicalButton from "../section1/TechnicalButton";

function Section2() {
  const { t } = useTranslation();

  // AGORA RECEBE O EVENTO E PREVINE O REFRESH CORRETAMENTE
  const scrollToSection = (e, id) => {
    if (e) e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <section id="section2" className={style.sectionSection}>
      <AnimatedElement />
      <div className={style.container}>
        <div className={style.text} data-aos="fade-right">
          <h2>{t("section2.title")}</h2>
        </div>
        <div className={style.bottom}>
          <div className={style.leftArea} data-aos="fade-up">
            <Swiper />
            <div className={style.btnWrapper}>
              <TechnicalButton
                onClick={(e) => scrollToSection(e, "section5")}
              >
                {t("section2.projectsButton")}
              </TechnicalButton>
            </div>
          </div>
          <div className={style.rightArea} data-aos="fade-left">
            <ul>
              <li>
                <div className={style.textTop}>
                  <div className={style.icon}>
                    <img src={engrenagem} alt="programador web sob medida" />
                  </div>
                  <h3>{t("section2.features.tailored.title")}</h3>
                </div>
                <div className={style.textBot}>
                  <p>{t("section2.features.tailored.description")}</p>
                </div>
              </li>
              <li>
                <div className={style.textTop}>
                  <div className={style.icon}>
                    <img src={graphic} alt="programador web sob medida" />
                  </div>
                  <h3>{t("section2.features.seo.title")}</h3>
                </div>
                <div className={style.textBot}>
                  <p>{t("section2.features.seo.description")}</p>
                </div>
              </li>
              <li>
                <div className={style.textTop}>
                  <div className={style.icon}>
                    <img src={monitor} alt="programador web sob medida" />
                  </div>
                  <h3>{t("section2.features.ux.title")}</h3>
                </div>
                <div className={style.textBot}>
                  <p>{t("section2.features.ux.description")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;