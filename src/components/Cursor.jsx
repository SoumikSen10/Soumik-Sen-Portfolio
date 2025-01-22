import React from "react";
import MouseParticles from "react-mouse-particles";

const Cursor = () => {
  return (
    <MouseParticles
      g={1} // Gravity of particles
      color="random" // Particle colors: "random" or a specific color like "#ff0000"
      cull="Mui" // Elements to exclude
      level={6} // Number of particles
    />
  );
};

export default Cursor;
