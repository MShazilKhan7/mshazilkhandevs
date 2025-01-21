import React from "react";
import footerLinks from "@/constants/FooterLinks/FooterLinks";
import Link from "next/link";
const Footer = () => {
  const { legal, quick, socialMedia } = footerLinks;
  return (
    <div className="mt-auto">
      <footer className="w-full flex flex-col sm:flex-row sm:justify-between px-6 py-8 text-light-text_primary  dark:text-white mt-28 bg-gray-100 dark:bg-[#080808]">
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            {socialMedia.map((item, index) => {
              return (
                <a
                  aria-label={`${item.url}`}
                  href={item.url}
                  rel="noreferrer"
                  target="_blank"
                  className="text-2xl"
                  key={index}
                >
                  {item.icons}
                </a>
              );
            })}
          </div>
          <div>© 2025 MShazilKhan. All rights reserved.</div>
        </div>
        <div className="flex flex-row py-8 sm:py-0 sm:px-20 gap-16">
          <div className="quick-links">
            <div className="font-semibold mb-4">
              <h6>Quick Links</h6>
            </div>
            <div className="flex flex-col">
              {quick.map((quickLink, index) => {
                return (
                  <div className="mb-2" key={index}>
                    <Link
                      href={quickLink.url}
                      className=" footer-links text-sm"
                    >
                      {quickLink.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="legal">
            <div className="font-semibold mb-4">
              <h6>Legal</h6>
            </div>
            {legal.map((legal, index) => {
              return (
                <div className="mb-2" key={index}>
                  <Link href={legal.url} className="footer-links text-sm">
                    {legal.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
