import { getPillVariantStyles } from "@/constants/Pill/PillConstants";
import React from "react";

interface PillProps {
  className?: string;
  variant: "outlined" | "hover-outlined" | "simple" | "text";
  text: string;
  color?: string;
}

const Pill = ({ className, text, variant, color }: PillProps) => {
  return (
    <div
      style={{ backgroundColor: color ? color : "" }}
      className={`pill ${className} ${getPillVariantStyles(
        variant
      )} w-fit border border-1 border-[#282828] flex items-center rounded-md py-1 text-sm px-4 text-[#66696B]`}
    >
      {text}
    </div>
  );
};

export default Pill;
