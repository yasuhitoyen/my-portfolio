import React from "react";
import { motion } from "framer-motion";

const NavItem = ({ label, href }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="text-[15px] font-light tracking-heavy c10-text"
      >
        <button>
		{label}
		</button>
      </motion.div>
    </>
  );
};

export default NavItem;
