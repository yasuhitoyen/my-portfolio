import React, { useState } from "react";
import { motion } from "framer-motion";
import ExperienceTab from "./ExperienceTab";
import AvalancheLogo from "./assets/icons/AvalancheTechnologyIcon.jpeg";
import InnovacolLogo from "./assets/icons/InnovacolIcon.jpeg";
import ZoomLogo from "./assets/icons/ZoomIcon.jpeg";

const Experiences = ({ id }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const experiences = [
    {
      title: "Software Engineer",
      company: "Avalanche Technology",
      duration: "05/2023 – 07/2023",
      location: "Fremont, CA",
      description:
        "Automated the processing of semiconductor test measurements, reducing manual testing time by 50% and improving data collection efficiency. Developed Python scripts to automate and visualize critical measurements, including error rates, temperature fluctuations, and magnetic field strength in semiconductor chips, significantly enhancing data analysis efficiency. Identified an unexpected anomaly in output data analysis, where error growth deviated from the expected exponential pattern, leading to new research directions and optimization of chip durability. Enhanced data collection pipelines and streamlined future testing processes by ensuring precise calibration of semiconductor measurement instruments through custom Python routines.",
      companyLogo: AvalancheLogo,
    },
    {
      title: "Teacher",
      company: "Innovacol",
      duration: "05/2020 – 07/2021",
      location: "Virtual",
      description:
        "Helped launch an initiative to teach Python and machine learning fundamentals to over 30 high school students across Colombia and Latin America. Designed a curriculum that covered core computer science concepts and machine learning techniques, empowering students to solve real-world problems. Organized guest speakers from Google, MIT, and Stanford to inspire and expose students to diverse professional opportunities. Collaborated with organizations to expand outreach and participation, significantly increasing the impact of Python and machine learning bootcamps.",
      companyLogo: InnovacolLogo,
    },
    {
      title: "Programming Tutor",
      company: "Tutoring Service",
      duration: "09/2022 – Present",
      location: "Virtual",
      description:
        "Designed and delivered tailored tutoring sessions for middle and high school students, focusing on Java programming concepts such as variables, loops, and conditionals, as well as advanced topics like object-oriented programming, recursion, and data structures. Facilitated hands-on learning through practical projects, including games, inventory systems, and GUI-based applications using JavaFX. Simplified complex topics such as multithreading and exception handling, ensuring a clear understanding and fostering problem-solving skills.",
      companyLogo: ZoomLogo,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id={id}>
      <div className="w-full min-h-screen flex flex-col items-center pt-[120px] px-4 bg-[#F8F5EF]">
        <div className="text-center w-full mb-6">
          <h1 className="font-light text-[32px] sm:text-[40px]">Experience</h1>
        </div>

        <motion.div
          className="flex flex-col w-full max-w-screen-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ExperienceTab
                title={exp.title}
                company={exp.company}
                duration={exp.duration}
                location={exp.location}
                description={exp.description}
                isOpen={openIndex === index}
                companyLogo={exp.companyLogo}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
