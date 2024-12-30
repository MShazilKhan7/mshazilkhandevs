"use client";
import React from "react";
import { CategoriesBar } from "../CategoryBar/CategoryBar";

const CategoriesBarSection = () => {
  // data will be fetch here and send to category bar
  return (
    <div className="categories py-2">
      {/* <h2>Categories.</h2 */}
      <CategoriesBar data={[]} />
    </div>
  );
};

export default CategoriesBarSection;
