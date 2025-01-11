import AnimatedHeading from "@/components/AnimatedHeading/AnimatedHeading";
import React from "react";
import ProjectHeader from "../ProjectHeader/ProjectHeader";
import ProjectContent from "../ProjectContent/ProjectContent";

interface ProjectDetailsProps {
  project: any;
}

function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="project-dets article-details w-full flex flex-col items-center">
      <ProjectHeader project={project} />
      <div className="project-content">
        <ProjectContent project={project} />
      </div>
    </div>
  );
}

export default ProjectDetails;
