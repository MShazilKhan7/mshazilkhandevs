"use client";
import React, { useState, useEffect } from "react";
import VisualContentDialog from "@/components/VisualContentDialog/VisualContentDialog";
import ContentCard from "@/components/ContentCard/ContentCard";
import { contentPosts } from "@/constants/VisualContent/visualContentConfig";
const VisualContent = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [slides, setSlides] = useState<string[]>([""]);
  const onOpenChange = () => {
    console.log("called.");
    setDialogOpen(!dialogOpen);
  };
  return (
    <div className="px-6 py-4">
      <div className="py-2 pb-8 text-center">
        <h2 className="tracking-tight text-white font-bold text-[35px]">
          Welcome to My Content Space. Learn Interactively
        </h2>
      </div>
      <div className="w-full flex flex-wrap gap-8 md:justify-center lg:justify-start ">
        {contentPosts.map((content) => {
          return (
            <ContentCard
              ContentCardDetails={content}
              onOpenChange={() => {
                setSlides(content.contentSlides);
                onOpenChange();
              }}
            />
          );
        })}
        <VisualContentDialog
          open={dialogOpen}
          onOpenChange={onOpenChange}
          slides={slides}
        />
      </div>
    </div>
  );
};

{
  /* <button onClick={onOpenChange}>open</button> */
}

export default VisualContent;
