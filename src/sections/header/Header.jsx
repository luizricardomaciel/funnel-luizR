import React, { useState } from "react";
import styles from "./HeaderStyles.module.css";
import logo from "../../assets/logo-icon.svg";
import logoName from "../../assets/logo-name-icon.svg";

const scrollToSection = (id) => {
  document
    .getElementById(id)
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  };

  return (
    <header>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="" />
          <img src={logoName} alt="" />
        </a>
        <nav>
          <div className={styles.mobileMenu} onClick={toggleMenu}>
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
            <li>
              <a href="#" onClick={() => scrollToSection("section2")}>
                Como funciona
              </a>
            </li>
            <li>
              <a href="#">Tire suas dúvidas</a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection("section3")}>
                Fale comigo
              </a>
            </li>
            <li>
              <a href="#" className={`btn-primary ${styles.actionMobile}`}>
                <h3>Contratar agora</h3>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
