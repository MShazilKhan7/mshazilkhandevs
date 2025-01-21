"use client";
import { GithubComment } from "@/components/GithubComment/GithubComment";
import React from "react";

function ArticleFooter() {
  return (
    <div className="">
      {/* here we are going to write article footer dets.  */}
      <p className="font-bold text-xl font-serif">Leave A Comment</p>

      <GithubComment />
    </div>
  );
}

export default ArticleFooter;
