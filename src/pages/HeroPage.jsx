import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SplitText from "../components/SplitText";

import "./HeroPage.css";

const HeroPage = () => {
  // Initialize the useNavigate hook
  const navigate = useNavigate();

  // Array to store each line's text and size
  const lines = [
    {
      text: "Hii, my name is ",
      color: "text-red-500",
      className:"line-1"
    },
    {
      text: "Soumik Sen",
      color: "text-white",
      className:"line-2"
    },
    {
      text: "I'm a Full-Stack Developer",
      color: "text-blue-500",
      className:"line-3"
    },
    {
      text: "I specialize in building exceptional digital experiences.",
      color: "text-white",
      className:"line-4"
    },
    {
      text: "Currently, I'm focused on building responsive full-stack web apps.",
      color: "text-white",
      className:"line-5"
    },
  ];

  // State to track which lines are visible
  const [visibleLines, setVisibleLines] = useState([true]); // Initially only first line is visible

  // Handler to trigger showing the next line
  const handleAnimationComplete = (index) => {
    console.log(`Line ${index + 1} animation complete!`); // Debugging: Check if animation is complete
    if (index + 1 < lines.length) {
      // Delay next line
      setVisibleLines((prev) => [...prev, true]);
    }
  };

  return (
    <div className="app-container">
      {lines.map((line, index) => (
        <div className="line-break mb-6" key={index}>
          {visibleLines[index] && (
            <SplitText
              text={line.text}
              className={` ${line.color} font-semibold text-center ${line.className} `} // Dynamically apply size
              
              delay={20}
              animationFrom={{
                opacity: 0,
                transform: "translate3d(0,50px,0)",
              }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-10px"
              onLetterAnimationComplete={() => handleAnimationComplete(index)} // Trigger next line
            />
          )}
        </div>
      ))}

      {/* Button with onClick handler to navigate to /projects */}
      <button
        onClick={() => navigate("/projects")} // Use navigate to go to the /projects page
        className="cursor-pointer inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-12 w-[15rem] z-auto "
      >
        View Work
      </button>
    </div>
  );
};

export default HeroPage;
