import React from "react";
import Pill from "../Pills/Pill";
import { PillVariant, Tag } from "@/types/interfaces";
import useOverflow from "@/hooks/useOverflow";

interface WorkTagsProps {
  tags: Tag[];
  isCard: boolean;
  variant?: PillVariant;
}

function WorkTags({ tags, isCard, variant }: WorkTagsProps) {
  const { isCalculated, overflowCount, tagsContainerRef } = useOverflow(
    tags,
    isCard
  );
  return (
    <div
      className={`w-full pr-4 items-center flex gap-2 ${isCard ? "flex-nowrap overflow-hidden" : "flex-wrap"} ${isCalculated && isCard ? "visible" : !isCard ? "visible" : "invisible"} `}
      ref={tagsContainerRef}
    >
      {tags?.map(({ title }, index) => {
        // render all elems that do not overflow.
        if (index < tags.length - overflowCount) {
          return (
            <Pill
              key={index}
              text={`${title}`}
              variant={variant || "hover-outlined"}
            />
          );
        }
        return null;
      })}
      {overflowCount > 0 && isCard && (
        <p className="text-dark-secondary_three text-[12px] dark:text-light-secondary">{`+${overflowCount}`}</p>
      )}
    </div>
  );
}

export default WorkTags;
