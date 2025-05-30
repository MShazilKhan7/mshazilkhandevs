"use client";
import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LuExternalLink } from "react-icons/lu";
import Pill from "../Pills/Pill";
import { IProject } from "@/types/interfaces";
import Image from "next/image";
import { urlFor } from "@/sanity/utils/sanity-utils";
import WorkTags from "../WorkTags/WorkTags";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";

interface FeaturedWorkCardProps {
  project: IProject;
}

const FeaturedWorkCard = ({ project }: FeaturedWorkCardProps) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="card w-full text-light-text_secondary dark:text-dark-text_white"
      onClick={() => {
        router.push(`projects/${project?.slug?.current}`);
      }}
    >
      <div className="image-container h-52 rounded-lg cursor-pointer">
        <Image
          src={`${urlFor(theme === "dark" ? project.themeImages?.dark?.asset._ref : project.themeImages?.light?.asset._ref)}`}
          alt={""}
          width={200}
          height={150}
          quality={70}
          className="w-full h-full  object-cover rounded-lg"
          priority={true}
        />
      </div>
      <div className="details flex flex-col gap-2 py-2" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-8">
          <h3 className="project-title text-sm font-semibold">
            {project?.title}
          </h3>
          {/* <Pill text="Full Stack" variant="hover-outlined" /> */}
        </div>
        <div className="tech-stack gap-12 flex justify-between">
          <WorkTags
            isCard={true}
            variant="text"
            tags={project.tags}
            className="text-[10px]"
          />
          <div className="flex justify-between items-center gap-2 px-4">
            {project?.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
              <GitHubLogoIcon className="cursor-pointer" />
              </a>
            )}
            {project?.links?.live ? (
              <a
                href={project?.links?.live || "/"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
              <LuExternalLink className="cursor-pointer" />
              </a>
            ) : (
              <LuExternalLink className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkCard;
