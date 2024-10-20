import React from "react";
import styles from "./HeaderStyles.module.css";
import logo from "../../assets/logo-icon.svg";
import logoName from "../../assets/logo-name-icon.svg";

function Header() {
  return (
    <header>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="" />
          <img src={logoName} alt="" />
        </a>
        <nav>
          <div className={styles.mobileMenu}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
          <ul className={styles.navList}>
            <li>
              <a href="#">Como funciona</a>
            </li>
            <li>
              <a href="#">Tire suas dúvidas</a>
            </li>
            <li>
              <a href="#">Fale comigo</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
