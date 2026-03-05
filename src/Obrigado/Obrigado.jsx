
import whats from "../assets/whatsapp-icon.svg";
import styles from "./Obrigado.module.css";
import { useTranslation } from "react-i18next";
import TechnicalButton from "../sections/section1/TechnicalButton";

function Obrigado() {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.obrigado}>
        <div className={styles.content}>
          <img src="" alt="" />
          <h2>{t("thanks.title")}</h2>
          <p>{t("thanks.desc")}</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TechnicalButton 
              href={t("thanks.whatsappLink")}
              target="_blank"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className={styles.img} style={{ margin: 0 }}>
                  <img
                    src={whats}
                    alt="icone de WhatsApp em svg"
                    title="icone whatsapp"
                    className={styles.whats}
                  />
                </div>
                {t("thanks.button")}
              </div>
            </TechnicalButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default Obrigado;
