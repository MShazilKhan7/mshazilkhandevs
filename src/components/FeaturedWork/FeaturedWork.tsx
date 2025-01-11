import React from "react";
import FeaturedWorkCard from "../FeaturedWorkCard/FeaturedWorkCard";
import DisplayCard from "../ArticleCard/ArticleCard";

const FeaturedWork = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-lg font-semibold">Featured Work</h2>
      <div className="w-full featured-work-section grid grid-cols-1 gap-y-4 md:grid-cols-2">
        <FeaturedWorkCard />
        <FeaturedWorkCard />
        <FeaturedWorkCard />
        <FeaturedWorkCard />
      </div>
      {/* <DisplayCard /> */}
    </div>
  );
};

export default FeaturedWork;
