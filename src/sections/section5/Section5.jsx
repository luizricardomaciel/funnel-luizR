import styles from "./Section5.module.css";
import neon from "../../assets/neon-project.png";
import blizzard from "../../assets/blizzard=project.png";
import wireframe from "../../assets/wireframe-project.png";
import fortalecendoSuaFe from "../../assets/fortalecendo-sua-fe-small.png";
import AnimatedElement from "../AnimatedElement";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";

function Section5() {
  const { t } = useTranslation();

  return (
    <section id="section5" className={styles.sectionSection}>
      <AnimatedElement />
      <div className={styles.container}>
        <div data-aos="fade-left">
          <h2>{t("section5.title")}</h2>
        </div>
        <div className={styles.content}>
          <ProjectCard 
            aos="fade-right"
            href="https://home-page-banco-neon.vercel.app/"
            image={neon}
            title={t("section5.projects.neon")}
          />
          <ProjectCard 
            aos="fade-up"
            href="https://fortalecendosuafe.com.br/"
            image={fortalecendoSuaFe}
            title={t("section5.projects.lp")}
          />
          <ProjectCard 
            aos="fade-left"
            href="https://project-blizzard.vercel.app/"
            image={blizzard}
            title={t("section5.projects.blizzard")}
          />
          <ProjectCard 
            aos="fade-right"
            href="https://landing-page-wire-frame.vercel.app/"
            image={wireframe}
            title={t("section5.projects.wireframe")}
          />
        </div>
      </div>
    </section>
  );
}

export default Section5;
