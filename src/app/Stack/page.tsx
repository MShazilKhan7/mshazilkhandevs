import ToolCard from "@/components/ToolCard/ToolCard";
import { ToolLinks } from "@/constants/ToolLinks/Toollinks";
import React from "react";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center pt-32">
      <div className="max-[800px]:w-full w-[740px] px-4 text-light-text_secondary dark:text-white flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <p className="text-6xl tracking-tight font-bold">Stack</p>
          <p>Tools & Technologies I use & love that you should check out 🛠️</p>
        </div>

        {/* tools section  */}
        <div className="tools w-full flex flex-wrap gap-2">
          {ToolLinks.map(({ title, description, imageUrl }) => {
            return (
              <ToolCard
                title={title}
                description={description}
                imageUrl={imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
