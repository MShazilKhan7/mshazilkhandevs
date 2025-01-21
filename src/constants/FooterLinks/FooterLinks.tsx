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
      url: "",
      icons: <AiFillLinkedin />,
    },
    {
      name: "GitHub",
      url: "",
      icons: <AiFillGithub />,
    },
    {
      name: "Medium",
      url: "",
      icons: <AiFillMediumSquare />,
    },
  ],
};

export default footerLinks;
