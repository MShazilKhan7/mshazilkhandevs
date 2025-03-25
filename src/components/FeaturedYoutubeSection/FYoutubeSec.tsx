"use client";
import React from "react";
import YouTube from "react-youtube";

const FYoutubeSec = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1, // Auto-play the video on load
      mute: 1,
    },
  };
  return (
    <div className="py-4 mt-8">
      <p className="text-3xl tracking-tight font-bold">New Youtube Video</p>
      <p className="mt-1">
        I Tried to explain what i know and know what i don't
      </p>
      <YouTube
        className="h-[40vh] md:h-[70vh] w-full mt-6 rounded-2xl border bg-black overflow-hidden border-dark-secondary_three"
        videoId={"egzqP3llrP4"}
        opts={opts}
      />
    </div>
  );
};

export default FYoutubeSec;
