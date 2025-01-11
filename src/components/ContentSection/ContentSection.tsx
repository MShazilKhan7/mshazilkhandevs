"use client";
import React, { useState } from "react";
import ContentCard from "../ContentCard/ContentCard";
import VisualContentDialog from "../VisualContentDialog/VisualContentDialog";
import { ContentPost } from "@/types/interfaces";

interface ContentSectionProps {
  posts: ContentPost[];
}

function ContentSection({ posts }: ContentSectionProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [post, setPost] = useState<any>();

  const onOpenChange = () => {
    console.log("called on open change.");
    setDialogOpen(!dialogOpen);
  };
  return (
    <div className="px-6 py-4">
      <div className="py-2 pb-8 text-center">
        <h2 className="tracking-tight font-bold text-[35px] text-light-text_primary dark:text-white">
          Welcome to My Content Space. Learn Interactively
        </h2>
      </div>
      <div className="w-full flex flex-wrap gap-8 md:justify-center lg:justify-start ">
        {posts?.map((post, index) => {
          return (
            <ContentCard
              key={index}
              post={post}
              buttonText="View"
              onOpenChange={() => {
                setPost(post);
                onOpenChange();
              }}
            />
          );
        })}
        <VisualContentDialog
          open={dialogOpen}
          onOpenChange={onOpenChange}
          post={post}
        />
      </div>
    </div>
  );
}

export default ContentSection;
