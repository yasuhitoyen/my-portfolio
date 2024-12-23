import React from "react";
import { motion } from "framer-motion";

/**
 * Animation Variants
 * Feel free to tweak these values to get the effect you want.
 */
const containerVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.95,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.6,
    },
  },
};

/**
 * Layout for XL (Large) Projects
 * Currently identical to the default, but you can modify it freely.
 */
const ProjectXL = ({
  image,
  title,
  description,
  scalex,
  scaley,
  shiftx,
  shifty,
  link,
}) => {
  const projectSizeClass = "w-[800px] h-[550px]"; 
  const imageSizeClass = "w-[800px] h-[400px]";
  const titleClass = "text-[35px] font-bold text-gray-200";
  const descriptionClass = "text-[30px] text-gray-400";

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
      // Because <motion.a> also works, or you could wrap a <motion.div> inside a regular <a>.
      variants={containerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }} 
      // 'amount' controls how much of the component must be in view before the animation triggers
    >
      <div
        className={`${projectSizeClass} c2 flex flex-col rounded-xl overflow-hidden group cursor-pointer`}
      >
        {/* Image Section */}
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

        {/* Title and Description (with hover effect) */}
        <div className="text-center mt-2 px-1 relative overflow-hidden">
          {title && (
            <h2 className={titleClass}>{title}</h2>
          )}

          {description && (
            <p
              className={`${descriptionClass} transition-all duration-500 transform 
                          group-hover:-translate-y-2 group-hover:opacity-0 leading-tight`}
            >
              {description}
            </p>
          )}

          {/* "More Info ->" appears on hover */}
          <div>
            <p
              className={`absolute left-0 right-0 bottom-2 text-gray-200
                        transition-all duration-500 transform 
                        translate-y-4 opacity-0 
                        group-hover:translate-y-[-16px] group-hover:opacity-100
                        ${descriptionClass}`}
            >
              More Info &rarr;
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

/**
 * Layout for all non-XL (default) Projects
 */
const ProjectDefault = ({
  size,
  image,
  title,
  description,
  scalex,
  scaley,
  shiftx,
  shifty,
  link,
}) => {
  const projectSizeClass =
    size === "xs"
      ? "w-[250px] h-[250px]"
      : size === "s"
      ? "w-[320px] h-[320px]"
      : size === "m"
      ? "w-[400px] h-[450px]"
      : "w-[600px] h-[450px]"; // fallback

  const imageSizeClass =
    size === "xs"
      ? "w-[250px] h-[200px]"
      : size === "s"
      ? "w-[320px] h-[262px]"
      : size === "m"
      ? "w-[400px] h-[375px]"
      : "w-[600px] h-[375px]"; // fallback

  const titleClass =
    size === "m"
      ? "text-[12px] font-semibold text-gray-200"
      : "text-[12px] font-bold text-gray-200";

  const descriptionClass =
    size === "m" ? "text-sm text-gray-400" : "text-[12px] text-gray-400";

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
      variants={containerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className={`${projectSizeClass} c2 flex flex-col rounded-xl overflow-hidden group cursor-pointer`}
      >
        {/* Image Section */}
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

        {/* Title and Description (with hover effect) */}
        <div className="text-center mt-2 px-1 relative overflow-hidden">
          {title && <h2 className={titleClass}>{title}</h2>}

          {description && (
            <p
              className={`${descriptionClass} transition-all duration-500 transform 
                          group-hover:-translate-y-2 group-hover:opacity-0 leading-tight`}
            >
              {description}
            </p>
          )}

          {/* "More Info ->" appears on hover */}
          <div>
            <p
              className={`absolute left-0 right-0 bottom-2 text-gray-200
                        transition-all duration-500 transform 
                        translate-y-4 opacity-0 
                        group-hover:translate-y-0 group-hover:opacity-100
                        ${descriptionClass}`}
            >
              More Info &rarr;
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

/**
 * Main Component:
 * If size == "xl", return the separate ProjectXL layout
 * Otherwise, return ProjectDefault
 */
const Project = ({
  size,
  image,
  title,
  description,
  scalex = 1.0,
  scaley = 1.0,
  shiftx = 0,
  shifty = 0,
  link,
}) => {
  if (size === "xl") {
    return (
      <ProjectXL
        image={image}
        title={title}
        description={description}
        scalex={scalex}
        scaley={scaley}
        shiftx={shiftx}
        shifty={shifty}
        link={link}
      />
    );
  }

  return (
    <ProjectDefault
      size={size}
      image={image}
      title={title}
      description={description}
      scalex={scalex}
      scaley={scaley}
      shiftx={shiftx}
      shifty={shifty}
      link={link}
    />
  );
};

export default Project;
