import React from "react";
import ExperienceTab from "./ExperienceTab";

const Experiences = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Avalanche Technology",
      duration: "05/2021 – 07/2022",
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
    }
    
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center mt-[200px]">
      <div className="text-center w-full">
        <h1 className="c1-text text-[80px] font-bold">Experience</h1>
      </div>
      <div className="flex flex-col w-[800px]">
        {experiences.map((exp, index) => (
          <ExperienceTab
            key={index}
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            location={exp.location}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
