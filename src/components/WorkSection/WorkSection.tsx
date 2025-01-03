import React from "react";
import DisplayCard from "../ArticleCard/ArticleCard";
import WorkCard from "../WorkCard/WorkCard";
import { ProjectsConfig } from "@/constants/Projects/ProjectsConfig";
function WorkSection() {
  return (
    <div className="max-[800px]:w-full w-[740px] px-4 text-white article-section pt-32 flex flex-col gap-4">
      <h1 className="tracking-tighter text-5xl">Best Work</h1>
      <p>
        This is my work of art, front-end, backend, ML projects. I also have
        great understanding of Software Development and Design.
      </p>
      <div>
        {ProjectsConfig.map((project, index) => (
          <WorkCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default WorkSection;
