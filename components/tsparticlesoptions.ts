import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { useMemo } from "react";

export const particlesOptions: ISourceOptions = {
  background: {
    color: {
      value: "#008000",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      resize: { enable: true },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 4.810236182596568,
      straight: false,

      attract: {
        enable: false,
        rotate: { x: 600, y: 1200 },
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
      animation: {
        enable: false,
        speed: 1,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 3,
    },
  },
  detectRetina: true,
};
