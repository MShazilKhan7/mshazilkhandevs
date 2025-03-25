import React from "react";

interface LoadingProps {}

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-dark-secondary_three dark:text-white">
      <p>Loading data...</p>
    </div>
  );
};

export default Loading;
