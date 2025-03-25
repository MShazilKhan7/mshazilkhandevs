"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { fetchDataFromSanity } from "@/lib/fetch";
import { SanityDocument } from "next-sanity";
import { categoriesQuery } from "@/sanity/lib/queries";

interface CategoriesBarProps {
  variant?: "simple" | "dark" | "outlined";
  categories: any;
}

export function CategoriesBar({ variant, categories }: CategoriesBarProps) {
  return (
    <ScrollArea className="w-full px-2 whitespace-nowrap shadow-md rounded-lg backdrop-blur-[0.7px] border dark:border-white/20">
      <div className="flex w-full space-x-4 px-4 py-2">
        {categories.map((category: any, index: number) => (
          <h3 className="text-black dark:text-white cursor-pointer" key={index}>
            {category.title}
          </h3>
        ))}
      </div>
      <ScrollBar orientation="horizontal" color="white" className="h-1" />
    </ScrollArea>
  );
}
