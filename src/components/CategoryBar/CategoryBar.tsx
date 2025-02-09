"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { fetchDataFromSanity } from "@/lib/fetch";
import { SanityDocument } from "next-sanity";
import { categoriesQuery } from "@/sanity/lib/queries";

interface CategoriesBarProps {
  variant?: "simple" | "dark" | "outlined";
}

export function CategoriesBar({ variant }: CategoriesBarProps) {
  const [state, setState] = useState<{
    categories: SanityDocument[];
    loading: boolean;
    error: string | null;
  }>({
    categories: [],
    loading: true,
    error: null,
  });

  const getCategories = useCallback(async () => {
    try {
      const fetchedCategories = await fetchDataFromSanity<SanityDocument[]>({
        query: categoriesQuery,
      });
      setState({ categories: fetchedCategories, loading: false, error: null });
    } catch (error) {
      setState({
        categories: [],
        loading: false,
        error: "Error fetching categories",
      });
    }
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const categoriesList = useMemo(
    () =>
      state.categories.map((category, index) => (
        <h3 className="text-black dark:text-white cursor-pointer" key={index}>
          {category.title}
        </h3>
      )),
    [state.categories]
  );

  return (
    <ScrollArea className="w-full px-2 whitespace-nowrap shadow-md rounded-lg backdrop-blur-[0.7px] border dark:border-white/20">
      <div className="flex w-full space-x-4 px-4 py-2">
        {state.loading && <p>Loading Categories...</p>}
        {state.error && <p className="text-red-500">{state.error}</p>}
        {!state.loading && !state.error && categoriesList}
      </div>
      <ScrollBar orientation="horizontal" color="white" className="h-1" />
    </ScrollArea>
  );
}
