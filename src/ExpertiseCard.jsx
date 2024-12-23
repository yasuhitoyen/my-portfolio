import React from "react";

const ExpertiseCard = ({ title, text, textwidth, color, img }) => {
  // Map color values
  const colorMap = {
    1: "darkred",
    2: "darkgreen",
    3: "darkblue",
  };

  return (
    <>
      <div className="w-[400px] flex-col h-[250px] pt-5 border-x-[4px] border-y-[4px] c2 border-black relative hover:translate-y-[-10px] transition-all duration-500 select-none">
        {/* Title with Icon */}
        <div className="flex items-center justify-center relative">
          {/* Image (SVG) */}
          <img
            src={img}
            className="w-[20px] h-[20px] c9-text mr-2"
            style={{ filter: "invert(100%) brightness(80%)" }} // Makes the SVG white
            alt="Icon"
          />
          {/* Title */}
          <h1 className="text-[25px] c8-text relative z-10">{title}</h1>
        </div>

        {/* Rectangle with Dynamic Color */}
        <div
          className="absolute rounded-sm z-0"
          style={{
            top: "44px", // Position below the text
            left: "200px", // Shift to the right by 10px
            width: `${textwidth}px`, // Use textwidth prop for the width
            height: "12px", // Adjust thickness
            backgroundColor: colorMap[color] || "black", // Map color or default to black
            transform: "translateX(-50%)", // Keep the rectangle centered relative to the offset
          }}
        ></div>

        {/* Description */}
        <div className="mt-3">
          <h4 className="text-[18px] px-10 c9-text">{text}</h4>
        </div>
      </div>
    </>
  );
};

export default ExpertiseCard;
