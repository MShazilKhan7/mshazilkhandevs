"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Navigation } from "@/constants/navigationConfig";
import Link from "next/link";
interface SidebarItemProps {
  menu: Navigation;
  isFocused: boolean;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  itemNumber: number;
  closeSidebar: Dispatch<SetStateAction<boolean>>;
}

const SidebarItem = ({
  menu,
  isFocused,
  setActiveItem,
  itemNumber,
  closeSidebar,
}: SidebarItemProps) => {
  return (
    <Link
      shallow={true}
      href={menu?.path ? menu.path : "/"}
      onClick={() => {
        closeSidebar(false);
      }}
    >
      <div
        style={
          isFocused
            ? {
                borderColor: "#393939",
              }
            : {
                borderColor: "#0F0F0F",
              }
        }
        className={`${
          isFocused
            ? "bg-light-gray_60 dark:bg-[#2B2B2B] text-black dark:text-white"
            : "text-light-gray_40 dark:text-dark-text_primary"
        } sidebar-item cursor-pointer transition-all duration-75 ease-in-out dark:border-[0.5px] rounded-md flex gap-2 items-center px-4 py-2 text-md hover:text-black dark:hover:text-white `}
        onClick={() => setActiveItem(itemNumber)}
      >
        {menu.icon}
        <div className="items-center text-sm">{menu.title}</div>
      </div>
    </Link>
  );
};

export default SidebarItem;
