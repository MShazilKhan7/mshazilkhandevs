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
    mainImage,
  } = article || {};

  const alt = mainImage?.alt ?? "";
  const _ref = mainImage?.asset?._ref ?? "";
  const router = useRouter();

  const onClickHandler = () => {
    router.push(`/articles/${path}`);
  };
  return (
    <div
      onClick={onClickHandler}
      className="w-full mt-1 article-card transition-all duration-200 cursor-pointer flex gap-2 hover:bg-[#F5F8FC] dark:hover:bg-dark-secondary_two rounded-md px-4 py-4 hover:shadow-md flex-col"
    >
      <div className="flex gap-4">
        <div className="image-div max-[800px]:w-[30vw] max-[800px]:h-[25vw] w-[200px] h-[150px] rounded-md flex items-center min-w-[130px] min-h-[130px]">
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
          <div className="top-section px-2 max-w-full overflow-hidden">
            <h2 className="font-bold text-md text-light-text_primary max-w-full  mr-2">
              {title && title}
            </h2>
            <p className="text-sm text-dark-text_primary">
              {estimatedReadingTime} min
            </p>
            <p className="font-normal text-ellipsis break-words line-clamp-2 dark:text-dark-text_secondary mt-1">
              {meta_description}
            </p>
          </div>
        </div>
      </div>
      <ArticleTags isCard={false} tags={tags} className="flex justify-start" />
    </div>
  );
};

export default ArticleCard;
