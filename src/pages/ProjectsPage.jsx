import React from "react";
import { ProjectCard } from "@/components/ProjectCard";

import { PredictiX,VoxDebate,CryptoSphere } from "../assets/index";

import { Codebases } from "@/components/Codebases";

const ProjectsPage = () => {
  return( 
    <div className="mx-auto my-auto px-4 py-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6">PROJECTS</h2>
        <div className="flex flex-wrap justify-center gap-2">
        <ProjectCard name="VoxDebate" desc="VoxDebate is an innovative AI-powered debate platform that leverages Hugging Face AI model and Google Gemini Pro, to create a seamless debating experience. " url="https://vox-debate.vercel.app/" projImg={VoxDebate}/> 
        <ProjectCard name="PredictiX" desc="PredictiX is a multi-disease prediction system that accurately predicts lung cancer, breast cancer, diabetes, and heart disease." url="https://predicti-x-v2.vercel.app/" projImg={PredictiX}/> 
        <ProjectCard name="CryptoSphere" desc="A react js application that shows the current price of different cryptocurrencies" url="https://crypto-sphere-app.vercel.app/" projImg={CryptoSphere}/> 
        </div>
        <Codebases />
      </div>
      );
};

export default ProjectsPage;
