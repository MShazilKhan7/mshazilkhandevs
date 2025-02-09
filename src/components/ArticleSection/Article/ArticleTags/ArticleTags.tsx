"use client";
import Pill from "@/components/Pills/Pill";
import React, { useState, useEffect, useRef } from "react";
import useOverflow from "@/hooks/useOverflow";

interface ArticleTagsProps {
  tags: {
    title: string;
    slug: {
      current: string;
      _type: string;
    };
  }[];
  isCard: boolean;
  onTagClick?: () => void;
}

function ArticleTags({ tags, isCard }: ArticleTagsProps) {
  const onClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const { isCalculated, tagsContainerRef, overflowCount } = useOverflow(
    tags,
    isCard
  );

  return (
    <div
      className={`w-full flex gap-2 ${isCard ? "flex-nowrap overflow-hidden" : "flex-wrap justify-center"} ${isCalculated && isCard ? "visible" : !isCard ? "visible" : "invisible"} `}
      ref={tagsContainerRef}
    >
      {tags?.map(({ title }, index) => {
        // render all elems that do not overflow.
        if (index < tags.length - overflowCount) {
          return (
            <Pill
              onClickHandler={onClickHandler}
              key={index}
              text={`#${title}`}
              variant="hover-outlined"
            />
          );
        }
        return null;
      })}
      {overflowCount > 0 && isCard && (
        <p className="text-dark-secondary_three dark:text-white mr-3">{`+${overflowCount}`}</p>
      )}
    </div>
  );
}

export default ArticleTags;
