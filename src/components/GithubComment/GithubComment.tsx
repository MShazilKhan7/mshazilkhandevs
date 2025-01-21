import React from "react";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
export const GithubComment = () => {
  const { theme } = useTheme(); // Get current theme

  return (
    <Giscus
      id="comments"
      repo="MShazilKhan7/mshazilkhandevs"
      repoId={`${process.env.NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID}`}
      category="Comments"
      categoryId={process.env.NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID}
      mapping="url"
      term="Welcome to Shazil's Blog"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme == "dark" ? "noborder_light" : "light"}
      lang="en"
      loading="eager"
    />
  );
};
