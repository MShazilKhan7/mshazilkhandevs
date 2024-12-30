import React from "react";
import DisplayCard from "../DisplayCard/DisplayCard";
import CategoriesBarSection from "../CategoriesBarSection/CategoriesBarSection";
import { fetchDataFromSanity } from "@/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";

// export const revalidate = 60; // Optional: Revalidate data every 60 seconds (ISR)
interface ArticleSectionProps {
  articles: any[];
}
const ArticleSection = ({ articles }: ArticleSectionProps) => {
  return (
    <div className="max-[800px]:w-full w-[740px] px-4 text-white article-section pt-32 flex flex-col gap-4">
      <div className="header text-white px-2">
        <h2 className="text-5xl font-bold text-white ">Articles.</h2>
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
            <DisplayCard
              article={article}
              key={index}
              isArticleCard
              path={article.slug.current}
            />
          ))}
      </div>
    </div>
  );
};

export default ArticleSection;
