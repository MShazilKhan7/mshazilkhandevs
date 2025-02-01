import React, { useState } from "react";
import VisualContentDialog from "../VisualContentDialog/VisualContentDialog";
import RdButton from "./RoundedButton/RdButton";
import { IoMdMore } from "react-icons/io";
import Pill from "../Pills/Pill";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoIosLink } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { IContentCardDetails } from "@/types/interfaces";
import { urlFor } from "@/sanity/utils/sanity-utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

interface ContentCardProps extends IContentCardDetails {
  onOpenChange: () => void;
}

const ContentCard = ({ onOpenChange, post, buttonText }: ContentCardProps) => {
  const [visible, setVisible] = useState(false);
  const { title, thumbnail, tags } = post;
  return (
    <>
      <div
        className="w-full cursor-pointer flex flex-col justify-between border border-light-gray_70 hover:border-light-gray_80 dark:border bg-light-sky_10 dark:border-[#333841] dark:bg-[#1C1F26] dark:hover:border-[#454b56] md:w-[300px] rounded-2xl px-3 py-3 transition-all duration-75 hover:shadow-sm"
        onMouseOver={() => {
          setVisible(true);
        }}
        onMouseOut={() => {
          setVisible(false);
        }}
        onClick={onOpenChange}
      >
        <div className="top-details transition-all ease-in-out duration-200 flex justify-between py-2 items-center h-[40px] ">
          <div className="icon rounded-full w-8 h-8 bg-black">
            <Image
              src={"/my_profile.jpg"}
              alt="icon"
              className="w-full h-full rounded-full"
              width={32}
              height={32}
            />
          </div>
          <div
            className={`flex gap-2 items-center text-black ${
              visible ? "md:visible" : "md:invisible"
            }`}
          >
            <TooltipProvider>
              <Tooltip delayDuration={0.5}>
                <TooltipTrigger>
                  <FaYoutube
                    onClick={(event: any) => {
                      event.stopPropagation();
                    }}
                    color="#F70000"
                    size={28}
                    className="hover:opacity-50"
                  />
                </TooltipTrigger>
                <TooltipContent className="bg-white dark:bg-black" align="end">
                  <p className="text-black dark:text-white">Watch video</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <RdButton text={buttonText || ""} />
            {/* <IoMdMore
              size={28}
              className="cursor-pointer rounded-lg text-[#A8B3CF] hover:text-white hover:bg-[#383D47]"
            /> */}
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:gap-5 md:flex-col md:gap-0 md:justify-normal">
          <div className="flex flex-col  sm:w-[calc(100%-270px)] md:w-full">
            <div className="heading mt-2">
              <h3 className="font-bold text-[20px] text-ellipsis break-words line-clamp-2">
                {title}
              </h3>
            </div>
            <div className="hashtags py-1 flex gap-2">
              {tags?.map(({ title }, index) => (
                <Pill key={index} variant="simple" text={`#${title}`} />
              ))}
            </div>
            <div className="read-time">
              <h3 className="text-sm text-light-gray_40 dark:text-[#A8B3CF]">
                Aug 22. 3m read time
              </h3>
            </div>
          </div>
          <div className="center-image w-full sm:w-[270px] md:w-full h-[160px] rounded-md mt-2">
            <Image
              alt={thumbnail?.alt || "Image"}
              loading="lazy"
              width={270}
              height={160}
              className="w-full h-[160px] sm:w-[270px] md:w-full rounded-md"
              src={`${urlFor(thumbnail?.asset?._ref)}`}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="bottom-icons h-[30px] px-2 mt-2 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <BiLike size={24} color="#A8B3CF" cursor={"pointer"} />
            <BiDislike size={24} color="#A8B3CF" cursor={"pointer"} />
          </div>
          <div className="link">
            <IoIosLink size={24} color="#A8B3CF" cursor={"pointer"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCard;
