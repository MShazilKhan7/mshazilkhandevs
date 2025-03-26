"use client";
import { ToolLinks } from "@/constants/ToolLinks/Toollinks";
import React from "react";
import ToolCard from "../ToolCard/ToolCard";
import { useRouter } from "next/navigation";
// Featured Stack on Home
const FeaturedStack = () => {
  const firstThreeTools = ToolLinks.slice(0, 3); // Get first three tools
  const router = useRouter();

  return (
    <div className="featured-stack py-4 border border-light-secondary px-4 rounded-md  dark:border-dark-secondary_three mt-4">
      <p className="font-bold text-md">Stack</p>
      <p className="">Software and Resources I use Regularly</p>
      <div className="tools w-full flex flex-col gap-2 py-4">
        {firstThreeTools.map(({ title, description, imageUrl }, index) => {
          return (
            <ToolCard
              key={index}
              title={title}
              description={description}
              imageUrl={imageUrl}
              className="w-full"
            />
          );
        })}
        <div
          onClick={() => {
            router.push("/Stack/");
          }}
          className="all-tools border dark:border-dark-secondary_two rounded-md bg-light-secondary dark:bg-dark-secondary_two text-center p-2 hover:border-light-gray_80 dark:hover:border-dark-secondary_three transition-all ease-in-out cursor-pointer mt-2"
        >
          <p className="font-semibold text-dark-text_primary dark:text-light-secondary ">
            All Tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStack;
