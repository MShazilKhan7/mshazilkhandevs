import AnimatedHeading from "@/components/AnimatedHeading/AnimatedHeading";
import React from "react";

interface ProjectHeader {
  project: any;
}

function ProjectHeader({ project }: ProjectHeader) {
  return (
    <div className="max-[800px]:w-full w-[740px] pt-20 px-4 flex flex-col gap-4">
      <AnimatedHeading heading="All Projects" />
      <div className="project-title pt-16">
        <h1 className="text-4xl font-semibold tracking-tighter text-white">
          {project?.title}
        </h1>
      </div>
    </div>
  );
}

export default ProjectHeader;
