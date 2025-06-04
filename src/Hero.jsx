import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import ClickableIcons from "./ClickableIcons";
import ResumeIcon from "./assets/icons/ResumeIcon.png";
import GithubIcon from "./assets/icons/GithubIcon.png";
import LinkedinIcon from "./assets/icons/LinkedinIcon.png";
import Headshot from "./assets/images/Headshot.jpg";
import MyResume from "./assets/attachments/Resume.pdf";

const Hero = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const isMobile = windowWidth < 800;

  return (
    <section id={id}>
      <div className="relative bg-[#F8F5EF] min-h-screen flex flex-col items-center justify-start pt-24 md:pt-32 lg:pt-40">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-6 lg:space-y-0 px-4 text-center">
          {/* Headshot */}
          <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] border-white rounded-full overflow-hidden flex justify-center border-[8px] lg:border-[10px]">
            <img src={Headshot} className="object-cover scale-[120%]" alt="Headshot" />
          </div>

          {/* Intro Text */}
          <div className="relative z-10">
            <h1 className="font-light mt-2 text-[32px] sm:text-[40px] lg:text-[60px] text-[#0F1013] select-none">
              <motion.span
                animate={{ rotate: [-15, 15], scale: [1.2, 1.5] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{ display: "inline-block", transformOrigin: "70% 70%" }}
              >
                👋
              </motion.span>{" "}
              Hi, I'm
            </h1>
            <h1 className="text-[36px] sm:text-[45px] lg:text-[55px] mt-2 text-[#0F1013]">
              Michael Yen
            </h1>
          </div>
        </div>

        {/* Tagline + Icons */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-4 py-8 rounded-lg w-full max-w-4xl relative z-10 mt-10 text-center"
        >
          {/* Tagline */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5">
            {["Student @ UW Madison", "Software Engineer", "Book Enthusiast"].map((label, idx) => (
              <React.Fragment key={label}>
                {idx > 0 && <span className="text-[20px] text-[#0F1013]">|</span>}
                <h1 className="text-[20px] sm:text-[24px] font-light text-[#0F1013] tracking-tighter transition-all duration-500 hover:-translate-y-1 select-none">
                  {label}
                </h1>
              </React.Fragment>
            ))}
          </div>

          {/* Social Icons */}
          <div className="mt-5 flex flex-wrap justify-center items-center gap-5">
            <ClickableIcons imgsrc={ResumeIcon} scale={80} link={MyResume} />
            <ClickableIcons imgsrc={GithubIcon} link={"https://github.com/yasuhitoyen"} />
            <ClickableIcons
              imgsrc={LinkedinIcon}
              link={"https://www.linkedin.com/in/michael-yen-3a971b263/"}
              scale={120}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
