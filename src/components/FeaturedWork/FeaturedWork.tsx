import React from "react";
import FeaturedWorkCard from "../FeaturedWorkCard/FeaturedWorkCard";
import { IProject } from "@/types/interfaces";

interface FeaturedWorkProps {
  projects: IProject[];
}

const FeaturedWork = ({ projects }: FeaturedWorkProps) => {
  return (
    <div className="flex flex-col gap-4 py-2">
      <h2 className="dark:text-white text-dark-primary text-lg font-semibold">
        Featured Work
      </h2>
      <div className="w-full featured-work-section grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 place-items-center">
        {projects?.map((project, index) => {
          return <FeaturedWorkCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedWork;
