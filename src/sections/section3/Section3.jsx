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
              Olá, sou Luiz Ricardo, Programador WEB especializado em criar
              experiências digitais únicas para impulsionar o seu negócio!
              Diferente de muitos designers que usam modelos prontos, eu
              desenvolvo cada site do zero, 100% personalizado para refletir a
              identidade e os objetivos da sua marca..
            </p>
            <p>
              <strong>Por que escolher o meu serviço?</strong> Porque você terá
              um site que se destaca da concorrência, totalmente otimizado e
              responsivo, feito sob medida para aumentar suas vendas online!{" "}
              <br />
              <strong>Vagas Limitadas: Apenas 2 Projetos Mensais!</strong>{" "}
              Garanta seu lugar agora e invista em uma presença online de alto
              impacto que realmente converte!
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
