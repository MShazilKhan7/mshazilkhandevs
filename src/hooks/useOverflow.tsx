import { useState, useEffect, useRef } from "react";
const useOverflow = (tags: any[], isCard: boolean) => {
  const tagsContainerRef = useRef<HTMLDivElement>(null);
  const [overflowCount, setOverflowCount] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    if (!isCard) return; // Only apply overflow logic if isCard is true

    const checkOverflow = () => {
      const container = tagsContainerRef.current;
      if (container) {
        let totalWidth = 0;
        let overflowIndex = tags.length; // Assume no overflow initially

        Array.from(container.children).forEach((child, index) => {
          const element = child as HTMLElement;
          totalWidth += element.offsetWidth + 12; // Include margin
          if (
            totalWidth >= container.clientWidth &&
            overflowIndex === tags.length
          ) {
            overflowIndex = index;
          }
        });

        setOverflowCount(tags.length - overflowIndex);
        setIsCalculated(true);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [tags, isCard]);

  return { tagsContainerRef, overflowCount, isCalculated };
};

export default useOverflow;
