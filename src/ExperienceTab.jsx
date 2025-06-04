import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import LocationIcon from "./assets/images/marker.svg";

const ExperienceTab = ({
  title,
  company,
  location,
  duration,
  description,
  companyLogo,
  isOpen,
  onClick,
}) => {
  const contentVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.4, ease: "easeInOut" },
        opacity: { duration: 0.3, ease: "easeOut" },
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: "easeInOut", delay: 0.1 },
        opacity: { duration: 0.3, ease: "easeIn", delay: 0.2 },
      },
    },
  };

  const logoVariants = {
    closed: {
      scale: 0,
      rotate: -180,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
    open: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.4,
      },
    },
  };

  return (
    <div className="w-full mb-4 overflow-hidden rounded-lg hover:scale-[1.02] transition-all duration-700 ease-in-out bg-white shadow-md relative">
      {/* Header */}
      <div
        className="w-full min-h-[60px] px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors duration-700 relative z-10"
        onClick={onClick}
      >
        <div className="flex flex-col">
          <h1 className="text-gray-800 text-[18px] sm:text-[20px] tracking-tight font-light">
            {title} – {company}
          </h1>
        </div>
        <div className="flex items-center mt-2 sm:mt-0">
          <h1 className="text-gray-800 font-light text-[14px] sm:text-[16px]">{duration}</h1>
          <motion.span
            className="text-gray-800 ml-3"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            ▼
          </motion.span>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="content"
            variants={contentVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden relative z-10"
          >
            <div className="w-full p-4 sm:p-6 text-gray-800 relative">
              <div className="w-full flex items-center justify-start mb-3">
                <img
                  src={LocationIcon}
                  className="w-[16px] h-[16px] brightness-0"
                  alt="Location icon"
                />
                <span className="ml-3 text-gray-800 text-sm sm:text-base">{location}</span>
              </div>

              {/* Logo */}
              <AnimatePresence>
                {companyLogo && (
                  <motion.div
                    variants={logoVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="float-right ml-4 mb-4 pointer-events-none"
                    style={{
                      shapeOutside: 'circle(50%)',
                      clipPath: 'circle(50%)',
                    }}
                  >
                    <img
                      src={companyLogo}
                      alt={`${company} logo`}
                      className="w-16 h-16 object-contain rounded-full"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-sm tracking-wide font-light text-justify leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperienceTab;
