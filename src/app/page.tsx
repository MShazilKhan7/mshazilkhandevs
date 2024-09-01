import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import React from "react";

const Home = () => {
  return (
    <div className="pt-32 text-white flex flex-col items-center">
      <div className="w-80 md:w-[720px] py-4">
        <h3 className="font-semibold text-5xl tracking-tighter mb-2">
          Hey, I'm Shazil 👋 <br></br>I Develop Mobile Apps, Web Apps & Create
          Content
        </h3>
        <div className="md:w-3/4">
          <h3 className="mt-2 tracking-tight">
            As a Computer Science enthusisat, Currently associated with a
            Startup and contributing in mutiple Products built with Reactjs,
            Redux, Typescript. I like teaching and create visual content to help
            students learn CS topics in an interactive way.
          </h3>
        </div>
      </div>
      <FeaturedWork />
    </div>
  );
};

export default Home;
