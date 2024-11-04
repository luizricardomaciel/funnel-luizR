import React from "react";
import ReactDOM from "react-dom";
import styles from "./Form.module.css";
import closeIcon from "../../../assets/close-icon.svg";
import closeIconBlack from "../../../assets/close-icon-black.svg";

function Form({ show, onClose }) {
  if (!show) {
    document.body.classList.remove("noScroll");
    return null;
  } else {
    document.body.classList.add("noScroll");
  }

  return ReactDOM.createPortal(
    <div className={styles.overlayFrom}>
      <div className={styles.contentForm}>
        <button onClick={onClose}>
          <img
            className={styles.iconWhite}
            src={closeIcon}
            alt="botão de fechar o formulário"
          />
          <img
            className={styles.iconBlack}
            src={closeIconBlack}
            alt="botão de fechar o formulário"
          />
        </button>
        <div className={styles.text}>
          <h2>Preencha o formulário abaixo</h2>
        </div>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="82a70b19-4dac-4142-828f-b9bb5331c2d5"
          />
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome:"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu melhor e-mail:"
            required
          />
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            placeholder="Whatsapp:"
            required
          />
          <input
            type="submit"
            value="Garantir minha vaga"
            className={styles.btnForms}
          />
          <input
            type="hidden"
            name="redirect"
            value="http://localhost:5173/obrigado"
          ></input>
        </form>
      </div>
    </div>,
    document.body
  );
}

export default Form;
