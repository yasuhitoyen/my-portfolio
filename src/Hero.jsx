import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import CubeImage from "./assets/images/cube.png";

const Hero = ({ id }) => {
  const ref = useRef(null); // Create a ref for the element
  const isInView = useInView(ref, { once: true }); // Detects if in view, fires once
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Enhanced Cube Configuration with More Variability and Faster Motion
  const cubes = [
    {
      size: 150, // Base size
      top: 80,
      left: 250,
      initialRotation: 10,
      darker: false,
      delay: 0,
      opacity: 0.24, // Increased by 1.2x (0.2 * 1.2)
      yMotion: [-20, -30, -20], // Increased by 1.5x
    },
    {
      size: 180, // Increased size for more variability
      top: 220,
      left: 580,
      initialRotation: -18, // Increased rotation for more dynamic motion
      darker: true,
      delay: 0.4,
      opacity: 0.42, // Increased by 1.2x (0.35 * 1.2)
      yMotion: [-30, -45, -30], // Increased by 1.5x
    },
    {
      size: 172, // Adjusted size for variability
      top: 380,
      left: 420,
      initialRotation: 22, // Increased rotation
      darker: false,
      delay: 0.8,
      opacity: 0.36, // Increased by 1.2x (0.3 * 1.2)
      yMotion: [-25, -37.5, -25], // Increased by 1.5x
    },
    {
      size: 192, // Increased size
      top: 310,
      left: 880,
      initialRotation: -12, // Increased rotation
      darker: true,
      delay: 1.2,
      opacity: 0.54, // Increased by 1.2x (0.45 * 1.2)
      yMotion: [-30, -45, -30], // Increased by 1.5x
    },
    {
      size: 182, // Increased size
      top: 130,
      left: 1040,
      initialRotation: 7.5, // Increased rotation
      darker: false,
      delay: 1.6,
      opacity: 0.36, // Increased by 1.2x (0.3 * 1.2)
      yMotion: [-22.5, -33.75, -22.5], // Increased by 1.5x
    },
  ];

  return (
    <section id={id}>
      <div className="relative bg-gradient-to-b from-[#212930] to-black min-h-screen flex flex-col items-center justify-start pt-24 md:pt-32 lg:pt-40">
        {/* Cubes */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {cubes.map((cube, index) => (
            <motion.img
              className="select-none"
              key={index}
              src={CubeImage}
              style={{
                width: `${cube.size}px`,
                height: `${cube.size}px`,
                position: "absolute",
                top: `${cube.top}px`,
                left: `${cube.left}px`,
                filter: cube.darker ? "brightness(60%)" : "brightness(100%)", // Darken specific cubes more for contrast
                opacity: cube.opacity, // Set initial opacity
              }}
              alt={`Cube ${index + 1}`}
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: cube.yMotion, // Enhanced vertical motion
                      rotate: [
                        cube.initialRotation,
                        cube.initialRotation + 3, // Increased rotation angle
                        cube.initialRotation - 3,
                        cube.initialRotation,
                      ], // More dynamic rotation
                      opacity: [cube.opacity, cube.opacity + 0.1, cube.opacity], // Slight opacity pulsing
                    }
              }
              transition={
                prefersReducedMotion
                  ? {}
                  : {
                      duration: 6, // Reduced duration for faster movement (from 8 to 6)
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: cube.delay, // Delay for independent movement
                    }
              }
            />
          ))}
        </div>

        {/* Name Heading */}
        <div className="relative z-10 text-center">
          <h1 className="text-[120px] font-bold mt-16 sm:mt-16 md:mt-12 lg:mt-12 c8-text">
            MICHAEL YEN
          </h1>
        </div>

        {/* Motion Element */}
        <motion.div
          ref={ref} // Attach ref to the element
          initial={{ opacity: 0, y: 50 }} // Starting state
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Final state if in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-black p-6 rounded-lg mx-5 h-[600px] relative z-10 mt-10"
        >
          <h1 className="text-[30px] font-bold text-center text-white">
            Software Engineer & Fullstack Developer.
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
