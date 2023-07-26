"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeChanger from "./ThemeChanger";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-1000000">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
        <div>
          <div className="flex items-center justify-between py-1 md:block">
            {/* LOGO */}
            <Link href="/">
              <h2 className="text-2xl text-purple-900 font-bold">BLOGICCO</h2>
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                <Image
                  src={
                    navbar
                      ? "https://kasimsaifi.tech/close.svg"
                      : "https://kasimsaifi.tech/hamburger-menu.svg"
                  }
                  width={30}
                  height={30}
                  alt="logo"
                  className="focus:border-none active:border-none"
                />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            navbar ? "block" : "hidden"
          } md:flex md:justify-center md:items-center md:p-0 md:mt-0`}
        >
          <ul className="md:flex md:mt-2">
            <li className="pb-6 text-xl  dark:text-purple-900 py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
              <Link href="/" onClick={() => setNavbar(!navbar)}>
                Home
              </Link>
            </li>

            <li className="pb-6 text-xl  dark:text-purple-900 py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
              <Link href="/blogs" onClick={() => setNavbar(!navbar)}>
                Blogs
              </Link>
            </li>
            <li className="pb-6 text-xl  dark:text-purple-900 py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
              <Link href="/about" onClick={() => setNavbar(!navbar)}>
                About
              </Link>
            </li>
            <li className="pb-6 text-xl  dark:text-purple-900 py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
              <ThemeChanger/>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
