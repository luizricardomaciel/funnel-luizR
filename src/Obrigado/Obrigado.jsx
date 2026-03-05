
import whats from "../assets/whatsapp-icon.svg";
import whatsColor from "../assets/whatsColor-icon.svg";
import styles from "./Obrigado.module.css";
import { useTranslation } from "react-i18next";

function Obrigado() {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.obrigado}>
        <div className={styles.content}>
          <img src="" alt="" />
          <h2>{t("thanks.title")}</h2>
          <p>{t("thanks.desc")}</p>
          <a
            href={t("thanks.whatsappLink")}
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
            {t("thanks.button")}
          </a>
        </div>
      </section>
    </>
  );
}

export default Obrigado;
