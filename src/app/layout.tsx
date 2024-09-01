"use client";
import "../../src/globals.css";
import { useEffect, useState, useRef } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProfileTag from "@/components/ProfileTag/ProfileTag";
import { GiHamburgerMenu } from "react-icons/gi";
import VideoDialog from "@/components/VideoDialog/VideoDialog";
import { Button } from "@/components/ui/button";
import FeaturedWorkCard from "@/components/FeaturedWorkCard/FeaturedWorkCard";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null); // Create a ref for the sidebar
  const ToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false); // Close the sidebar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <html lang="en">
      <body>
        <div className="root-layout main-container overflow-hidden flex w-full bg-dark-primary">
          <div
            ref={sidebarRef}
            className={`h-screen absolute -translate-x-full lg:translate-x-0 z-10 transition-all ease-in-out duration-300  lg:left-0 lg:static lg:w-[240px] bg-dark-secondary ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Sidebar />
          </div>
          <div
            className={`${
              sidebarOpen ? "overflow-y-hidden opacity-5" : "overflow-y-auto"
            } right-container h-screen w-full lg:w-[calc(100%-240px)] bg-dark-primary`}
          >
            <div
              className={`${
                sidebarOpen ? "hidden" : ""
              } top-bar items-center w-full pr-6 h-[100px] bg-[#161616] flex justify-between lg:hidden`}
            >
              <ProfileTag />
              <GiHamburgerMenu
                className="text-white"
                onClick={ToggleSidebar}
                size={32}
              />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
