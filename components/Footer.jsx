import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 w-full text-center bg-gray-100 dark:bg-gray-900 border-t border-gray-500 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          &copy; {new Date().getFullYear()} Bloggico. All rights reserved. &nbsp;
          <Link
            href="https://kasimsaifi.tech"
            className="text-neutral-800 dark:text-neutral-400"
          >
             Kasim Saifi
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
