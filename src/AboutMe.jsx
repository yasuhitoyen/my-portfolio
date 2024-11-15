import { React, useRef } from "react";
import { motion, useInView } from "framer-motion";
const AboutMe = () => {
  const ref = useRef(null); // Create a ref for the element
  const isInView = useInView(ref, { once: true }); // Detects if in view, fires once

  return (
    <>
      <div className="relative bg-white w-full h-[50px]"></div>

      <motion.div
        ref={ref} // Attach ref to the element
        initial={{ opacity: 0, y: 50 }} // Starting state
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Final state if in view
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 shadow-xl text-black p-6 rounded-lg mx-5 h-[400px] -mt-[25px]"
      >
        <h1 className="text-[20px] font-bold text-center mt-20 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h1>
      </motion.div>
    </>
  );
};

export default AboutMe;
