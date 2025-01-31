import { getPillVariantStyles } from "@/constants/Pill/PillConstants";
import React from "react";

interface PillProps {
  className?: string;
  variant: "outlined" | "hover-outlined" | "simple" | "text";
  text: string;
  color?: string;
  onClickHandler?: (event: React.MouseEvent) => void;
}

const Pill = ({
  className,
  text,
  variant,
  color,
  onClickHandler,
}: PillProps) => {
  return (
    <div
      onClick={onClickHandler}
      style={{ backgroundColor: color ? color : "" }}
      className={`pill ${className} ${getPillVariantStyles(
        variant
      )} w-fit border border-1 dark:border-[#383D47] flex items-center rounded-md py-1 text-sm px-4 text-[#66696B] dark:text-white`}
    >
      {text}
    </div>
  );
};

export default Pill;
