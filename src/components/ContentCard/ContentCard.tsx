import React, { useState } from "react";
import VisualContentDialog from "../VisualContentDialog/VisualContentDialog";
import RdButton from "./RoundedButton/RdButton";
import { IoMdMore } from "react-icons/io";
import Pill from "../Pills/Pill";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoIosLink } from "react-icons/io";
import { ContentCardDetails } from "@/constants/VisualContent/visualContentConfig";
interface ContentCardProps {
  onOpenChange: () => void;
  ContentCardDetails: ContentCardDetails;
}

const ContentCard = ({
  onOpenChange,
  ContentCardDetails,
}: ContentCardProps) => {
  const [visible, setVisible] = useState(false);
  const { title, thumbnailUrl, buttonText, hashtags } = ContentCardDetails;
  return (
    <>
      <div
        className="w-full cursor-pointer flex flex-col border border-[#333841] bg-[#1C1F26] md:w-[300px] rounded-2xl px-3 py-3 hover:border-[#454b56] transition-all duration-75 shadow-2xl"
        onMouseOver={() => {
          setVisible(true);
        }}
        onMouseOut={() => {
          setVisible(false);
        }}
        onClick={onOpenChange}
      >
        <div className="top-details transition-all ease-in-out duration-200 flex justify-between py-2 items-center h-[40px] ">
          <div className="icon rounded-full w-8 h-8 bg-black"></div>
          <div
            className={`flex gap-2 items-center ${
              visible ? "md:visible" : "md:invisible"
            }`}
          >
            <RdButton text={buttonText} />
            <IoMdMore
              size={28}
              className="cursor-pointer rounded-lg text-[#A8B3CF] hover:text-white hover:bg-[#383D47]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:gap-5 md:flex-col md:gap-0 md:justify-normal">
          <div className="flex flex-col sm:w-[calc(100%-270px)] md:w-full">
            <div className="heading mt-2">
              <h3 className="text-white font-bold text-[20px] overflow-hidden text-ellipsis break-words line-clamp-3">
                {title}
              </h3>
            </div>
            <div className="hashtags py-1">
              <Pill variant="simple" text="#computer-science" />
            </div>
            <div className="read-time">
              <h3 className="text-sm text-[#A8B3CF]">Aug 22. 3m read time</h3>
            </div>
          </div>
          <div className="center-image w-full sm:w-[270px] md:w-full h-[160px] rounded-md  mt-2">
            <img
              className="w-full h-full object-cover rounded-md"
              src={thumbnailUrl}
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
