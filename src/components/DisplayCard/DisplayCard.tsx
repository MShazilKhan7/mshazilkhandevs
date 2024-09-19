import React from "react";
import Pill from "../Pills/Pill";

interface DisplayCardProps {
  isWorkCard?: boolean;
  isArticleCard?: boolean;
}

const DisplayCard = ({ isArticleCard, isWorkCard }: DisplayCardProps) => {
  return (
    <div className="w-full article-card transition-all duration-200 cursor-pointer flex gap-4 hover:bg-dark-secondary_two rounded-md px-4 py-4 hover:shadow-md">
      <div className="image-div max-[800px]:w-[30vw] max-[800px]:h-[25vw] w-[200px] h-[150px] rounded-md flex items-center">
        <img
          src="/sampleone.png"
          className="w-full h-full object-cover rounded-md"
          alt=""
        />
      </div>
      <div className="right-container max-[800px]:w-[58vw] w-[calc(100%-200px)] flex flex-col gap-4 max-[800px]:justify-start justify-between">
        <div className="top-section">
          <h2 className="text-white">
            Lead Designer - Memri Connect ( Regenerative AI ) Lead Designer -
          </h2>
        </div>
        <div className="pill-section">
          <Pill text="Full Stack" variant="simple" />
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
