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

function App() {
  return (
    <>
      <Helmet>
        {" "}
        <title>
          Transforme Seu Negócio com Sites de Alta Performance!
        </title>{" "}
        <meta
          name="title"
          content="Transforme Seu Negócio com Sites de Alta Performance!"
        />{" "}
        <meta
          name="description"
          content="Web designer especializado em sites modernos e funcionais. Aumente sua visibilidade online, conquiste mais clientes e transforme seu negócio. Clique aqui e descubra mais!"
        />{" "}
        {/* Open Graph / Facebook */}{" "}
        <meta property="og:type" content="website" />{" "}
        <meta property="og:url" content="https://luizricardodev.com.br/" />{" "}
        <meta
          property="og:title"
          content="Transforme Seu Negócio com Sites de Alta Performance!"
        />{" "}
        <meta
          property="og:description"
          content="Web designer especializado em sites modernos e funcionais. Aumente sua visibilidade online, conquiste mais clientes e transforme seu negócio. Clique aqui e descubra mais!"
        />{" "}
        <meta property="og:image" content="URL_COMPLETA_PARA_A_IMAGEM" />{" "}
        {/* Twitter */}{" "}
        <meta property="twitter:card" content="summary_large_image" />{" "}
        <meta property="twitter:url" content="https://luizricardodev.com.br/" />{" "}
        <meta
          property="twitter:title"
          content="Transforme Seu Negócio com Sites de Alta Performance!"
        />{" "}
        <meta
          property="twitter:description"
          content="Web designer especializado em sites modernos e funcionais. Aumente sua visibilidade online, conquiste mais clientes e transforme seu negócio. Clique aqui e descubra mais!"
        />{" "}
        <meta property="twitter:image" content="URL_COMPLETA_PARA_A_IMAGEM" />{" "}
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

export default App;
