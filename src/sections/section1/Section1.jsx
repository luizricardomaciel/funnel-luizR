import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import style from "./SectionStyles.module.css";
import AnimatedElement from "../AnimatedElement";
import Scene3D from "./Scene3D";
import GlowButton from "../../components/GlowButton/GlowButton";
import HeroEffect from "./HeroEffect";

function Section1() {
  const { t } = useTranslation();
  const containerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.4 } });

      tl.from(`.${style.badge}`, { y: 30, opacity: 0, filter: "blur(10px)", duration: 1 })
        .from(`.${style.titleLine1}`, { x: -60, opacity: 0, filter: "blur(15px)" }, "-=1")
        .from(`.${style.titleLine2}`, { x: -60, opacity: 0, filter: "blur(15px)" }, "-=1.2")
        .from(`.${style.mainDescription}`, { y: 30, opacity: 0, filter: "blur(5px)" }, "-=1")
        .from(`.${style.ctaWrapper}`, { scale: 0.9, opacity: 0, filter: "blur(5px)" }, "-=1")
        .from(`.${style.ui1}`, { x: 30, y: 30, opacity: 0, duration: 1.8, ease: "elastic.out(1, 0.75)" }, "-=1.4")
        .from(`.${style.ui2}`, { x: -30, y: 30, opacity: 0, duration: 1.8, ease: "elastic.out(1, 0.75)" }, "-=1.6")
        .from(`.${style.sceneWrapper}`, { opacity: 0, scale: 0.8, filter: "brightness(0.5)", duration: 2.5 }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={style.section01} ref={containerRef}>
      <AnimatedElement />
      <div className={style.container}>
        <div className={style.leftArea}>
          <div className={style.badge}>
            <span>{t("section1.badge") || "Architecture & Design Engineering"}</span>
          </div>

          <h1 className={style.mainTitle}>
            <span className={style.titleLine1}>Esculpindo experiências</span>
            <span className={style.titleLine2}>em <span className={style.highlight}>Digital Art</span></span>
          </h1>

          <p className={style.mainDescription}>
            Projetando interfaces imersivas e sistemas de alta fidelidade que transcendem o comum. <strong>Onde a engenharia encontra a estética.</strong>
          </p>

          <div className={style.ctaWrapper}>
            <HeroEffect>
              <GlowButton onClick={() => scrollToSection("section4")}>
                {t("section1.button") || "Iniciar Projeto"}
              </GlowButton>
            </HeroEffect>
          </div>
        </div>

        <div className={style.rightArea}>
          <div className={style.sceneWrapper}>
            <div className={style.sceneBackgroundBlur}></div>
            <Scene3D />

            {/* Elementos Decorativos de UI (Glass) */}
            <div className={`${style.uiFloating} ${style.ui1}`}>
              <div className={style.uiIcon}>🎨</div>
              <div className={style.uiContent}>
                <span className={style.uiLabel}>UI Fidelity</span>
                <span className={style.uiValue}>Premium</span>
              </div>
            </div>
            <div className={`${style.uiFloating} ${style.ui2}`}>
              <div className={style.uiIcon}>⚡</div>
              <div className={style.uiContent}>
                <span className={style.uiLabel}>Core Performance</span>
                <span className={style.uiValue}>99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;