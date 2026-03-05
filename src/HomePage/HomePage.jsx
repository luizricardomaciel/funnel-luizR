import "./HomePage.css";
import Footer from "../sections/footer/Footer";
import Header from "../sections/header/Header";
import Section1 from "../sections/section1/Section1";
import Section2 from "../sections/section2/Section2";
import Section3 from "../sections/section3/Section3";
import Section4 from "../sections/section4/Section4";
import Section5 from "../sections/section5/Section5";
import Section6 from "../sections/section6/Section6";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.description")} />
      </Helmet>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
}

export default HomePage;
