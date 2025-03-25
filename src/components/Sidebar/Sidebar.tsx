"use client";
import React, { SetStateAction, useState, Dispatch } from "react";
import SidebarItem from "./SidebarItem/SidebarItem";
import { navigationMenus } from "@/constants/navigationConfig";
import ProfileTag from "../ProfileTag/ProfileTag";

const Sidebar = ({
  closeSidebar,
}: {
  closeSidebar:Dispatch<SetStateAction<boolean>>;
}) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="sidebar border-r border-gray-200 dark:border-r-[#161616] flex flex-col gap-1 w-full h-full px-2 py-6 overflow-auto">
      <ProfileTag />

      {navigationMenus?.map((menu, index) => {
        if (index === 5) {
          return (
            <p key={10} className="text-[10px] px-4 py-4  ">
              SOCIALS
            </p>
          );
        }
        return (
          <SidebarItem
            isFocused={activeItem === index}
            setActiveItem={setActiveItem}
            itemNumber={index}
            menu={menu}
            key={index}
            closeSidebar={closeSidebar}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
