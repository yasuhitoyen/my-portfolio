import React from 'react';
import { motion } from 'framer-motion';

const ClickableIcons = ({ imgsrc, scale, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[50px] h-[50px] rounded-full bg-white overflow-hidden flex justify-center items-center border-[3px] border-gray-100 shadow-md"
      whileHover={{ 
        scale: 1.2, 
        rotate: 12 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      style={{ transformOrigin: "center" }}
    >
      <img
        className="object-cover"
        src={imgsrc}
        alt="ClickableImage"
        style={{ transform: `scale(${scale / 100})` }}
      />
    </motion.a>
  );
};

export default ClickableIcons;
