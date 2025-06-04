import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { motion } from "framer-motion";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { 
      y: -100, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemsVariants = {
    hidden: {
      y: -20,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const backgroundVariants = {
    initial: {
      backdropFilter: "blur(0px)",
      background: "rgba(255, 255, 255, 0.8)"
    },
    scrolled: {
      backdropFilter: "blur(12px)",
      background: "rgba(255, 255, 255, 0.95)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return windowWidth > 800 ? (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 w-full h-[80px] flex flex-row items-center justify-center px-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-row items-center space-x-8 px-8 py-4 rounded-full border border-gray-200/50 shadow-lg backdrop-blur-sm"
        variants={backgroundVariants}
        animate={isScrolled ? "scrolled" : "initial"}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.2 }
        }}
      >
        <motion.div variants={navItemsVariants}>
          <NavItem label="skills" href="#expertise" />
        </motion.div>
        <motion.div 
          className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          variants={navItemsVariants}
        />
        <motion.div variants={navItemsVariants}>
          <NavItem label="projects" href="#projects" />
        </motion.div>
        <motion.div 
          className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          variants={navItemsVariants}
        />
        <motion.div variants={navItemsVariants}>
          <NavItem label="experience" href="#experiences" />
        </motion.div>
        <motion.div 
          className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          variants={navItemsVariants}
        />
        <motion.div variants={navItemsVariants}>
          <NavItem label="contact" href="#contact" />
        </motion.div>
      </motion.div>
    </motion.div>
  ) : <></>;
};

export default Navbar;