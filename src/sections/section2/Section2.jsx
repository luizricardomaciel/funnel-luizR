
import style from "./Section2Styles.module.css";
import engrenagem from "../../assets/engrenagem-icon.svg";
import graphic from "../../assets/grafico-icon.svg";
import monitor from "../../assets/monitor-icon.svg";
import Swiper from "./swiper/Slide";
import AnimatedElement from "../AnimatedElement";
import { useTranslation } from "react-i18next";

function Section2() {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    event.preventDefault();
    document
      .getElementById(id)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <section id="section2">
      <AnimatedElement />
      <div className={style.container}>
        <div className={style.text} data-aos="fade-right">
          <h2>{t("section2.title")}</h2>
        </div>
        <div className={style.bottom}>
          <div className={style.leftArea} data-aos="fade-up">
            <Swiper />
            <a
              href=""
              onClick={() => scrollToSection("section5")}
              className="btn-primary"
            >
              {t("section2.projectsButton")}
            </a>
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
