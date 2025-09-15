import React from "react";

const Button = ({ className }) => {
  return (
    <button
      type={`button`}
      className={`hidden lg:block cursor-pointer w-40 h-11 rounded-full gradient-1 px-8 py-2 text-white text-7-bold capitalize ${className || ""}`}
    >
      request invite
    </button>
  );
};
export default Button;
