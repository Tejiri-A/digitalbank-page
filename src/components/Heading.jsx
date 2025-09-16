import { useEffect, useState } from "react";
import { logoDark } from "../assets/index.js";
import ToggleMenuButton from "./ToggleMenuButton.jsx";
import { navLinks } from "../utils/Constants.js";
import Button from "./Button.jsx";

export const Heading = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(null);
  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.className = "overflow-hidden";
    } else document.body.className = "";

    return () => {
      document.body.className = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
      setIsMenuOpen(false);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [activeHash]);

  return (
    <header
      className={`h-16 fixed top-0 left-0 w-full bg-white py-6 lg:py-4 z-50 flex items-center justify-center`}
    >
      <nav
        className={`w-[90vw] max-w-[1110px] mx-auto grid grid-cols-2 lg:grid-cols-[725px_1fr] items-center`}
      >
        <div className={`grid lg:grid-cols-[auto_1fr] items-center`}>
          <img src={logoDark} alt="logo" className={`w-[154]`} />
          <ul className={`hidden justify-self-end  lg:flex  gap-8`}>
            {navLinks.map(({ id, label, href }) => {
              return (
                <li
                  key={id}
                  className={`relative before:absolute hover:before:block ${activeHash === href ? "before:block" : "before:hidden"} before:w-full before:h-[4px] before:gradient-1 before:-bottom-[20px] before:transition-all before:duration-500 before:ease-put`}
                >
                  <a
                    href={href}
                    className={`hover:text-blue-950 ${activeHash === href ? "text-blue-950" : "text-gray-600"} text-7-regular`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/*mobile menu*/}
        {isMenuOpen && (
          <>
            <div
              className={`w-full h-[calc(100vh-64px)] absolute top-16 left-0 gradient-2`}
            ></div>
            <ul
              className={`lg:hidden fixed top-22 bg-white w-[90vw] flex flex-col items-center py-8 gap-4 rounded-sm `}
            >
              {navLinks.map(({ id, label, href }) => (
                <li key={id}>
                  <a href={href} className={`text-5 text-blue-950`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
        {/*  hamburger button (mobile only) */}
        <ToggleMenuButton onClick={handleOpenMenu} isMenuOpen={isMenuOpen} />
        {/*  cta (desktop only)*/}
        <Button className={`justify-self-end hidden lg:block `} />
      </nav>
    </header>
  );
};
