import React from "react";
import Project from "./Project";
import busImage from "./assets/images/MadisonBusSystem.jpg";
import leagueImage from "./assets/images/league-of-legends.jpeg";
import splittechLogo from "./assets/images/Split Tech Logo.png";

const Projects = ({ id }) => {
  return (
    <section id={id}>
      <div className="w-full h-[800px] flex flex-col mt-[200px]">
        <div>
          <h4 className="text-[80px] font-bold clay-text c8-text ml-20 text-white">
            Projects
          </h4>
          <div className="flex flex-row items-center justify-center space-x-5">
            <div className="flex flex-col h-[550px] justify-between">
              <Project
                size="xs"
                image={busImage}
                scaley={2}
                scalex={2}
                shifty={40}
                title="Bus System Project"
                description="A system for enhancing bus operations and routing in Madison."
              />
              <Project
                size="xs"
                image={splittechLogo}
                scaley={0.95}
                scalex={0.95}
                shifty={20}
                link="https://devpost.com/software/splitech"
                title="SplitTech"
                description="Platform to streamline group expense management."
              />
            </div>
            <div>
              <Project
                size="xl"
                image={leagueImage}
                scaley={1}
                scalex={1}
                shifty={-40}
                shiftx={0}
                link="http://yasuyen.cc"
                title="YasuLoL"
                description="Web app for match statistics and AI-powered gameplay advice."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
