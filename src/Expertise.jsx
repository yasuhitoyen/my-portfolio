import React from "react";
import { motion, useInView } from "framer-motion";
import ExpertiseCard from "./ExpertiseCard";
import ChartIcon from "./assets/images/chart-line-up.svg";
import ComputerIcon from "./assets/images/computer.svg";
import BrowserIcon from "./assets/images/site-browser.svg";
import PythonCodeBackground from "./PythonCodeBackground";

const Expertise = ({ id }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.2,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section id={id}>
      <motion.div
        className="relative w-full h-[600px] pt-[100px] flex flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Python Code Backgrounds */}
        <motion.div
          className="absolute inset-0 flex select-none"
          variants={backgroundVariants}
        >
          <div className="flex-1" style={{ transform: "translateY(-20px)" }}>
            <PythonCodeBackground type={1} />
          </div>
          <div className="flex-1" style={{ transform: "translateY(10px)" }}>
            <PythonCodeBackground type={2} />
          </div>
          <div className="flex-1" style={{ transform: "translateY(-15px)" }}>
            <PythonCodeBackground type={3} />
          </div>
          <div className="flex-1" style={{ transform: "translateY(5px)" }}>
            <PythonCodeBackground type={4} />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div className="relative z-10" variants={sectionVariants}>
          <div className="text-center">
            <h1 className="text-[80px] font-bold clay-text c9-text">
              My Skills
            </h1>
          </div>
          <motion.div
            className="flex flex-row items-center px-40 -space-x-[4px]"
            variants={sectionVariants}
          >
            <ExpertiseCard
              title="Software Development"
              text="Skilled in Python, Java, and JavaScript with a focus on reliable, efficient coding and version control with Git."
              textwidth={250}
              color={1}
              img={ComputerIcon}
            />
            <ExpertiseCard
              title="Machine Learning"
              text="Experienced in PyTorch and TensorFlow, with strengths in neural networks, data prep, and predictive modeling."
              textwidth={190}
              color={2}
              img={ChartIcon}
            />
            <ExpertiseCard
              title="React"
              text="Proficient in React, Next.js, and Tailwind CSS, creating responsive, UX-focused web apps with smooth navigation using React Router and Framer Motion."
              textwidth={65}
              color={3}
              img={BrowserIcon}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Expertise;
