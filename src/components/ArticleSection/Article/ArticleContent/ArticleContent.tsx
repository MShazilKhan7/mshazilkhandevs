import React from "react";
import { PortableText } from "@portabletext/react";

interface ArticleContentProps {
  content: any;
}
function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="article-content max-[800px]:w-full w-[740px] pt-20 px-4 text-white">
      <PortableText value={content} />
    </div>
  );
}

export default ArticleContent;
