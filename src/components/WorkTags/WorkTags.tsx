import React from "react";
import Pill from "../Pills/Pill";

function WorkTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex gap-2">
      {tags?.map((title, index) => {
        return <Pill key={index} text={`${title}`} variant="hover-outlined" />;
      })}
    </div>
  );
}

export default WorkTags;
