  "use client";
  import AnimatedHeading from "@/components/AnimatedHeading/AnimatedHeading";
  import WorkTags from "@/components/WorkTags/WorkTags";
  import { useRouter } from "next/navigation";
  import React from "react";
  import { GitHubLogoIcon } from "@radix-ui/react-icons";
  import { LuExternalLink } from "react-icons/lu";

  interface ProjectHeader {
    project: any;
  }

  function ProjectHeader({ project }: ProjectHeader) {
    const router = useRouter();
    const onClickHandler = () => {
      router.push("/projects");
    };
    return (
      <div className="max-[800px]:w-full w-[740px] pt-20 px-4 flex flex-col gap-4 text-light-text_primary dark:text-white">
        <AnimatedHeading heading="All Projects" onClickHandler={onClickHandler} />
        <div className="project-title flex justify-between items-center pt-16 pb-6">
          <h1 className="text-4xl font-semibold tracking-tighter ">
            {project?.title || "No Project Title"}
          </h1>
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
