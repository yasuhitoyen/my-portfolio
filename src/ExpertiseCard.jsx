import React from "react";
import MicroSkillsList from "./MicroSkillsList";
const ExpertiseCard = ({ title, text, textwidth, color, img, listskills }) => {
  const colorMap = {
    1: "#FCA5A5", // light red
    2: "#86EFAC", // light green
    3: "#93C5FD", // light blue
  };

  return (
    <div className="w-[410px] h-[250px] py-6 px-6 border-4 border-white rounded-2xl shadow-md relative hover:-translate-y-2 active:translate-y-1 active:scale-[97%] transition-all duration-700 ease-in-out select-none mb-8 bg-white hover:cursor-crosshair">
      
      {/* Title with Icon */}
      <div className="flex items-center justify-center gap-2 mb-3 relative z-10">
        <img src={img} className="w-6 h-6" alt="Icon" />
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      </div>

      {/* Underline fixed beneath the title (relative to whole card) */}
      <div
        className="absolute rounded-full opacity-80 z-0"
        style={{
          top: "44px", 
          left: "210px",
          width: `${textwidth}px`,
          height: "14px",
          backgroundColor: colorMap[color] || "#E5E7EB",
          transform: "translateX(-50%)",
        }}
      ></div>

      {/* Description */}
      <div className="mt-6 text-center px-4">
        <p className="text-[17px] text-gray-700 leading-relaxed">{text}</p>
      </div>

      {/* Micro Skills List */}
      <div className="absolute bottom-4">
        <MicroSkillsList listskills={listskills}></MicroSkillsList>
      </div>
    </div>
  );
};

export default ExpertiseCard;
