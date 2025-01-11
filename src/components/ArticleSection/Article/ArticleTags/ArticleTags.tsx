"use client";
import Pill from "@/components/Pills/Pill";
import React, { useState, useEffect } from "react";

interface ArticleTagsProps {
  tags: {
    title: string;
    slug: {
      current: string;
      _type: string;
    };
  }[];
  onTagClick?: () => void;
}

function ArticleTags({ tags }: ArticleTagsProps) {
  const onClickHandler = (event: React.MouseEvent) => {
    console.log("Child Event Stop Propagating ");
    event.stopPropagation();
  };
  return (
    <div className="flex gap-2">
      {tags?.map(({ title }, index) => {
        return (
          <Pill
            onClickHandler={onClickHandler}
            key={index}
            text={`#${title}`}
            variant="hover-outlined"
          />
        );
      })}
    </div>
  );
}

export default ArticleTags;
