import React from "react";
import style from "./SectionStyles.module.css";
import cell from "../../assets/celular-funnil 1.png";
// import AnimatedElement from "../AnimatedElement";

const scrollToSection = (id) => {
  document
    .getElementById(id)
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

function Section1() {
  return (
    <section className={style.section01}>
      {/* <AnimatedElement /> */}
      <div className={style.container}>
        <div className={style.leftArea}>
          <h1>
            Transforme o seu negócio com um site profissional de alta qualidade!
          </h1>
          <p>
            Aproveite esta oportunidade única e contrate meus serviços de
            desenvolvimento web para levar sua presença online ao próximo nível.
            Entre em contato agora e garanta o seu site exclusivo!
          </p>
          <a
            href="#"
            className="btn-primary"
            onClick={() => scrollToSection("section4")}
          >
            <h3>Contrate Agora</h3>
          </a>
        </div>
        <div className={style.rightArea}>
          <img src={cell} alt="programador alta performace" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
