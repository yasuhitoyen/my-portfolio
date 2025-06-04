import React from "react";
import { motion } from "framer-motion";
import MicroSkillsList from "./MicroSkillsList";
// Animation variants
const containerVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.95,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.6,
    },
  },
};

const Project = ({
  image,
  title,
  description,
  scalex = 1.0,
  scaley = 1.0,
  shiftx = 0,
  shifty = 0,
  link,
  microskills
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
      variants={containerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-[320px] h-[360px] bg-white flex flex-col rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300 relative">
        {/* MicroSkills - Top Left */}
        <div className="absolute top-3 left-3 z-10 h-[50px] bg-gray-100 rounded-full scale-[80%] ">
          <MicroSkillsList listskills={microskills}></MicroSkillsList>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center w-full h-[220px] overflow-hidden bg-white">
          <div className="transition-all duration-700 group-hover:scale-105">
            <img
              src={image}
              alt="Project"
              className="object-cover rounded-md"
              style={{
                transform: `scaleX(${scalex}) scaleY(${scaley}) translate(${shiftx}px, ${shifty}px)`,
              }}
            />
          </div>
        </div>

        {/* Title + Description */}
        <div className="text-center mt-3 px-3 relative flex-1 flex flex-col">
          {title && (
            <h2 className="text-[20px] font-light text-gray-800">{title}</h2>
          )}

          {/* Fixed height container for description */}
          <div className="h-[44px] flex items-start justify-center mt-1 mb-3">
            {description && (
              <p className="text-sm font-light text-gray-700 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:opacity-0 leading-tight">
                {description}
              </p>
            )}
          </div>

          {/* Hover text - now positioned relative to the fixed container */}
          <p className="absolute left-0 right-0 bottom-2 text-sm font-light text-gray-800 transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-[-16px] group-hover:opacity-100">
            More Info →
          </p>
        </div>
      </div>
    </motion.a>
  );
};

export default Project;