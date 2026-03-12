import { useState, useEffect, useRef } from "react";
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
  
  // Refs para detectar cliques fora dos seletores de idioma
  const langSelectorRef = useRef(null);
  const langMobileRef = useRef(null);

  const toggleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    
    if (newMenuState) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      // Fecha o seletor de idioma
      setLangSelectorOpen(false);
      
      // Fecha o menu principal mobile e libera o scroll
      setMenuOpen(false);
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      
      // Atualiza a URL
      const url = new URL(window.location);
      url.searchParams.set("lang", lng);
      window.history.replaceState({}, "", url);
    });
  };

  // Encontra a linguagem ativa
  const currentLang = languages.find(lang => i18n.language && i18n.language.startsWith(lang.code)) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica se o clique foi fora do seletor desktop E fora do seletor mobile
      const clickedOutsideDesktop = langSelectorRef.current && !langSelectorRef.current.contains(event.target);
      const clickedOutsideMobile = langMobileRef.current && !langMobileRef.current.contains(event.target);

      if (clickedOutsideDesktop && clickedOutsideMobile) {
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    
    // Ao clicar em um link, fecha o menu e restaura o scroll
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    setMenuOpen(false);
  };

  return (
    <header id="header">
      <div className={styles.container}>
        <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); scrollToSection("header"); }}>
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
            
            {/* Seletor de Idioma Desktop */}
            <div className={styles.langSelector} ref={langSelectorRef}>
              <button
                className={styles.langButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setLangSelectorOpen(!langSelectorOpen);
                }}
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
                href="#section2"
                onClick={() => scrollToSection("section2")}
              >
                {t("header.howItWorks")}
              </a>
            </li>
            <li>
              <a href="#section6" onClick={() => scrollToSection("section6")}>
                {t("header.faq")}
              </a>
            </li>
            <li>
              <a href="#section3" onClick={() => scrollToSection("section3")}>
                {t("header.aboutMe")}
              </a>
            </li>
            <li>
              <a
                href="#section4"
                onClick={() => scrollToSection("section4")}
                className={`btn-primary ${styles.actionMobile}`}
              >
                {t("header.hireNow")}
              </a>
            </li>

            {/* Seletor de Idioma Mobile */}
            <div className={styles.langMobile} ref={langMobileRef}>
              <button
                className={styles.langButtonMobile}
                onClick={(e) => {
                  e.stopPropagation();
                  setLangSelectorOpen(!langSelectorOpen);
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img src={currentLang.flag} alt={currentLang.name} />
                  <span>{currentLang.name}</span>
                </div>
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