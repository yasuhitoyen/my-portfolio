import React from "react";

const ExpertiseCard = ({ title, text }) => {
  return (
    <>
      <div className="w-[400px] flex-col rounded-xl h-[350px] pt-5 border-x-[2px] border-y-[2px] c8">
        <h1 className="text-center text-[25px] c2-text">{title}</h1>
        <div className="mt-3">
          <h4 className=" text-[18px] px-10 c2-text">{text}</h4>
        </div>
      </div>
    </>
  );
};

export default ExpertiseCard;
