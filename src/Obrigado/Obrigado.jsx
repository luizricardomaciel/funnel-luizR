import React from "react";
import whats from "../assets/whatsapp-icon.svg";
import whatsColor from "../assets/whatsColor-icon.svg";
import styles from "./Obrigado.module.css";

function Obrigado() {
  return (
    <section className={styles.obrigado}>
      <div className={styles.content}>
        <h2>Obrigado pelo seu contato!</h2>
        <p>
          Clique no botão abaixo e fale diretamente comigo pelo WhatsApp. Seu
          sucesso está a um clique de distância!
        </p>
        <a
          href="https://wa.me/message/MSNEX7SHDTARK1"
          target="_blank"
          className="btn-primary"
        >
          <div className={styles.img}>
            <img
              src={whats}
              alt="icone de WhatsApp em svg"
              title="icone whatsapp"
              className={styles.whats}
            />
            <img
              src={whatsColor}
              alt="icone de WhatsApp colorido"
              title="icone whatsapp"
              className={styles.whatsColor}
            />
          </div>
          <h3>Entre em contato</h3>
        </a>
      </div>
    </section>
  );
}

export default Obrigado;
