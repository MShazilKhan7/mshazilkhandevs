"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface VisualContentCarouselProps {
  visuals: { path: string }[]; // Assuming visuals is an array of objects with 'path'
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
    <div className="carousel max-w-full h-[74vh] ">
      <div className="carousel-images w-full h-full overflow-hidden flex  rounded-md">
        {visuals.map((slide, index) => (
          <div
            key={index}
            className="slide w-full h-full rounded-md flex-shrink-0 transition-all duration-500 ease-in-out"
          >
            <img
              src={slide.path}
              className="w-full h-full object-contain rounded-md"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
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
