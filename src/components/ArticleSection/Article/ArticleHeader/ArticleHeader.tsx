"use client";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Pill from "@/components/Pills/Pill";
import Image from "next/image";
import { urlFor } from "@/sanity/utils/sanity-utils";
import AnimatedHeading from "@/components/AnimatedHeading/AnimatedHeading";
import ArticleTags from "../ArticleTags/ArticleTags";

interface ArticleHeaderProps {
  post?: any;
}

// we will use the slug as the id for the article, and fetch the article based on the slug

function ArticleHeader({ post }: ArticleHeaderProps) {
  const {
    title,
    author,
    publishedAt,
    _updatedAt,
    mainImage,
    series,
    tags,
    estimatedReadingTime,
    mainImageWidth,
    mainImageHeight,
  } = post || {};
  const router = useRouter();
  const onClickHandler = () => {
    router.back();
  };
  return (
    <div className="article-section pt-20 px-4 flex flex-col gap-4">
      <AnimatedHeading heading="All Articles" onClickHandler={onClickHandler} />
      <div className="pt-8">
        <div className="title font-bold text-4xl text-center">
          <h1>{post?.title}</h1>
        </div>
        <div className="header-info flex flex-wrap gap-3 justify-between md:px-8 py-6">
          <p>Muhammad Shazil Khan</p>
          <p>August 2023</p>
          <p>{post?.estimatedReadingTime + " "}min </p>
        </div>
        <div className="thumbnail-image">
          {mainImage?.asset?._ref && (
            <Image
              src={`${urlFor(mainImage?.asset?._ref)}`}
              alt={mainImage?.alt}
              width={mainImageWidth}
              height={mainImageHeight}
            />
          )}
        </div>
        <div className="tags flex flex-wrap justify-center gap-6 px-2 md:px-4 py-4">
          <ArticleTags tags={tags} isCard={false} />
        </div>
      </div>
    </div>
  );
}

export default ArticleHeader;
