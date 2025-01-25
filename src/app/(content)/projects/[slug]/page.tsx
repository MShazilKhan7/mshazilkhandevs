import ProjectDetails from "@/components/Project/ProjectDetails/ProjectDetails";
import { ProjectsConfig } from "@/constants/Projects/ProjectsConfig";
import React from "react";
import { useMemo } from "react";
import { projectQuery } from "@/sanity/lib/queries";
import { fetchDataFromSanity } from "@/lib/fetch";
import { SanityDocument } from "next-sanity";

interface Props {
  params: {
    slug: string; // The dynamic slug from the URL
  };
}

export const Project = async ({ params }: Props) => {
  const project = await fetchDataFromSanity<SanityDocument>({
    query: projectQuery,
    params,
  });

  console.log("single project", project);
  return (
    <div>
      <ProjectDetails project={project} />
    </div>
  );
};

export default Project;
