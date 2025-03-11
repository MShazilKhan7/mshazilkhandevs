import Image from "next/image";
import React from "react";

interface ToolCardProps {
  title: string;
  imageUrl: string;
  description: string;
  className?: string;
}

const ToolCard = ({
  title,
  description,
  imageUrl,
  className,
}: ToolCardProps) => {
  return (
    <div
      className={`p-2 rounded-sm flex gap-4 items-center w-[320px] dark:hover:bg-dark-secondary_two hover:bg-gray-50 hover:shadow-sm ${className} `}
    >
      <div className="image rounded-sm border border-light-gray_50 dark:border-dark-secondary_three p-1 w-[35px] h-[35px]">
        <Image
          alt="tool image"
          src={imageUrl}
          width={35}
          height={35}
          objectFit="cover"
          className="rounded-sm object-cover "
        />
      </div>
      <div className="dets flex flex-col line-height-2">
        <p className="font-semibold dark:text-white text-sm">{title}</p>
        <p className="dark:text-dark-text_tertiary -mt-0.5 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ToolCard;
