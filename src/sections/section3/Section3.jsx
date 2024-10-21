import React from "react";
import styles from "./SectionStyles.module.css";
import whats from "../../assets/whatsapp-icon.svg";
import whatsColor from "../../assets/whatsColor-icon.svg";
import criador from "../../assets/foto pro 1.png";

function Section3() {
  return (
    <section id="section3">
      <div className={styles.boxImage}>
        <img
          src={criador}
          alt="Foto do criador/programador do site"
          title="foto do programador com sua noiva"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h1>
              Luiz <br /> Ricardo.
            </h1>
          </div>
          <div className={styles.info}>
            <p>
              Meu nome é Thiago Finch e sou internet marketer e Nômade Digital
              desde 2013. Descobri estratégias que me fizeram milionário em
              2016, aos 21 anos, e de lá pra cá tenho aumentado cada vez mais
              meu patrimônio, ano a ano.
            </p>
            <p>
              Clique abaixo e garanta o seu acesso por um ano a um dos melhores
              Close Friends (stories de melhores amigos) do Brasil.
            </p>
            <a href="" className="btn-primary">
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
        </div>
      </div>
    </section>
  );
}

export default Section3;
