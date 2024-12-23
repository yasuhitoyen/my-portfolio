// Navbar.jsx
import React from "react";
import NavItem from "./NavItem";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="w-full h-[65px] flex flex-row items-center justify-between px-20 rounded-b-2xl "
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="flex flex-row items-center space-x-6">

      </div>
      <div className="flex flex-row items-center space-x-6">
        <NavItem label="./skills" href="#expertise" />
        <NavItem label="./projects" href="#projects" />
        <NavItem label="./experience" href="#experiences" />
        <NavItem label="./contact" href="#contact" />
        {/* If you have external links, include them as well */}
        {/* Example:
        <NavItem label="LinkedIn" href="https://www.linkedin.com/in/yourprofile" />
        */}
      </div>
    </motion.div>
  );
};

export default Navbar;
