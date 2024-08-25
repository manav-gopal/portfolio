import { m, domAnimation, LazyMotion } from "framer-motion";
import React from "react";
import AboutText from "./AboutText";

const About = () => {
  return (
    <div
      id={"about"}
      className="text-white w-full overflow-hidden-web relative"
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="about"
          className="relative flex items-center justify-center w-full h-screen min-h-[800px]"
        >
          <AboutText />
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default About;
