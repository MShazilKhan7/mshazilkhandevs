"use client";
import React, { useState, useEffect } from "react";
import Pill from "../Pills/Pill";
import { useRouter } from "next/navigation";
import { IArticleHeaderData } from "@/types/interfaces";
import Image from "next/image";
import { urlFor } from "@/sanity/utils/sanity-utils";
import ArticleTags from "../ArticleSection/Article/ArticleTags/ArticleTags";
import WorkTags from "../WorkTags/WorkTags";

interface ArticleCardProps {
  article?: IArticleHeaderData;
  path?: string;
}

const ArticleCard = ({ article, path }: ArticleCardProps) => {
  const {
    _createdAt = "",
    title = "",
    body = "",
    tags = [],
    publishedAt = "",
    meta_description = "",
    estimatedReadingTime = 0,
    mainImage: { alt = "", asset: { _ref = "" } = {} } = {},
  } = article || {};
  const router = useRouter();

  const onClickHandler = () => {
    router.push(`/articles/${path}`);
  };
  console.log("article", article);
  return (
    <div
      onClick={onClickHandler}
      className="w-full article-card transition-all duration-200 cursor-pointer flex gap-4 hover:bg-[#F5F8FC] dark:hover:bg-dark-secondary_two rounded-md px-4 py-4 hover:shadow-md"
    >
      <div className="image-div max-[800px]:w-[30vw] max-[800px]:h-[25vw] w-[200px] h-[150px] rounded-md flex items-center">
        {_ref && (
          <Image
            src={`${urlFor(_ref)}`}
            alt={alt || ""}
            width={200}
            height={150}
            quality={70}
            className="w-full h-full rounded-md"
            priority={true}
            objectFit="contain"
            blurDataURL={`${urlFor(_ref)}`}
            placeholder="blur"
          />
        )}
      </div>
      <div className="right-container max-[800px]:w-[58vw] w-[calc(100%-200px)] flex flex-col gap-4 max-[800px]:justify-start justify-between">
        <div className="top-section">
          <h2 className="font-bold text-light-text_primary">
            {title && title}
          </h2>
        </div>
        <div className="pill-section">
          <ArticleTags tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
