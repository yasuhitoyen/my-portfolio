import React from "react";
import { motion } from "framer-motion";
import ExperienceTab from "./ExperienceTab";

const Experiences = ({ id }) => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Avalanche Technology",
      duration: "05/2023 – 07/2023",
      location: "Fremont, CA",
      description:
        "Automated the processing of semiconductor test measurements, reducing manual testing time by 50% and improving data collection efficiency. Developed Python scripts to automate and visualize critical measurements, including error rates, temperature fluctuations, and magnetic field strength in semiconductor chips, significantly enhancing data analysis efficiency. Identified an unexpected anomaly in output data analysis, where error growth deviated from the expected exponential pattern, leading to new research directions and optimization of chip durability. Enhanced data collection pipelines and streamlined future testing processes by ensuring precise calibration of semiconductor measurement instruments through custom Python routines.",
    },
    {
      title: "Teacher",
      company: "Innovacol",
      duration: "05/2020 – 07/2021",
      location: "Virtual",
      description:
        "Helped launch an initiative to teach Python and machine learning fundamentals to over 30 high school students across Colombia and Latin America. Designed a curriculum that covered core computer science concepts and machine learning techniques, empowering students to solve real-world problems. Organized guest speakers from Google, MIT, and Stanford to inspire and expose students to diverse professional opportunities. Collaborated with organizations to expand outreach and participation, significantly increasing the impact of Python and machine learning bootcamps.",
    },
    {
      title: "Programming Tutor",
      company: "Tutoring Service",
      duration: "09/2022 – Present",
      location: "Virtual",
      description:
        "Designed and delivered tailored tutoring sessions for middle and high school students, focusing on Java programming concepts such as variables, loops, and conditionals, as well as advanced topics like object-oriented programming, recursion, and data structures. Facilitated hands-on learning through practical projects, including games, inventory systems, and GUI-based applications using JavaFX. Simplified complex topics such as multithreading and exception handling, ensuring a clear understanding and fostering problem-solving skills.",
    },
  ];

  // Variants for the parent container:
  // Animate children in a staggered sequence
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 0.2s delay between each child's animation
      },
    },
  };

  // Variants for each ExperienceTab child
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Slide up effect
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <secton id={id}>
      <div className="w-full h-auto flex flex-col items-center pt-[150px] ">
        <div className="text-center w-full">
          <h1 className="c8-text text-[80px] font-bold">Experience</h1>
        </div>

        {/* Motion container that wraps the ExperienceTabs */}
        <motion.div
          className="flex flex-col w-[800px] "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          // once: true  => Animate only on first scroll into view
          // amount: 0.2 => 20% of container in view triggers animation
        >
          {experiences.map((exp, index) => (
            // Each child uses the itemVariants
            <motion.div key={index} variants={itemVariants}>
              <ExperienceTab
                title={exp.title}
                company={exp.company}
                duration={exp.duration}
                location={exp.location}
                description={exp.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </secton>
  );
};

export default Experiences;
