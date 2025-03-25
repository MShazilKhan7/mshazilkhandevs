"use client";
import React from "react";
import FeaturedWorkCard from "../FeaturedWorkCard/FeaturedWorkCard";
import { fetchDataFromSanity } from "@/lib/fetch";
import { SanityDocument } from "next-sanity";
import { featuredProjectsQuery } from "@/sanity/lib/queries";
import { IProject } from "@/types/interfaces";

const FeaturedWork = async () => {
  const projects = await fetchDataFromSanity<SanityDocument<IProject>[]>({
    query: featuredProjectsQuery,
  });

  return (
    <div className="flex flex-col gap-4 py-2">
      <h2 className="dark:text-white text-dark-primary text-lg font-semibold">
        Featured Work
      </h2>
      <div className="w-full featured-work-section grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 place-items-center">
        {projects?.map((project, index) => {
          return <FeaturedWorkCard project={project} key={index} />;
        })}
      </div>
      {/* <DisplayCard /> */}
    </div>
  );
};

export default FeaturedWork;
