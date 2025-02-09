"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LuExternalLink } from "react-icons/lu";
import VideoDialog from "../VideoDialog/VideoDialog";
import Pill from "../Pills/Pill";
const FeaturedWorkCard = () => {
  return (
    <div className="card w-80 text-light-text_secondary dark:text-dark-text_white">
      <div className="image-container w-80 h-52 rounded-lg cursor-pointer">
        <img
          src="/sample.png"
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <div className="details flex flex-col gap-1 py-2">
        <div className="flex items-center justify-between gap-8">
          <h3 className="project-title text-sm font-semibold">Quiks</h3>
          <Pill text="Full Stack" variant="hover-outlined" />
        </div>
        <div className="tech-stack gap-12 flex items-between">
          <h3 className="stack text-sm">ReactJs, Nodejs, Express, MySql, </h3>
          <div className="flex justify-between items-center gap-2 px-4">
            <GitHubLogoIcon />
            <LuExternalLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkCard;
