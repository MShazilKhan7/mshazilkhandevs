import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/utils/sanity-utils";
interface ProjectContentProps {
  project: any;
}

function ProjectContent({ project }: ProjectContentProps) {
  const { title, projectDetails } = project;
  return (
    <div className="project-content relative max-[800px]:w-full w-[740px] px-4 text-light-text_primary dark:text-white">
      <div className="w-full h-full">
        {projectDetails?.map((project: any) => {
          return (
            <>
              <Image
                alt={""}
                src={`${urlFor(project?.image.asset?._ref)}`}
                layout="responsive"
                className="mb-3"
                width={700}
                height={500}
                blurDataURL="/loading.gif"
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
