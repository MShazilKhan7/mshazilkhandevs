"use client";
import React, { useState } from "react";
import ContentCard from "../ContentCard/ContentCard";
import VisualContentDialog from "../VisualContentDialog/VisualContentDialog";
import { IContentPost } from "@/types/interfaces";
import VideoDialog from "../VideoDialog/VideoDialog";

interface ContentSectionProps {
  posts: IContentPost[];
}

function ContentSection({ posts }: ContentSectionProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [post, setPost] = useState<any>();
  const [videoDialogOpen, setVideoDialogOpen] = useState<boolean>(false);
  const onOpenVideoChange = () => {
    setVideoDialogOpen(!videoDialogOpen);
  };

  const onOpenChange = () => {
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
              onOpenVideoChange={() => {
                onOpenVideoChange();
              }}
            />
          );
        })}
        <VisualContentDialog
          open={dialogOpen}
          onOpenChange={onOpenChange}
          post={post}
        />
        <VideoDialog
          open={videoDialogOpen}
          videoId={`egzqP3llrP4`}
          onOpenChange={onOpenVideoChange}
        />
      </div>
    </div>
  );
}

export default ContentSection;
