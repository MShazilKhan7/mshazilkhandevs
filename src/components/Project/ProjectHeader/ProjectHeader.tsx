"use client";
import AnimatedHeading from "@/components/AnimatedHeading/AnimatedHeading";
import WorkTags from "@/components/WorkTags/WorkTags";
import { useRouter } from "next/navigation";
import React from "react";

interface ProjectHeader {
  project: any;
}

function ProjectHeader({ project }: ProjectHeader) {
  const router = useRouter();
  const onClickHandler = () => {
    router.back();
  };
  return (
    <div className="max-[800px]:w-full w-[740px] pt-20 px-4 flex flex-col gap-4 text-light-text_primary dark:text-white">
      <AnimatedHeading heading="All Projects" onClickHandler={onClickHandler} />
      <div className="project-title pt-16 pb-6">
        <h1 className="text-4xl font-semibold tracking-tighter ">
          {project?.title}
        </h1>
      </div>
      <div className="tags">
        <WorkTags isCard={false} tags={project?.tags} variant="simple" />
      </div>
      <div className="description py-4">
        <p className="text-md">{project?.contribution}</p>
      </div>
    </div>
  );
}

export default ProjectHeader;
