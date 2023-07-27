import React from "react";

const Button = ({ children, type}) => {
  return (
    <button
      className={`px-6 py-2 rounded-full border-double border-4  transition duration-300 ease-in-out ${
        type === "dangerous"
          ? "hover:bg-red-600 hover:text-white border-red-600 text-red-600"
          : "dark:hover:bg-black hover:bg-white dark:hover:text-white hover:text-black dark:border-black dark:text-black border-white text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
