import React from "react";
import Project from "./Project";
import busImage from "./assets/images/MadisonBusSystem.jpg";
import leagueImage from "./assets/images/league-of-legends.jpeg";
import splittechLogo from "./assets/images/Split Tech Logo.png";
import apocalypseImage from "./assets/images/ApocalypseImage.png";

const Projects = ({ id }) => {
  return (
    <section id={id}>
      <div className="w-full min-h-screen flex flex-col pt-[80px] px-4 bg-[#F8F5EF]">
        <div className="w-full items-center flex flex-col">
          <h4 className="text-[24px] md:text-[30px] font-extralight text-black">
            Here are my
          </h4>
          <h4 className="text-[32px] md:text-[40px] font-light text-black mb-10 ">
            Projects
          </h4>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8">
          <Project
            size="xs"
            image={busImage}
            scaley={2}
            scalex={2}
            shifty={40}
            title="Bus System Project"
            description="A system for enhancing bus operations and routing in Madison."
            microskills={["java", "algorithms", "sql"]}
            link="https://github.com/yasuhitoyen/Madison-Bus-System"
          />
          <Project
            size="xs"
            image={splittechLogo}
            scaley={0.95}
            scalex={0.95}
            shifty={20}
            title="SplitTech"
            description="Platform to streamline group expense management."
            microskills={["python", "sql", "javascript"]}
            link="https://devpost.com/software/splitech"
          />
          <Project
            size="xl"
            image={leagueImage}
            scaley={1.25}
            scalex={1.25}
            shifty={-10}
            shiftx={0}
            title="YasuLoL"
            description="Web app for match statistics and AI-powered gameplay advice."
            microskills={["react", "riot", "tailwind", "algorithms"]}
            link="https://github.com/yasuhitoyen/yasulol"
          />
          <Project
            size="xl"
            image={apocalypseImage}
            scaley={1.2}
            scalex={1.15}
            shifty={0}
            shiftx={0}
            title="Apocalypse"
            description="A multiplayer survival game coded in Java"
            microskills={["java", "algorithms", "git"]}
            link="https://github.com/yasuhitoyen/Apocalypse"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
