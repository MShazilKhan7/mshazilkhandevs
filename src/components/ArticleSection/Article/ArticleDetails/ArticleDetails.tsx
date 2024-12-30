import React from "react";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import ArticleContent from "../ArticleContent/ArticleContent";

interface ArticleDetailsProps {
  article: any;
}

function ArticleDetails({ article }: ArticleDetailsProps) {
  return (
    <section className="article-details flex flex-col items-center">
      <div className="article-header">
        <ArticleHeader post={article} />
      </div>
      <div>
        <ArticleContent content={article?.body} />
      </div>
      <div>{/* article footer */}</div>
    </section>
  );
}

export default ArticleDetails;
