"use client";
import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { Container } from "@tsparticles/engine";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { particlesOptions } from "./tsparticlesoptions";

function Particlescomponent() {
  const options = useMemo(
    () => (particlesOptions),
    [],);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded!");
  };

  return (
    <ParticlesProvider init={loadSlim}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </ParticlesProvider>
  );
}

export default Particlescomponent;
