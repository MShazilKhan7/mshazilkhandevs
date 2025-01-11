import React from "react";
import { PortableText } from "@portabletext/react";
import articePortableText from "./PortableComponent";

interface ArticleContentProps {
  content: any;
}
function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="article-content max-[800px]:w-full w-[740px] pt-20 px-4">
      <PortableText value={content} components={articePortableText} />
    </div>
  );
}

export default ArticleContent;
