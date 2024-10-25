import React, { useState } from "react";
import styles from "./Section6.module.css";
import arrow from "../../assets/arrow-icon.svg";
import whats from "../../assets/whatsapp-icon.svg";
import whatsColor from "../../assets/whatsColor-icon.svg";

function Section6() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section6}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.faq}>
              <p>FAQ</p>
            </div>
            <h2>Perguntas frequentes</h2>
          </div>
          <div className={styles.right}>
            <div
              className={`${styles.question} ${
                activeIndex === 0 ? styles.active : ""
              }`}
            >
              <div
                onClick={() => handleClick(0)}
                className={` ${styles.content}`}
              >
                <p>Como receber acesso ao bônus da edição 2024?</p>
                <img src={arrow} alt="icone de seta indicando mais conteudo" />
              </div>
              {activeIndex === 0 && (
                <p className={styles.answer}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit architecto perferendis nulla sit exercitationem maxime
                  dolorem, laudantium, ducimus ea optio quisquam nesciunt eos!
                  Dicta aperiam et sequi rerum, illum iste!
                </p>
              )}
            </div>
            <div
              className={`${styles.question} ${
                activeIndex === 1 ? styles.active : ""
              }`}
            >
              <div
                onClick={() => handleClick(1)}
                className={` ${styles.content}`}
              >
                <p>Como receber acesso ao bônus da edição 2024?</p>
                <img src={arrow} alt="icone de seta indicando mais conteudo" />
              </div>
              {activeIndex === 1 && (
                <p className={styles.answer}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit architecto perferendis nulla sit exercitationem maxime
                  dolorem, laudantium, ducimus ea optio quisquam nesciunt eos!
                  Dicta aperiam et sequi rerum, illum iste!
                </p>
              )}
            </div>
            <div
              className={`${styles.question} ${
                activeIndex === 2 ? styles.active : ""
              }`}
            >
              <div
                onClick={() => handleClick(2)}
                className={` ${styles.content}`}
              >
                <p>Como receber acesso ao bônus da edição 2024?</p>
                <img src={arrow} alt="icone de seta indicando mais conteudo" />
              </div>
              {activeIndex === 2 && (
                <p className={styles.answer}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit architecto perferendis nulla sit exercitationem maxime
                  dolorem, laudantium, ducimus ea optio quisquam nesciunt eos!
                  Dicta aperiam et sequi rerum, illum iste!
                </p>
              )}
            </div>
            <div
              className={`${styles.question} ${
                activeIndex === 3 ? styles.active : ""
              }`}
            >
              <div
                onClick={() => handleClick(3)}
                className={`${styles.content}`}
              >
                <p>Como receber acesso ao bônus da edição 2024?</p>
                <img src={arrow} alt="icone de seta indicando mais conteudo" />
              </div>
              {activeIndex === 3 && (
                <p className={styles.answer}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit architecto perferendis nulla sit exercitationem maxime
                  dolorem, laudantium, ducimus ea optio quisquam nesciunt eos!
                  Dicta aperiam et sequi rerum, illum iste!
                </p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.bot}>
          <h3 className={styles.title}>Entre em contato</h3>
          <p>
            Ficou com alguma dúvida ou precisa de alguma ajuda com sua compra?
            Entre em contato com a equipe de suporte pelos canais de
            atendimento.
          </p>
          <a href="" className="btn-primary-white">
            <div className={styles.img}>
              <img
                src={whats}
                alt="icone de WhatsApp em svg"
                title="icone whatsapp"
                className={styles.whats}
              />
            </div>
            <h3>Entre em contato</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section6;
