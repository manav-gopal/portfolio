import { m, domAnimation, LazyMotion } from "framer-motion";
import React from "react";
import HeroText from "./HeroText";
import ParticlesBG from "../../../components/Particles/Particles";
import Arrow from "../../../utils/Arrow";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full flex justify-center overflow-hidden-web relative"
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="hero"
          className="relative w-full flex justify-center items-center h-screen min-h-[800px] translate-y-[-10%]"
        >
          <HeroText />
          <ParticlesBG />
        </m.div>
        <Arrow />
      </LazyMotion>
    </div>
  );
};

export default Hero;
