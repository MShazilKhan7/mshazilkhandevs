"use client";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  onClickHandler?: () => void;
  heading: string;
}

function AnimatedHeading({ onClickHandler, heading }: AnimatedHeadingProps) {
  return (
    <motion.div
      whileHover={{
        x: -3,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className="all-articles-link cursor-pointer w-fit hover:"
      onClick={onClickHandler}
    >
      <p className="flex gap-2 items-center text-[#ABABAB] hover:text-white">
        <BsArrowLeft />
        {heading}
      </p>
    </motion.div>
  );
}

export default AnimatedHeading;
