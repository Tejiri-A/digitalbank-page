import React from "react";
import { logoLight } from "../assets/index.js";
import { footerLinks, socialIcons } from "../utils/Constants.js";
import Button from "./Button.jsx";

const Footer = () => {
  return (
    <footer className={`bg-blue-950 py-14`}>
      <div
        className={`w-[224px] lg:w-[1110px] mx-auto grid grid-rows-[1fr_auto] lg:grid-rows-none lg:grid-cols-[636px_1fr] max-md:gap-8 `}
      >
        {/*logo, icons and links*/}
        <div
          className={`flex-1 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-30`}
        >
          <div className={`w-fit flex flex-col items-center gap-8 lg:gap-14`}>
            <img src={logoLight} alt="logo" />
            <div className={`flex items-center gap-4`}>
              {socialIcons.map(({ id, icon, alt }) => (
                <img
                  src={icon}
                  key={id}
                  alt={alt}
                  className={`cursor-pointer`}
                />
              ))}
            </div>
          </div>
          <ul
            className={`flex-1 grid gap-4 lg:grid-cols-2 lg:gap-y-6 lg:gap-x-8`}
          >
            {footerLinks.map(({ id, label }) => (
              <li
                key={id}
                className={`text-7-regular capitalize text-white text-center lg:text-left transition-colors duration-500 ease-out hover:text-green-400 cursor-pointer`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
        {/*cta and copyright*/}
        <div className={`justify-self-end flex flex-col items-center gap-6`}>
          <Button />
          <p className={`text-7-regular text-white/50`}>
            © Digitalbank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
