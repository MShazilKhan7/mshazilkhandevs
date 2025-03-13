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
            A Computer Science enthusiast and developer
            specializing in Software Development. <br></br>Currently, I’m
            contributing to multiple products at a startup, working with
            ReactJS, Redux, and TypeScript to build impactful solutions. Beyond
            coding, I’m passionate about teaching and creating visual,
            interactive content to help students grasp complex CS concepts in an
            engaging way. <br></br> I am deepening my understanding of Machine
            Learning these days.
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
