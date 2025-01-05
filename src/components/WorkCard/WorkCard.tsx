"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import WorkTags from "../WorkTags/WorkTags";

interface WorkCardProps {
  project?: any;
  path?: string;
}

const WorkCard = ({ project, path }: WorkCardProps) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`projects/${project?.slug}`);
  };
  return (
    <div
      onClick={onClickHandler}
      className="w-full article-card transition-all duration-200 cursor-pointer flex gap-4 hover:bg-dark-secondary_two rounded-md px-4 py-4 hover:shadow-sm"
    >
      <div className="image-div max-[800px]:w-[30vw] max-[800px]:h-[25vw] w-[200px] h-[150px] rounded-md flex items-center">
        {project?.thumbnail && (
          <Image
            src={project?.thumbnail}
            alt={project?.thumbnailAlt || ""}
            width={200}
            height={150}
            quality={70}
            className="w-full h-full object-cover rounded-md"
            priority={true}
          />
        )}
      </div>
      <div className="right-container max-[800px]:w-[58vw] w-[calc(100%-200px)] flex flex-col gap-4 max-[800px]:justify-start justify-between">
        <div className="top-section">
          <h2 className="text-white font-bold">{project.title}</h2>
        </div>
        <div className="pill-section">
          <WorkTags tags={project.tags} />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
