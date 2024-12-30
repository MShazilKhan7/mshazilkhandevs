"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedTitles = () => {
  const [counter, setCounter] = useState(0);

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: [0, 0, -10], opacity: [1, 1, 0] }}
      transition={{
        duration: 2, // Total duration
        ease: "easeInOut",
        times: [0.2, 0.8, 1], // Pause at y: 0
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className="text-dark-text_secondary text-sm"
      onUpdate={(latest) => {
        if (latest.y === -10) {
          setCounter((prevCounter) => prevCounter + 1);
        }
      }}
    >
      {counter % 2 === 0 ? "Frontend Engineer" : "Top 3% Globally"}
    </motion.div>
  );
};

export default AnimatedTitles;
