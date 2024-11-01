import React from "react";
import style from "./Section2Styles.module.css";
import engrenagem from "../../assets/engrenagem-icon.svg";
import graphic from "../../assets/grafico-icon.svg";
import monitor from "../../assets/monitor-icon.svg";
import Swiper from "./swiper/Slide";
// import AnimatedElement from "../AnimatedElement";

function Section2() {
  const scrollToSection = (id) => {
    event.preventDefault();
    document
      .getElementById(id)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <section id="section2">
      {/* <AnimatedElement /> */}
      <div className={style.container}>
        <div className={style.text}>
          <h2>
            O que faz com que meus sites se destaquem e sejam de outro nível?
          </h2>
        </div>
        <div className={style.bottom}>
          <div className={style.leftArea}>
            <Swiper />
            <a
              href=""
              onClick={() => scrollToSection("section5")}
              className="btn-primary"
            >
              <h3>Ver projetos</h3>
            </a>
          </div>
          <div className={style.rightArea}>
            <ul>
              <li>
                <div className={style.textTop}>
                  <div className={style.icon}>
                    <img src={engrenagem} alt="programador web sob medida" />
                  </div>
                  <h3>Desenvolvimento Sob Medida</h3>
                </div>
                <div className={style.textBot}>
                  <p>
                    Ao contrário de muitos que usam templates prontos e não são
                    verdadeiros programadores, eu crio seu site do zero,
                    refletindo a essência do seu negócio e garantindo um
                    resultado único e personalizado.
                  </p>
                </div>
              </li>
              <li>
                <div className={style.textTop}>
                  <div className={style.icon}>
                    <img src={graphic} alt="programador web sob medida" />
                  </div>
                  <h3>SEO Avançado</h3>
                </div>
                <div className={style.textBot}>
                  <p>
                    Utilizo técnicas avançadas de SEO(Search Engine
                    Optimization) dentro do código para garantir que cada site
                    esteja otimizado e alinhado com as melhores práticas do
                    mercado.
                  </p>
                </div>
              </li>
              <li>
                <div className={style.textTop}>
                  <div className={style.icon}>
                    <img src={monitor} alt="programador web sob medida" />
                  </div>
                  <h3>Experiência de Usuário</h3>
                </div>
                <div className={style.textBot}>
                  <p>
                    Foco na criação de interfaces intuitivas e agradáveis,
                    garantindo que os visitantes tenham uma experiência fluida e
                    satisfatória.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
