import {React, useRef} from "react";
import { motion, useInView} from "framer-motion";
const Hero = () => {
  const ref = useRef(null); // Create a ref for the element
  const isInView = useInView(ref, { once: true }); // Detects if in view, fires once

  return (
    <>
      <h1 className="text-[120px] font-bold text-center mt-40 c8-text">MICHAEL YEN</h1>

      <motion.div
        ref={ref} // Attach ref to the element
        initial={{ opacity: 0, y: 50 }} // Starting state
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Final state if in view
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" text-black p-6 rounded-lg mx-5 h-[600px]"
      >
        <h1 className="text-[30px] font-bold text-center text-white">Software Engineer & Fullstack Developer.</h1>
      </motion.div>
    </>
  );
};

export default Hero;
