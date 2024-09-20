"use Client";
import React from "react";
import DisplayCard from "../DisplayCard/DisplayCard";
import CategoriesBarSection from "../CategoriesBarSection/CategoriesBarSection";
const ArticleSection = () => {
  return (
    <div className="max-[800px]:w-full w-[740px] px-4 text-white article-section pt-32  flex flex-col gap-4">
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
        <DisplayCard isArticleCard />
        <DisplayCard isArticleCard />
        <DisplayCard isArticleCard />
        <DisplayCard isArticleCard />
      </div>
    </div>
  );
};

export default ArticleSection;
