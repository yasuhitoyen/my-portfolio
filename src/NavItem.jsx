// NavItem.jsx
import React from "react";
import { motion } from "framer-motion";

const NavItem = ({ label, href }) => {
  // Determine if the link is external
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : "_self"} // Open in new tab if external
      rel={isExternal ? "noopener noreferrer" : undefined} // Security for external links
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="text-[15px] font-light tracking-wide c10-text cursor-pointer"
    >
      {label}
    </motion.a>
  );
};

export default NavItem;
