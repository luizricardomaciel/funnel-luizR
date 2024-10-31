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
    <section id="section6" className={styles.section6}>
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
                activeIndex === 3 ? styles.active : ""
              }`}
            >
              <div
                onClick={() => handleClick(3)}
                className={`${styles.content}`}
              >
                <p>Qual é o seu diferencial em relação aos outros?</p>
                <img src={arrow} alt="icone de seta indicando mais conteudo" />
              </div>
              {activeIndex === 3 && (
                <p className={styles.answer}>
                  Como desenvolvedor, eu crio sites de verdade, tudo em código!
                  Normalmente, outros profissionais que criam sites não são
                  programadores; eles apenas usam programas no estilo "clique e
                  arraste", e o programa gera o código automaticamente. Qual é o
                  problema disso? Limitações! Se você quiser algo personalizado,
                  não terá. Se quiser um efeito de movimento, não terá. E muitas
                  outras limitações.
                  <br /> <br />
                  Além disso, já trabalhei em grandes empresas, onde adquiri
                  vasta experiência e habilidades avançadas em desenvolvimento
                  web. Essa bagagem me permite oferecer soluções de alta
                  qualidade e personalizadas para cada cliente.
                </p>
              )}
            </div>
            <div
              className={`${styles.question} ${
                activeIndex === 0 ? styles.active : ""
              }`}
            >
              <div
                onClick={() => handleClick(0)}
                className={` ${styles.content}`}
              >
                <p>Qual é a diferença dos planos?</p>
                <img src={arrow} alt="icone de seta indicando mais conteudo" />
              </div>
              {activeIndex === 0 && (
                <p className={styles.answer}>
                  <strong>Manutenção</strong> é para aqueles que já têm um site
                  e precisam fazer pequenas alterações. <br />
                  <strong>Site Pro</strong> é para aqueles que desejam ter um
                  site profissional. <br />
                  <strong>Site institucional</strong> é um site com várias
                  páginas, perfeito para quem precisa de diferentes seções e
                  redirecionamentos, ideal para criar funis de vendas.
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
                <p>Qual plano devo escolher?</p>
                <img src={arrow} alt="icone de seta indicando mais conteudo" />
              </div>
              {activeIndex === 1 && (
                <p className={styles.answer}>
                  Se você é um profissional de direito, médico, dentista ou atua
                  em qualquer outra área como autônomo, o{" "}
                  <strong>Site Pro</strong> é para você. Mas se você precisa de
                  um site que leva a outras páginas e permite um esquema de
                  vendas avançadas, como para marketing digital, o{" "}
                  <strong>Site institucional</strong> é a escolha ideal.
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
                <p>Como é feito o site?</p>
                <img src={arrow} alt="icone de seta indicando mais conteudo" />
              </div>
              {activeIndex === 2 && (
                <p className={styles.answer}>
                  Os sites levam um tempo para serem feitos, pois eu preciso
                  saber como você deseja o site para poder personalizá-lo com a
                  sua cara. Então, eu crio um esboço do site para que você veja
                  como ele ficará completo antes mesmo de ser codificado, como
                  se fosse uma foto do seu site já pronto, porém será apenas uma
                  imagem. Depois, começarei a programar do zero até o projeto
                  final.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.bot}>
          <h3 className={styles.title}>Entre em contato</h3>
          <p>
            Tem alguma dúvida ou precisa de ajuda com sua compra? Entre em
            contato comigo agora e resolva todas as suas questões rapidamente!
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
