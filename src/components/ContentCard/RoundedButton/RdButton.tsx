import React from "react";
import { LuExternalLink } from "react-icons/lu";

interface RdButton {
  text: string;
}

const RdButton = ({ text }: RdButton) => {
  return (
    <div className="cursor-pointer transition-all duration-75 bg-white rounded-lg flex gap-2 items-center px-2 py-1 hover:opacity-90">
      <h3 className="font-bold text-sm">{text}</h3>
      <LuExternalLink className="font-bold" size={20} />
    </div>
  );
};

export default RdButton;
