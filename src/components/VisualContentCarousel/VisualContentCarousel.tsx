"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { urlFor } from "@/sanity/utils/sanity-utils";
interface VisualContentCarouselProps {
  visuals: any[]; // Assuming visuals is an array of objects with 'path'
}

const VisualContentCarousel = ({ visuals }: VisualContentCarouselProps) => {
  const [counter, setCounter] = useState(0);

  const goPrev = () => {
    setCounter((prevCounter) =>
      prevCounter === 0 ? visuals.length - 1 : prevCounter - 1
    );
  };

  const goNext = () => {
    setCounter((prevCounter) =>
      prevCounter === visuals.length - 1 ? 0 : prevCounter + 1
    );
  };

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((sl) => {
      (sl as HTMLElement).style.transform = `translateX(-${counter * 100}%)`;
    });
  }, [counter]);

  return (
    <div className="carousel max-w-full md:h-[74vh] ">
      <div className="carousel-images w-full h-full overflow-hidden flex  rounded-md">
        {visuals?.map((slide, index) => {
          console.log("slide:", slide);
          const {
            alt,
            asset: { _ref = "" },
            dimensions, // Extract dimensions here
          } = slide;

          // Fallback values for width and height
          const width = dimensions?.width || 500;
          const height = dimensions?.height || 500;
          return (
            <div className="slide w-full h-full rounded-md flex-shrink-0 transition-all duration-500 ease-in-out">
              {_ref != "" && (
                <Image
                  key={index}
                  alt={alt || "Image"}
                  loading="lazy"
                  src={`${urlFor(_ref)}`}
                  className="w-full h-full object-contain"
                  height={height}
                  width={width}
                />
              )}
              <div className="flex justify-center">
                <p className="font-bold">{alt}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation buttons outside of the slides */}
      {counter != 0 && (
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>
      )}
      {counter != visuals.length - 1 && (
        <button
          onClick={goNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default VisualContentCarousel;
