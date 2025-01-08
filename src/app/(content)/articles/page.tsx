import ArticleSection from "@/components/ArticleSection/ArticleSection";
import React from "react";
import { fetchDataFromSanity } from "@/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

const Articles = async () => {
  const articles = await fetchDataFromSanity({ query: postsQuery });

  console.log("articles", articles);
  console.log("hellow");
  return (
    <div className="flex justify-center">
      <ArticleSection articles={articles} />
    </div>
  );
};

export default Articles;
