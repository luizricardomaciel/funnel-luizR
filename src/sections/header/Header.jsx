import { useState, useEffect } from "react";
import styles from "./HeaderStyles.module.css";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "pt", flag: "https://flagcdn.com/w40/br.png", name: "Português" },
  { code: "en", flag: "https://flagcdn.com/w40/us.png", name: "English" },
  { code: "fr", flag: "https://flagcdn.com/w40/fr.png", name: "Français" },
  { code: "de", flag: "https://flagcdn.com/w40/de.png", name: "Deutsch" },
  { code: "it", flag: "https://flagcdn.com/w40/it.png", name: "Italiano" }
];

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langSelectorOpen, setLangSelectorOpen] = useState(false);

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
    setLangSelectorOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Close language selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const langSelector = document.querySelector(`.${styles.langSelector}`);
      if (langSelector && !langSelector.contains(event.target)) {
        setLangSelectorOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <div className={styles.langSelector}>
              <button
                className={styles.langButton}
                onClick={() => setLangSelectorOpen(!langSelectorOpen)}
              >
                <img src={currentLang.flag} alt={currentLang.name} />
                <span>{currentLang.name}</span>
                <svg
                  className={`${styles.arrowIcon} ${langSelectorOpen ? styles.arrowOpen : ""}`}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {langSelectorOpen && (
                <div className={styles.langDropdown}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={i18n.language === lang.code ? styles.activeLang : ""}
                    >
                      <img src={lang.flag} alt={lang.name} />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
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
                className={styles.langButtonMobile}
                onClick={() => setLangSelectorOpen(!langSelectorOpen)}
              >
                <img src={currentLang.flag} alt={currentLang.name} />
                <span>{currentLang.name}</span>
                <svg
                  className={`${styles.arrowIcon} ${langSelectorOpen ? styles.arrowOpen : ""}`}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {langSelectorOpen && (
                <div className={styles.langDropdownMobile}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={i18n.language === lang.code ? styles.activeLang : ""}
                    >
                      <img src={lang.flag} alt={lang.name} />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
