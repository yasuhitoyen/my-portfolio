// NavItem.jsx
import React from "react";
import { motion } from "framer-motion";

const NavItem = ({ label, href }) => {
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : "_self"} 
      rel={isExternal ? "noopener noreferrer" : undefined} 
      whileHover={{ scale: 1.05 }}
      className="text-[15px] font-light tracking-wide c10-text cursor-pointer"
    >
      {label}
    </motion.a>
  );
};

export default NavItem;
