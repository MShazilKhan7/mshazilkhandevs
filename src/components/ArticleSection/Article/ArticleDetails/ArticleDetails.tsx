import React from "react";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import ArticleContent from "../ArticleContent/ArticleContent";
import ArticleFooter from "../ArticleFooter/ArticleFooter";

interface ArticleDetailsProps {
  article: any;
}

// max-[800px]:w-full w-[740px] -- given parent's width as this instead of individual children, children are adopting to this - DRY principle.

function ArticleDetails({ article }: ArticleDetailsProps) {
  return (
    <section className="article-details max-[800px]:w-full w-[740px] flex flex-col items-center">
      <div className="article-header">
        <ArticleHeader post={article} />
      </div>
      <div className="w-full">
        <ArticleContent content={article?.body} />
      </div>
      <div className="p-4 w-full">
        {/* article footer */}
        <ArticleFooter />
      </div>
    </section>
  );
}

export default ArticleDetails;
