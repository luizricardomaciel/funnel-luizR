import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedElement = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, offset: 120 });
  }, []);

  return null;
};

export default AnimatedElement;
