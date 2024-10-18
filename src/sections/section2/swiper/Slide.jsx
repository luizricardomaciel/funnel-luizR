import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./Swiper.css";
import blizzard from "../../../assets/blizzard.png";
import neon from "../../../assets//neon.png";
import wireframe from "../../../assets/wireframe.png";

const Slide = () => {
  return (
    <div className="box">
      <Swiper
        modules={[Pagination, Autoplay]} // Adicionar o módulo de paginação
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <a href="https://project-blizzard.vercel.app/" target="_blank">
            <img src={blizzard} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://home-page-banco-neon.vercel.app/" target="_blank">
            <img src={neon} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://landing-page-wire-frame.vercel.app/" target="_blank">
            <img src={wireframe} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
