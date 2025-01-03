"use client";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Pill from "@/components/Pills/Pill";
import Image from "next/image";
import { urlFor } from "@/sanity/utils/sanity-utils";

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
  } = post;
  const router = useRouter();
  const onClickHandler = () => {
    console.log("Navigate to all articles");
    router.back();
  };
  return (
    <div className="article-section max-[800px]:w-full w-[740px] pt-20 px-4 flex flex-col gap-4">
      <motion.div
        whileHover={{
          x: -3,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className="all-articles-link cursor-pointer w-fit hover:"
        onClick={onClickHandler}
      >
        <p className="flex gap-2 items-center text-[#ABABAB] hover:text-white">
          <BsArrowLeft />
          All Articles
        </p>
      </motion.div>
      <div className="pt-10">
        <div className="title font-bold text-4xl text-white ">
          <h1>{post?.title}</h1>
        </div>
        <div className="header-info flex flex-wrap gap-3 justify-between md:px-8 py-6 text-white">
          <p>Muhammad Shazil Khan</p>
          <p>August 2023</p>
          <p>3 mins read</p>
        </div>
        <div className="thumbnail-image">
          <Image
            src={`${urlFor(mainImage?.asset?._ref)}`}
            alt={mainImage?.alt}
            width={mainImageWidth}
            height={mainImageHeight}
          />
        </div>
        <div className="tags flex flex-wrap justify-center gap-6 px-2 md:px-4 py-4">
          <Pill
            text="#frontend"
            variant="text"
            onClickHandler={() => {
              console.log("Child Event Stop Propagating ");
            }}
            className="cursor-pointer"
          />
          <Pill text="#webdev" variant="text" />
          <Pill text="#reacthooks" variant="text" />
          <Pill text="#reacthooks" variant="text" />
        </div>
      </div>
    </div>
  );
}

export default ArticleHeader;
