import React from "react";
import { Navigation } from "@/constants/navigationConfig";
interface SidebarItemProps {
  menu: Navigation;
  isFocused: boolean;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  itemNumber: number;
}

const SidebarItem = ({
  menu,
  isFocused,
  setActiveItem,
  itemNumber,
}: SidebarItemProps) => {
  return (
    <div
      className={`w-full sidebar-item  cursor-pointer transition-all border-[0.5px] rounded-md flex gap-2 items-center px-4 py-2 text-md text-[#929292] hover:text-white ${
        isFocused
          ? "bg-[#2B2B2B] text-white border-[#393939]"
          : "border-dark-secondary"
      }`}
      onClick={() => setActiveItem(itemNumber)}
    >
      {menu.icon}
      <div className="items-center text-sm">{menu.title}</div>
    </div>
  );
};

export default SidebarItem;
