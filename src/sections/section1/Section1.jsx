import { useTranslation } from "react-i18next";
import style from "./SectionStyles.module.css";
import AnimatedElement from "../AnimatedElement";
import cell from "../../assets/celular-funnil 1.png";
import TechnicalButton from "./TechnicalButton";

function Section1() {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={style.section01}>
      <AnimatedElement />
      <div className={style.container}>
        <div className={style.leftArea} data-aos="fade-right">
          <div className={style.badge}>
            <span>Dev Senior & UI Architect</span>
          </div>
          <h1>{t("section1.title")}</h1>
          <p>{t("section1.description")}</p>
          
          <div className={style.ctaWrapper}>
            <TechnicalButton onClick={() => scrollToSection("section4")}>
              {t("section1.button")}
            </TechnicalButton>
          </div>
        </div>
        
        <div className={style.rightArea}>
          <div className={style.heroImageContainer}>
            <img
              src={cell}
              alt="UI/UX Showcase"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            {/* Elementos Decorativos Ativos */}
            <div className={`${style.orbit} ${style.orbit1}`}></div>
            <div className={`${style.orbit} ${style.orbit2}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;