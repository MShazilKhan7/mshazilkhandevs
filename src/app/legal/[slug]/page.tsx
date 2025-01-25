import React from "react";
import { fetchDataFromSanity } from "@/lib/fetch";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getLegalQuery } from "@/sanity/lib/queries";
import { format } from "date-fns";
import ArticleContent from "@/components/ArticleSection/Article/ArticleContent/ArticleContent";
interface Props {
  params: {
    slug: string;
  };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const legal = await fetchDataFromSanity<SanityDocument>({
    query: getLegalQuery,
    params,
  });
  if (!legal)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: legal?.title,
    description: legal?.meta_description,
  };
}

const Legal = async ({ params }: { params: { slug: string } }) => {
  const legal = await fetchDataFromSanity<SanityDocument>({
    query: getLegalQuery,
    params,
  });

  return (
    <>
      <section className="flex justify-center">
        <div className="container max-[800px]:w-full w-[740px] px-4">
          {!legal ? (
            <p>No Legal Found</p>
          ) : (
            <>
              <p className="text-base px-4 sm:text-lg md:text-2xl lg:text-3xl font-semibold">
                Created At:{" "}
                {format(new Date(legal?._createdAt), "MMMM d, yyyy")} | Last
                Updated At:{" "}
                {format(new Date(legal?._updatedAt), "MMMM d, yyyy")}
              </p>

              <div className="">
                <ArticleContent content={legal?.body} />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Legal;
