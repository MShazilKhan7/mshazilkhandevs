"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import WorkTags from "../WorkTags/WorkTags";
import { urlFor } from "@/sanity/utils/sanity-utils";

interface WorkCardProps {
  project?: any;
  path?: string;
}

const WorkCard = ({ project, path }: WorkCardProps) => {
  const router = useRouter();
  const {
    title,
    thumbnail: { alt = "", asset: { _ref = "" } = {} } = {},
    tags,
    slug,
  } = project;
  const onClickHandler = () => {
    router.push(`projects/${slug?.current}`);
  };
  return (
    <div
      onClick={onClickHandler}
      className="w-full article-card transition-all duration-200 cursor-pointer flex gap-4 hover:bg-[#F5F8FC] dark:hover:bg-dark-secondary_two rounded-md px-4 py-4 hover:shadow-md"
    >
      <div className="image-div max-[800px]:w-[30vw] max-[800px]:h-[25vw] w-[200px] h-[150px] rounded-md flex items-center">
        {_ref && (
          <Image
            src={`${urlFor(_ref)}`}
            alt={alt || ""}
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
          <h2 className="font-bold text-light-text_primary">{title}</h2>
        </div>
        <div className="pill-section">
          <WorkTags tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
