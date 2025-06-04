import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CSSIcon from "./assets/icons/CSSIcon.jpeg";
import VSCodeIcon from "./assets/icons/VSCodeIcon.jpeg";
import GitIcon from "./assets/icons/GitIcon.png";
import GithubIcon from "./assets/icons/GithubIcon.png";
import HTMLIcon from "./assets/icons/HTMLIcon.png";
import JavaIcon from "./assets/icons/JavaIcon.png";
import NextJSIcon from "./assets/icons/NextJSIcon.png";
import PytorchIcon from "./assets/icons/PytorchIcon.png";
import ReactIcon from "./assets/icons/ReactIcon.png";
import RiotGamesIcon from "./assets/icons/RiotGamesIcon.png";
import SQLIcon from "./assets/icons/SQLIcon.png";
import TailwindIcon from "./assets/icons/TailwindIcon.png";
import PythonIcon from "./assets/icons/PythonIcon.jpeg";
import JavascriptIcon from "./assets/icons/JavascriptIcon.png";
import AlgorithmsIcon from "./assets/icons/AlgorithmsIcon.png";

// Mapping skill names to icons
const iconMap = {
  css: CSSIcon,
  vscode: VSCodeIcon,
  git: GitIcon,
  github: GithubIcon,
  html: HTMLIcon,
  java: JavaIcon,
  nextjs: NextJSIcon,
  pytorch: PytorchIcon,
  react: ReactIcon,
  riot: RiotGamesIcon,
  sql: SQLIcon,
  tailwind: TailwindIcon,
  python: PythonIcon,
  javascript: JavascriptIcon,
  algorithms: AlgorithmsIcon,
};

// Mapping skill names to display names
const skillDisplayNames = {
  css: "CSS",
  vscode: "VS Code",
  git: "Git",
  github: "GitHub",
  html: "HTML",
  java: "Java",
  nextjs: "Next.js",
  pytorch: "PyTorch",
  react: "React",
  riot: "Riot Games",
  sql: "SQL",
  tailwind: "Tailwind CSS",
  python: "Python",
  javascript: "JavaScript",
  algorithms: "Algorithms",
};

// Component takes `skill` prop (e.g. 'css', 'react')
const MicroSkills = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  const icon = iconMap[skill.toLowerCase()];
  const displayName = skillDisplayNames[skill.toLowerCase()] || skill;

  return (
    <div className="relative">
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              duration: 0.2 
            }}
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200 text-sm font-medium text-gray-800 whitespace-nowrap">
              {displayName}
              {/* Arrow */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -mb-1">
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-200 absolute -bottom-px left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skill Icon */}
      <motion.div
        className="rounded-full overflow-hidden transition-all duration-500 transform border-[4px] border-gray-100 shadow-sm w-[50px] h-[50px] justify-center flex flex-row bg-white "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ 
          y: -3,
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        <img
          src={icon}
          alt={`${skill} icon`}
          className="rounded-full object-cover scale-[65%]"
          style={{
            display: "block",
          }}
        />
      </motion.div>
    </div>
  );
};

export default MicroSkills;