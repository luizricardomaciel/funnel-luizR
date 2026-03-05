import { useTranslation } from "react-i18next";
import style from "./SectionStyles.module.css";
import cell from "../../assets/celular-funnil 1.png";
import AnimatedElement from "../AnimatedElement";

const scrollToSection = (id) => {
  document
    .getElementById(id)
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

function Section1() {
  const { t } = useTranslation();

  return (
    <section className={style.section01}>
      <AnimatedElement />
      <div className={style.container}>
        <div className={style.leftArea} data-aos="fade-right">
          <span>{t("header.home")}</span>
          <h1>{t("section1.title")}</h1>
          <p>{t("section1.description")}</p>
          <a
            href="#"
            className="btn-primary"
            onClick={() => scrollToSection("section4")}
          >
            {t("section1.button")}
          </a>
        </div>
        <div className={style.rightArea}>
          <img
            src={cell}
            alt="programador alta performace"
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;
