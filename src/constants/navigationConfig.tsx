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
    path: "/Stack",
    icon: <GiSpanner />,
  },
  {
    title: "Content",
    path: "/content/",
    icon: <SiDocsdotrs />,
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
