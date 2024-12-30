import { MdOutlineExplore } from "react-icons/md";
import { BsSendArrowUp } from "react-icons/bs";
import { TiSpanner } from "react-icons/ti";
import { GrDocumentOutlook } from "react-icons/gr";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { SiDocsdotrs } from "react-icons/si";

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
    path: "/",
    icon: <BsSendArrowUp />,
  },
  {
    title: "Articles",
    path: "/articles/",
    icon: <FaPen />,
  },
  {
    title: "Content",
    path: "content/",
    icon: <SiDocsdotrs />,
  },
  {
    title: "Stack",
    path: "/",
    icon: <TiSpanner />,
  },
  {
    title: "Resume",
    path: "/",
    icon: <GrDocumentOutlook />,
  },
  {
    title: "Book a Call",
    path: "/",
    icon: <IoPersonCircleOutline />,
  },
  {
    title: "Linkedin",
    path: "/",
    icon: <CiLinkedin />,
  },
  {
    title: "Instagram",
    path: "/",
    icon: <FaInstagram />,
  },
  {
    title: "Medium",
    path: "/",
    icon: <FaMedium />,
  },
];
