import React from "react";
import AnimatedTitles from "../AnimatedTitles/AnimatedTitles";
const ProfileTag = () => {
  return (
    <div className="flex gap-3 w-[250px] px-4 py-2 items-center">
      <div className="avatar rounded-full w-[40px] h-[40px] bg-black">
        <img
          src="my_profile.jpg"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="description flex flex-col leading-5">
        <p className="text-white"> M Shazil Khan </p>
        <AnimatedTitles />
      </div>
    </div>
  );
};

export default ProfileTag;
