import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Load slim version for better performance
import { particleOptions } from "./particleOptions";

const ParticlesBG = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Loading the slim version of the particles engine
      await loadSlim(engine);
    }).then(() => {
      setInit(true); // Set to true once particles engine is initialized
    });
  }, []);

  // const particlesLoaded = (container: any) => {
  //   console.log(container); // Callback for when particles are loaded
  // };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          // particlesLoaded={particlesLoaded}
          options={particleOptions}
          />
      )}
    </>
  );
};

export default ParticlesBG;
