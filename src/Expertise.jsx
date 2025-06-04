import React from "react";
import { motion } from "framer-motion";
import ExpertiseCard from "./ExpertiseCard";
import ChartIcon from "./assets/images/chart-line-up.svg";
import ComputerIcon from "./assets/images/computer.svg";
import BrowserIcon from "./assets/images/site-browser.svg";
import PythonCodeBackground from "./PythonCodeBackground";
// css, vscode, git, html, java, nextjs, pytorch, react, riot, sql, tailwind


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
      opacity: 0.15,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section id={id}>
      <motion.div
        className="bg-[#F8F5EF] relative w-full min-h-[800px] pt-[100px] flex flex-col px-4 sm:px-6 lg:px-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Foreground Content */}
        <motion.div className="relative z-10" variants={sectionVariants}>
          <div className="text-center mb-8">
            <h1 className="text-[22px] font-extralight text-black">
              Check out my
            </h1>
            <h1 className="text-[42px] font-lighter text-black">
              Skills
            </h1>
          </div>

          {/* Cards Container */}
          <motion.div
            className="
              flex 
              flex-col md:flex-row 
              items-center 
              justify-center 
              gap-6 md:gap-0 
              overflow-x-auto md:overflow-visible 
              snap-x md:snap-none 
              scroll-smooth 
              px-2
            "
            variants={sectionVariants}
          >
            <div className="snap-center shrink-0">
              <ExpertiseCard
                title="Software Development"
                text="Skilled in Python, Java, and JavaScript with a focus on reliable, efficient coding and version control with Git."
                textwidth={250}
                color={1}
                img={ComputerIcon}
                listskills={['java', 'python', 'git']}
              />
            </div>
            <div className="snap-center shrink-0">
              <ExpertiseCard
                title="Machine Learning"
                text="Experienced in PyTorch and Deep Learning and a solid foundation in Computer Vision"
                textwidth={190}
                color={2}
                img={ChartIcon}
                listskills={['pytorch', 'python']}

              />
            </div>
            <div className="snap-center shrink-0">
              <ExpertiseCard
                title="Web Development"
                text="Proficient in React/ReactNative, Next.js, and Tailwind CSS"
                textwidth={190}
                color={3}
                img={BrowserIcon}
                listskills={['react', 'tailwind']}

              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Expertise;
