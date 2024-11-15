import React from "react";
import NavItem from "./NavItem";
import { motion, useInView} from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="w-full h-[65px] flex flex-row items-center justify-between px-20 rounded-b-2xl "
      initial={{ y: -100, opacity: 0 }} // Start above the viewport and hidden
      animate={{ y: 0, opacity: 1 }} // Animate to the visible position
      transition={{ duration: 0.75, ease: "easeOut" }} // Adjust speed and easing
    >
      <div className="flex flex-row items-center justify-between w-full">

      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <NavItem label="./skills" href="/home" />
        <NavItem label="./projects" href="/projects" />
        <NavItem label="./experience" href="/resume" />
        <NavItem label="./contact" href="/contact" />
      </div>
    </motion.div>
  );
};

export default Navbar;
