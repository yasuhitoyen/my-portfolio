import React from "react";
import ExpertiseCard from "./ExpertiseCard";
const Expertise = () => {
  return (
    <>
      <div className="w-full h-[600px]  mt-[220px] flex flex-col border-2">
        <div className=" text-center">
          <h1 className="text-[80px] font-bold clay-text c1-text">My Skills</h1>
        </div>
        <div className="flex flex-row items-center px-40 -space-x-[2px]">
          <ExpertiseCard
            title="Software Development"
            text="Skilled in Python, Java, and JavaScript with a focus on reliable, efficient coding and version control with Git."
          />
          <ExpertiseCard
            title="Machine Learning"
            text="Experienced in PyTorch and TensorFlow, with strengths in neural networks, data prep, and predictive modeling."
          />
          <ExpertiseCard
            title="React"
            text="Proficient in React, Next.js, and Tailwind CSS, creating responsive, UX-focused web apps with smooth navigation using React Router and Framer Motion."
          />
        </div>
      </div>
    </>
  );
};

export default Expertise;
