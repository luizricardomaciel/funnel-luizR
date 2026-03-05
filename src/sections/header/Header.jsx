import { useState } from "react";
import styles from "./HeaderStyles.module.css";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const url = new URL(window.location);
    url.searchParams.set("lang", lng);
    window.history.replaceState({}, "", url);
  };

  const scrollToSection = (id) => {
    event.preventDefault();
    document
      .getElementById(id)
      .scrollIntoView({ block: "start", behavior: "smooth" });
    document.body.classList.remove("noScroll");
    setMenuOpen(false);
  };

  return (
    <header id="header">
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <h2>
            Luiz <br /> Ricardo.
          </h2>
        </a>
        <nav>
          <div
            className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
          <ul className={`${styles.navList} ${menuOpen ? styles.active : ""}`}>
            <li className={styles.logoMobile}>
              <h1>
                Luiz <br /> Ricardo.
              </h1>
            </li>
            <div className={styles.langDesktop}>
              <button
                onClick={() => changeLanguage("pt")}
                className={i18n.language === "pt" ? styles.activeLang : ""}
              >
                <img src="https://flagcdn.com/w40/br.png" alt="PT-BR" />
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={i18n.language === "en" ? styles.activeLang : ""}
              >
                <img src="https://flagcdn.com/w40/us.png" alt="EN" />
              </button>
            </div>
            <li>
              <a
                href=""
                className={` ${menuOpen ? "" : ""}`}
                onClick={() => scrollToSection("section2")}
              >
                {t("header.howItWorks")}
              </a>
            </li>
            <li>
              <a href="" onClick={() => scrollToSection("section6")}>
                {t("header.faq")}
              </a>
            </li>
            <li>
              <a href="" onClick={() => scrollToSection("section3")}>
                {t("header.aboutMe")}
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={() => scrollToSection("section4")}
                className={`btn-primary ${styles.actionMobile}`}
              >
                {t("header.hireNow")}
              </a>
            </li>
            <div className={styles.langMobile}>
              <button
                onClick={() => changeLanguage("pt")}
                className={i18n.language === "pt" ? styles.activeLang : ""}
              >
                <img src="https://flagcdn.com/w40/br.png" alt="PT-BR" />
                <span>Português</span>
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={i18n.language === "en" ? styles.activeLang : ""}
              >
                <img src="https://flagcdn.com/w40/us.png" alt="EN" />
                <span>English</span>
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
