import ArticleDetails from "@/components/ArticleSection/Article/ArticleDetails/ArticleDetails";
import React from "react";
// import { useParams } from "next/navigation";
import { fetchDataFromSanity } from "@/lib/fetch";
import { postQuery } from "@/sanity/lib/queries";

interface Props {
  params: {
    slug: string; // The dynamic slug from the URL
  };
}

const SingleArticle = async ({ params }: Props) => {
  // const params = useParams();
  // const slug = params.slug;
  const post = await fetchDataFromSanity({
    query: postQuery,
    params,
  });

  console.log("slug agaya");
  console.log("article agaya", post);
  return (
    <div>
      <ArticleDetails article={post} />
    </div>
  );
};

export default SingleArticle;
