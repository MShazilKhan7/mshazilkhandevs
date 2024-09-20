import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Artwork {
  artist: string;
}

export const works: Artwork[] = [
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
export function CategoriesBar({ data }: CategoriesBarProps) {
  return (
    <ScrollArea className="w-full px-2 whitespace-nowrap shadow-2xl rounded-lg backdrop-blur-[0.7px] border border-white/20">
      <div className="flex w-full space-x-4 px-4 py-2">
        {works.map((artwork) => (
          <h3 className="text-white cursor-pointer">{artwork.artist}</h3>
        ))}
      </div>
      <ScrollBar orientation="horizontal" color="gray" className="h-1" />
    </ScrollArea>
  );
}
