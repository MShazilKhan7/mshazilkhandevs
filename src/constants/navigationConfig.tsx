import { MdOutlineExplore } from "react-icons/md";
import { GrDocumentOutlook } from "react-icons/gr";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { BsCursor } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { SiDocsdotrs } from "react-icons/si";
import { GiSpanner } from "react-icons/gi";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
export interface Navigation {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export const navigationMenus: Navigation[] = [
  {
    title: "Explore",
    path: "/",
    icon: <MdOutlineExplore />,
  },
  {
    title: "Work",
    path: "/projects/",
    icon: <BsCursor />,
  },
  {
    title: "Articles",
    path: "/articles/",
    icon: <FaPen />,
  },
  {
    title: "Stack",
    path: "/stack/",
    icon: <GiSpanner />,
  },
  {
    title: "Content",
    path: "/content/",
    icon: <SiDocsdotrs />,
  },
  {
    title: "Linkedin",
    path: "https://www.linkedin.com/in/muhammadshazilkhan/",
    icon: <CiLinkedin />,
  },
  {
    title: "Github",
    path: "https://github.com/MShazilKhan7",
    icon: <GitHubLogoIcon />,
  },
  {
    title: "Instagram",
    path: "https://www.instagram.com/shazil._.khan/",
    icon: <FaInstagram />,
  },
  {
    title: "Medium",
    path: "https://medium.com/@shazilkhannew/",
    icon: <FaMedium />,
  },
  {
    title: "Book a Call",
    path: "",
    icon: <IoPersonCircleOutline />,
  },
];
