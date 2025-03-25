import React from "react";
import { CategoriesBar } from "../CategoryBar/CategoryBar";
import { categoriesQuery } from "@/sanity/lib/queries";
import { fetchDataFromSanity } from "@/lib/fetch";
import { SanityDocument } from "next-sanity";

const CategoriesBarSection = async () => {
  // data will be fetch here and send to category bar
  const fetchedCategories = await fetchDataFromSanity<SanityDocument[]>({
    query: categoriesQuery,
  });

  return (
    <div className="categories py-2">
      <CategoriesBar categories={fetchedCategories} />
    </div>
  );
};

export default CategoriesBarSection;
