"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils/sanity-utils";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton component
import { SkeletonCard } from "@/components/SkeletonCard/SkeletonCard";

interface ProjectContentProps {
  project: any;
}

function ProjectContent({ project }: ProjectContentProps) {
  var { projectDetails } = project;

  return (
    <div className="project-content relative max-[800px]:w-full w-[740px] px-4 text-light-text_primary dark:text-white">
      <div className="w-full h-full">
        {projectDetails?.map((project: any) => {
          const [isLoading, setIsLoading] = useState(true); // Manage image load state
          return (
            <>
              {/* Skeleton Loader */}
              {isLoading && <SkeletonCard />}
              <Image
                alt={""}
                src={`${urlFor(project?.image?.asset?._ref)}`}
                layout="responsive"
                className="mb-1"
                width={700}
                height={500}
                blurDataURL="/loading.gif"
                onLoadingComplete={() => setIsLoading(false)} // Hide Skeleton when loaded
              />
              {project?.text && (
                <div className="py-4">
                  <p className="">{project.text}</p>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectContent;
