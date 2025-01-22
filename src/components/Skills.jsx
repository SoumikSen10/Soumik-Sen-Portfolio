import React from 'react';

import {skills} from '../data/skills';

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center items-center relative z-10">
      <div className="relative flex flex-col justify-between items-center w-full max-w-5xl gap-3">
        <h1 className="text-4xl font-semibold text-center mt-5 md:text-3xl md:mt-3 text-white">
          SKILLS
        </h1>
        <p className="text-lg text-center max-w-lg text-secondary md:text-base">
          Here are some of my skills on which I have been working on for the past 3 years.
        </p>
        <div className="w-full flex flex-wrap justify-center gap-8 mt-8">
          {skills.map((skill) => (
            <div
              className="w-full max-w-lg bg-black border border-purple-500 shadow-lg rounded-lg p-6 md:max-w-md md:p-4 sm:max-w-sm"
              key={skill.title}
            >
              <h2 className="text-2xl font-semibold text-center text-secondary mb-5">
                {skill.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-5">
                {skill.skills.map((item) => (
                  <div
                    className="flex items-center justify-center gap-2 text-base font-medium text-primary-80 border border-primary-80 rounded-md px-4 py-2 md:text-sm md:px-3 sm:text-sm sm:px-2"
                    key={item.name}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-6 h-6"
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
