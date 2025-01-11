import ProjectDetails from "@/components/Project/ProjectDetails/ProjectDetails";
import { ProjectsConfig } from "@/constants/Projects/ProjectsConfig";
import React from "react";
import { useMemo } from "react";

interface Props {
  params: {
    slug: string; // The dynamic slug from the URL
  };
}

function Project({ params: { slug } }: Props) {
  const project = useMemo(() => {
    return ProjectsConfig.filter((project) => {
      return project.slug == slug;
    })[0];
  }, [slug]);

  console.log(project);

  return (
    <div>
      <ProjectDetails project={project} />
    </div>
  );
}

export default Project;
