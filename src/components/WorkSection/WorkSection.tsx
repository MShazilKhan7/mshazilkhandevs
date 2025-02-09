import React from "react";
import DisplayCard from "../ArticleCard/ArticleCard";
import WorkCard from "../WorkCard/WorkCard";
import { ProjectsConfig } from "@/constants/Projects/ProjectsConfig";
import { projectsQuery } from "@/sanity/lib/queries";
import { fetchDataFromSanity } from "@/lib/fetch";
import { SanityDocument } from "next-sanity";

const WorkSection = async () => {
  const projects = await fetchDataFromSanity<SanityDocument[]>({
    query: projectsQuery,
  });

  return (
    <div className="max-[800px]:w-full w-[740px] px-4 text-light-text_secondary dark:text-white article-section flex flex-col gap-4 pt-32">
      <div className="header px-2">
        <h2 className="text-5xl font-bold">Best Work.</h2>
        <div className="py-4">
          <p>
            This is my work of art, front-end, backend, ML projects. I also have
            great understanding of Software Development and Design.
          </p>
        </div>
      </div>
      <div>
        {projects?.map((project, index) => (
          <WorkCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
