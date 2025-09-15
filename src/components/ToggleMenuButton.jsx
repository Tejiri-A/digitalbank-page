import React from "react";
import { iconClose, iconHamburger } from "../assets/index.js";

const ToggleMenuButton = ({ onClick, isMenuOpen }) => {
  return (
    <button
      type={`button`}
      className={`justify-self-end lg:hidden`}
      onClick={onClick}
    >
      <img
        src={isMenuOpen ? iconClose : iconHamburger}
        alt="hamburger"
        className={`w-full`}
      />
    </button>
  );
};
export default ToggleMenuButton;
