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
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [videoDialogOpen, setVideoDialogOpen] = useState<boolean>(false);

  const onOpenVideoChange = (videoId: string) => {
    setSelectedVideoId(videoId); // Set the videoId for the dialog
    setVideoDialogOpen(true); // Open the video dialog
  };

  const onVideoDialogClose = () => {
    setVideoDialogOpen(false);
    setSelectedVideoId(null); // Clear videoId when closing
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
                onOpenVideoChange(post.videoId); // Pass the videoId directly
              }}
            />
          );
        })}
        <VisualContentDialog
          open={dialogOpen}
          onOpenChange={onOpenChange}
          post={post}
        />
        {selectedVideoId && (
          <VideoDialog
            open={videoDialogOpen}
            videoId={selectedVideoId}
            onOpenChange={onVideoDialogClose}
          />
        )}
      </div>
    </div>
  );
}

export default ContentSection;
