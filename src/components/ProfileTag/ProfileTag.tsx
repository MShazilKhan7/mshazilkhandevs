import React from "react";
import AnimatedTitles from "../AnimatedTitles/AnimatedTitles";
const ProfileTag = () => {
  return (
    <div className="flex gap-3 px-2 py-2 items-center">
      <div className="avatar rounded-full w-[40px] h-[40px] dark:bg-black">
        <img
          src="my_profile.jpg"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="description flex flex-col leading-5">
        <p className="text-light-text_primary dark:text-white font-semibold"> M Shazil Khan </p>
        <AnimatedTitles />
      </div>
    </div>
  );
};

export default ProfileTag;
