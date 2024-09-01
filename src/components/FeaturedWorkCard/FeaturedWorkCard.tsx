  "use client";
  import React, { useState } from "react";
  import { Button } from "../ui/button";
  import { GitHubLogoIcon } from "@radix-ui/react-icons";
  import { LuExternalLink } from "react-icons/lu";
  import VideoDialog from "../VideoDialog/VideoDialog";
  const FeaturedWorkCard = () => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const onOpenChange = () => {
      setDialogOpen(!dialogOpen);
    };

    return (
      <div className="card w-80 text-secondary">
        <div
          onClick={onOpenChange}
          className="image-container w-80 h-52 rounded-lg cursor-pointer"
        >
          <img
            src="/sample.png"
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="details flex flex-col py-2">
          <div className="flex items-center justify-between gap-8">
            <h3 className="project-title text-sm">Quiks</h3>
            <Button
              size={"sm"}
              style={{
                border: "1px solid #0F0F0F",
              }}
              className="bg-transparent hover:none"
              variant={"default"}
            >
              FULL STACK
            </Button>
          </div>
          <div className="tech-stack gap-12 flex items-between">
            <h3 className="stack text-sm">ReactJs, Nodejs, Express, MySql, </h3>
            <div className="flex justify-between items-center gap-2 px-4">
              <GitHubLogoIcon />
              <LuExternalLink />
            </div>
          </div>
        </div>
        <VideoDialog open={dialogOpen} onOpenChange={onOpenChange} />
      </div>
    );
  };

  export default FeaturedWorkCard;
