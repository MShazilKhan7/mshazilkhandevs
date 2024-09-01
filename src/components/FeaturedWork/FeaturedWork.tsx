import React from "react";
import FeaturedWorkCard from "../FeaturedWorkCard/FeaturedWorkCard";

const FeaturedWork = () => {
  return (
    <div className="md:w-[720px] flex flex-col gap-4">
      <h2 className="text-white text-lg font-semibold">Featured Work</h2>
      <div className="w-full featured-work-section grid grid-cols-1 gap-y-4 md:grid-cols-2">
        <FeaturedWorkCard />
        <FeaturedWorkCard />
        <FeaturedWorkCard />
        <FeaturedWorkCard />
      </div>
    </div>
  );
};

export default FeaturedWork;
