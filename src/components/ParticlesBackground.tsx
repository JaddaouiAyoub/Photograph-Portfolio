"use client";

import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground({ darkMode }: { darkMode: boolean }) {
  // Charger le moteur une seule fois
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  // Options en fonction du dark mode
  const options = useMemo(() => ({
    background: {
      color: { value: darkMode ? "#0f172a" : "#f6f6dd" },
    },
    particles: {
      color: { value: darkMode ? "#facc15" : "#1e3a8a" },
      links: {
        enable: true,
        color: darkMode ? "#facc15" : "#1e3a8a",
      },
      move: { enable: true, speed: 2 },
      number: { value: 60 },
      opacity: { value: 0.7 },
      size: { value: { min: 1, max: 3 } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
    },
    fullScreen: { enable: true, zIndex: -1 }, // couvre toute la page
  }), [darkMode]);

  return <Particles id="tsparticles" options={options} />;
}
