// app/visual-content/page.tsx
import React from "react";
import ContentSection from "@/components/ContentSection/ContentSection";
import { fetchDataFromSanity } from "@/lib/fetch";
import { contentPosts } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { IContentPost } from "@/types/interfaces";

const VisualContent = async () => {
  const posts = await fetchDataFromSanity<IContentPost[]>({
    query: contentPosts,
    fetchOptions: {
      cache: "no-store",
    },
  });

  return (
    <div>
      <ContentSection posts={posts} />
    </div>
  );
};

export default VisualContent;
