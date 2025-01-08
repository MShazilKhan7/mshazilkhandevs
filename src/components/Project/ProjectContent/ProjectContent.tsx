import React from "react";
import Image from "next/image";
interface ProjectContentProps {
  project: any;
}

function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="project-content relative max-[800px]:w-full w-[740px] px-4 text-white">
      <div className="w-full h-full">
        {project?.project.map((project: any) => {
          console.log("project found", project);
          return (
            <>
              <Image
                alt={project.thumbnailAlt}
                src={project?.image || ""}
                layout="responsive"
                className="mb-3"
                width={700}
                height={500}
              />
              {project?.text && (
                <div className="py-4">
                  <p className="text-white">{project.text}</p>
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
