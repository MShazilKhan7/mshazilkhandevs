"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { fetchDataFromSanity } from "@/lib/fetch";
import { SanityDocument } from "next-sanity";
export interface Artwork {
  artist: string;
}

export const categories: Artwork[] = [
  {
    artist: "Ornella Binni",
  },
  {
    artist: "Tom Byrom",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
  {
    artist: "Vladimir Malyavko",
  },
];

interface CategoriesBarProps {
  data: any;
  variant?: "simple" | "dark" | "outlined";
}

// bg-white/20  can have this color in variant.
export function CategoriesBar({ data, variant }: CategoriesBarProps) {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedCategories = await fetchDataFromSanity<SanityDocument[]>({
        query: `*[_type == "category"]`,
      });
      setCategories([...fetchedCategories]);
      console.log("Fetched categories:", fetchedCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError("Error fetching categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Fetching categories...");
    getCategories();
  }, []);

  if (loading) {
    return <p>Loading Categories...</p>;
  }
  return (
    <ScrollArea className="w-full px-2 whitespace-nowrap shadow-md rounded-lg backdrop-blur-[0.7px] border dark:border-white/20">
      <div className="flex w-full space-x-4 px-4 py-2">
        {error && <p className="text-red-500">{error}</p>}
        {!loading &&
          !error &&
          categories?.map((cateogory) => (
            <h3
              className="text-black dark:text-white cursor-pointer"
              key={cateogory._id}
            >
              {cateogory.title}
            </h3>
          ))}
      </div>
      <ScrollBar orientation="horizontal" color="white" className="h-1" />
    </ScrollArea>
  );
}
