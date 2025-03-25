"use client";
import "../../src/globals.css";
import { useEffect, useState, useRef } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProfileTag from "@/components/ProfileTag/ProfileTag";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeProvider } from "@/components/ThemeProvider";
import VideoDialog from "@/components/VideoDialog/VideoDialog";
import { Button } from "@/components/ui/button";
import FeaturedWorkCard from "@/components/FeaturedWorkCard/FeaturedWorkCard";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Footer from "@/components/Footer/Footer";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="root-layout main-container overflow-hidden flex w-full bg-light-primary dark:bg-dark-primary text-light-text_primary dark:text-white">
            <div
              ref={sidebarRef}
              className={`h-screen absolute w-[240px] -translate-x-full lg:translate-x-0 z-10 transition-all ease-in-out duration-300 lg:left-0 lg:static lg:w-[240px] bg-light-secondary dark:bg-dark-secondary   ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <Sidebar closeSidebar={setSidebarOpen} />
            </div>
            <div
              className={`${
                sidebarOpen ? "overflow-y-hidden opacity-5" : "overflow-y-auto"
              } right-container h-screen w-full lg:w-[calc(100%-240px)] dark:bg-dark-primary bg-light-primary`}
            >
              <div className={`w-full lg:flex hidden justify-end p-2`}>
                <ModeToggle />
              </div>
              <div
                className={`${
                  sidebarOpen ? "hidden" : ""
                } top-bar items-center w-full pr-6 h-[100px] dark:bg-[#161616] flex justify-between lg:hidden`}
              >
                <ProfileTag />
                <div className="flex gap-2">
                  <ModeToggle />
                  <GiHamburgerMenu onClick={ToggleSidebar} size={32} />
                </div>
              </div>
              {/* altternative universal width setting  */}
              <div className="min-h-screen overflow-x-hidden">{children}</div>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
