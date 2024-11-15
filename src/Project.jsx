import React from "react";

const Project = ({ size, image, title, scalex = 1.0, scaley = 1.0, shiftx = 0, shifty = 0, link }) => {
  const projectSizeClass =
    size === "xs"
      ? "w-[250px] h-[250px]"
      : size === "s"
      ? "w-[320px] h-[320px]"
      : size === "m"
      ? "w-[400px] h-[450px]"
      : size === "xl"
      ? "w-[800px] h-[550px]" // TV-like aspect ratio, double the height of xs
      : "w-[600px] h-[450px]";

  const imageSizeClass =
    size === "xs"
      ? "w-[250px] h-[200px]"
      : size === "s"
      ? "w-[320px] h-[262px]"
      : size === "m"
      ? "w-[400px] h-[375px]"
      : size === "xl"
      ? "w-[800px] h-[400px]" // Matches the aspect ratio for xl
      : "w-[600px] h-[375px]";

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block">
      <div
        className={`${projectSizeClass} c2 flex rounded-md overflow-hidden group cursor-pointer`}
      >
        <div className={`${imageSizeClass} bg-white overflow-hidden rounded-md`}>
          <div className="group-hover:scale-105 transition-all duration-700">
            <img
              src={image}
              alt="Project Image"
              style={{
                transform: `scaleX(${scalex}) scaleY(${scaley}) translate(${shiftx}px, ${shifty}px)`,
              }}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;
