import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedElement = ({ animation }) => {
  useEffect(() => {
    AOS.init({ once: true, duration: 2000, offset: 350 });
  }, []);
};

export default AnimatedElement;
