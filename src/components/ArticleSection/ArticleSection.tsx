import React from "react";
import DisplayCard from "../ArticleCard/ArticleCard";
import CategoriesBarSection from "../CategoriesBarSection/CategoriesBarSection";
import { fetchDataFromSanity } from "@/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import ArticleCard from "../ArticleCard/ArticleCard";

// export const revalidate = 60; // Optional: Revalidate data every 60 seconds (ISR)
interface ArticleSectionProps {
  articles: any[];
}
const ArticleSection = ({ articles }: ArticleSectionProps) => {
  return (
    <div className="max-[800px]:w-full w-[740px] px-4 text-light-text_secondary dark:text-white article-section pt-32 flex flex-col gap-4">
      <div className="header px-2">
        <h2 className="text-6xl font-bold ">Articles.</h2>
        <div className="py-4">
          <p>
            Explore my carefully crafted articles, offering you a
            multi-dimensional approach to mastering concepts.
          </p>
        </div>
      </div>
      <CategoriesBarSection />
      <div className="flex flex-col gap-2">
        {articles?.length > 0 &&
          articles.map((article, index) => (
            <ArticleCard
              article={article}
              key={index}
              path={article.slug.current}
            />
          ))}
      </div>
    </div>
  );
};

export default ArticleSection;
