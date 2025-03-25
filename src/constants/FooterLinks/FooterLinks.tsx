import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillMediumSquare,
} from "react-icons/ai";

const footerLinks = {
  legal: [
    {
      name: "Privacy Policy",
      url: "/legal/privacy-policy",
    },
    {
      name: "Disclaimers",
      url: "/legal/disclaimers",
    },
    {
      name: "Terms and Conditions",
      url: "/legal/terms-and-conditions",
    },
  ],
  quick: [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "External Articles",
      url: "/external-articles",
    },
  ],
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/muhammadshazilkhan/",
      icons: <AiFillLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/MShazilKhan7",
      icons: <AiFillGithub />,
    },
    {
      name: "Medium",
      url: "https://medium.com/@shazilkhannew",
      icons: <AiFillMediumSquare />,
    },
  ],
};

export default footerLinks;
