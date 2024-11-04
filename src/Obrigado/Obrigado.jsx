import React from "react";
import whats from "../assets/whatsapp-icon.svg";
import whatsColor from "../assets/whatsColor-icon.svg";
import styles from "./Obrigado.module.css";

function Obrigado() {
  return (
    <section className={styles.obrigado}>
      <div className={styles.content}>
        <img src="" alt="" />
        <h2>Obrigado pelo seu contato!</h2>
        <p>
          Clique no botão abaixo e fale diretamente comigo pelo WhatsApp. Seu
          sucesso está a um clique de distância!
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=5574988723538&text=Ol%C3%A1%2C+Luiz%21+Estou+interessado%28a%29+em+criar+um+site.+Podemos+conversar+mais+sobre+meu+projeto%3F+Obrigado%21&type=phone_number&app_absent=0"
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
