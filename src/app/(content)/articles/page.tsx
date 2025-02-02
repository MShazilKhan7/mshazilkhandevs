import ArticleSection from "@/components/ArticleSection/ArticleSection";
import React from "react";
import { fetchDataFromSanity } from "@/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

export const revalidate = 60;

const Articles = async () => {
  const articles = await fetchDataFromSanity<SanityDocument[]>({
    query: postsQuery,
  });

  return (
    <div className="flex justify-center">
      <ArticleSection articles={articles} />
    </div>
  );
};

export default Articles;
