"use client";
import FeaturedStack from "@/components/FeaturedStack/FeaturedStack";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import FYoutubeSec from "@/components/FeaturedYoutubeSection/FYoutubeSec";
import React from "react";

// initially it was w-80 in place of w-[360px]

const Home = () => {
  return (
    <div className="pt-32 text-light-text_secondary dark:text-dark-text_white flex flex-col items-center">
      <div className="w-[360px] md:w-[720px] py-4">
        <h3 className="font-semibold text-5xl tracking-tighter mb-2">
          Hey, I'm Shazil <span className="text-[30px]">👋</span> <br></br>I
          Develop Mobile Apps, <br></br> Web Apps & Create Content
        </h3>
        <div className="md:w-3/4">
          <h3 className="mt-2 tracking-tight">
            As a Computer Science enthusisat, Currently associated with a
            Startup and contributing in mutiple Products built with Reactjs,
            Redux, Typescript. I like teaching and create visual content to help
            students learn CS topics in an interactive way.
          </h3>
        </div>
        <FeaturedWork />
        <FYoutubeSec />
        <FeaturedStack />
      </div>
    </div>
  );
};

export default Home;
