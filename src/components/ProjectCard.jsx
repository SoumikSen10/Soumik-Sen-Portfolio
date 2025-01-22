import React from "react";
import { PinContainer } from "./ui/3d-pin"; // Assuming the path is correct


export function ProjectCard({name, desc, url,projImg,github}) {
  return (
    <div className="h-[22rem]  flex items-center justify-center mb-9 ">
      <PinContainer title={url} href={url}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[21rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              {desc}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <img src={projImg} alt="Project image" className="w-full h-full object-cover rounded-lg" />
           </div>
           
        </div>
      </PinContainer>
    </div>
  );
}
