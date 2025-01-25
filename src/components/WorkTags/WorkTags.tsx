import React from "react";
import Pill from "../Pills/Pill";
import { Tag } from "@/types/interfaces";

function WorkTags({ tags }: { tags: Tag[] }) {
  return (
    <div className="flex gap-2">
      {tags?.map((tag, index) => {
        return (
          <Pill key={index} text={`${tag?.title}`} variant="hover-outlined" />
        );
      })}
    </div>
  );
}

export default WorkTags;
