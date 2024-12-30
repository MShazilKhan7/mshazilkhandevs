import React from "react";
import { Navigation } from "@/constants/navigationConfig";
import Link from "next/link";
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
    <Link href={menu?.path ? menu.path : "/"}>
      <div
        style={
          isFocused
            ? {
                backgroundColor: "#2B2B2B",
                color: "white",
                borderColor: "#393939",
              }
            : {
                borderColor: "#0F0F0F",
              }
        }
        className={`sidebar-item cursor-pointer transition-all border-[0.5px] rounded-md flex gap-2 items-center px-4 py-2 text-md text-[#929292] hover:text-white `}
        onClick={() => setActiveItem(itemNumber)}
      >
        {menu.icon}
        <div className="items-center text-sm">{menu.title}</div>
      </div>
    </Link>
  );
};

export default SidebarItem;
