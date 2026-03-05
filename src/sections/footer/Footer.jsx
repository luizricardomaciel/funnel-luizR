
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    event.preventDefault();
    document
      .getElementById(id)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <a href="#">
              <h2>
                Luiz <br /> Ricardo.
              </h2>
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="" onClick={() => scrollToSection("header")}>
                  {t("header.home")}
                </a>
              </li>
              <li>
                <a href="" onClick={() => scrollToSection("section2")}>
                  {t("header.howItWorks")}
                </a>
              </li>
              <li>
                <a href="" onClick={() => scrollToSection("section5")}>
                  {t("section5.title").split(" ")[0]}
                </a>
              </li>
              <li>
                <a href="" onClick={() => scrollToSection("section3")}>
                  {t("header.aboutMe")}
                </a>
              </li>
              <li>
                <a href="" onClick={() => scrollToSection("section4")}>
                  {t("header.hireNow")}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className={styles.copy}>Copyright ©, Luiz Ricardo. </p>
      </div>
    </section>
  );
}

export default Footer;
