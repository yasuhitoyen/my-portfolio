import React from "react";
// Import your PDF from the attachments folder:
import MyResume from "./assets/attachments/Resume.pdf";

const ArcText = () => {
  // Replace the "email" entry with your resume link:
  const links = [
    { href: "https://www.linkedin.com/in/michael-yen-3a971b263/", text: "linkedin" },
    { href: "https://github.com/yasuhitoyen", text: "github" },
    { href: MyResume, text: "resume" }, // use your PDF instead of mailto:
  ];

  return (
    <div className="flex justify-center items-center">
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define the smaller arc path */}
        <defs>
          <path
            id="arcPath"
            d="M150,250 A100,100 0 0,1 250,150"
            fill="none"
            style={{ pointerEvents: "none" }}
          />
        </defs>

        {/* Map over each link and place it on the smaller arc */}
        {links.map((link, index) => {
          const totalLinks = links.length;
          const offset = (index / totalLinks) * 100;

          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ pointerEvents: "all", cursor: "pointer" }}
            >
              <text
                fontSize="12"
                fontWeight="bold"
                fill="white"
                className="transform origin-center hover:scale-[1.15] transition-all duration-300 lowercase"
                style={{ pointerEvents: "all", transformBox: "fill-box" }}
              >
                <textPath href="#arcPath" startOffset={`${offset}%`}>
                  {link.text}
                </textPath>
              </text>
            </a>
          );
        })}
      </svg>
    </div>
  );
};

export default ArcText;
