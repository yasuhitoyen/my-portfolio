import React, { useState } from "react";
import LocationIcon from "./assets/images/marker.svg";
const ExperienceTab = ({ title, company, location, duration, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-4 overflow-hidden c12 rounded-md hover:scale-[1.01] transition-all duration-500">
      {/* Accordion Header */}
      <div
        className="w-full h-[50px] px-5 flex flex-row items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex flex-col justify-center">
          <h1 className="c8-text font-semibold text-[18px] tracking-tighter">
            {title} – {company}
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <h1 className="c8-text font-semibold text-[18px] tracking-tighter">
            {duration}
          </h1>
          <span
            className={`text-gray-300 ml-2 transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </div>
      </div>

      {/* Accordion Content with Smooth Transition */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full p-4 text-gray-100">
          <div className="w-full flex flex-row items-center justify-left">
            <img src={LocationIcon} className="w-[14px] h-[14px] brightness-0 invert"></img>
            <span className="ml-[7px]">{location}</span>
          </div>
          <h1>{description}</h1>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;
