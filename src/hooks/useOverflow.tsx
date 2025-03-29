// import { useState, useEffect, useRef } from "react";
// const useOverflow = (tags: any[], isCard: boolean) => {
//   const tagsContainerRef = useRef<HTMLDivElement>(null);
//   const [overflowCount, setOverflowCount] = useState(0);
//   const [isCalculated, setIsCalculated] = useState(false);

//   useEffect(() => {
//     if (!isCard) return; // Only apply overflow logic if isCard is true

//     const checkOverflow = () => {
//       const container = tagsContainerRef.current;
//       if (container) {
//         let totalWidth = 0;
//         let overflowIndex = tags.length; // Assume no overflow initially

//         Array.from(container.children).forEach((child, index) => {
//           const element = child as HTMLElement;
//           totalWidth += element.offsetWidth + 12; // Include margin
//           if (
//             totalWidth >= container.clientWidth &&
//             overflowIndex === tags.length
//           ) {
//             overflowIndex = index;
//           }
//         });

//         setOverflowCount(tags.length - overflowIndex);
//         setIsCalculated(true);
//       }
//     };

//     checkOverflow();
//     window.addEventListener("resize", checkOverflow);
//     return () => window.removeEventListener("resize", checkOverflow);
//   }, [tags, isCard]);

//   return { tagsContainerRef, overflowCount, isCalculated };
// };

// export default useOverflow;
import { useState, useEffect, useRef } from "react";

const useOverflow = (tags: any[], isCard: boolean) => {
  const tagsContainerRef = useRef<HTMLDivElement>(null);
  const [overflowCount, setOverflowCount] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    if (!isCard || !tagsContainerRef.current) return; // Early return if not a card or ref not ready

    let rafId: number; // For requestAnimationFrame
    let timeoutId: number; // For debouncing

    const checkOverflow = () => {
      const container = tagsContainerRef.current;
      if (!container) return;

      let totalWidth = 0;
      let overflowIndex = tags.length; // Default to no overflow

      Array.from(container.children).forEach((child, index) => {
        const element = child as HTMLElement;
        totalWidth += element.offsetWidth + 12; // Include margin
        if (totalWidth >= container.clientWidth && overflowIndex === tags.length) {
          overflowIndex = index;
        }
      });

      // Batch state updates
      setOverflowCount(tags.length - overflowIndex);
      setIsCalculated(true);
    };

    // Debounced resize handler
    const debouncedCheckOverflow = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        rafId = requestAnimationFrame(checkOverflow); // Use RAF for smoother updates
      }, 100); // 100ms debounce
    };

    // Initial check
    rafId = requestAnimationFrame(checkOverflow);

    // Add resize listener
    window.addEventListener("resize", debouncedCheckOverflow);

    // Cleanup
    return () => {
      window.removeEventListener("resize", debouncedCheckOverflow);
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [tags, isCard]); // Dependencies remain the same

  return { tagsContainerRef, overflowCount, isCalculated };
};

export default useOverflow;
