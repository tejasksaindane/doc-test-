"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { switchThemeDuration } from "../constants";
import Navlink from "./Navlinks";

const links = [
  { url: "/", title: "Home", id: "home" },
  {
    url: "/about",
    title: "About",
    id: "about",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    url: "https://drive.google.com/file/d/1uaSCyRVCEqqTmTHlnIPa3tGjt7bPwAUA/view",
    title: "Resume ",
  },
  // {
  //   url: "/Experience",
  //   title: "Experience",
  // },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);


  const handleLinkClick = () => {
    setOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div
      className={`h-full w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-30 border-b z-50 relative bg-[#fff] dark:bg-[#050816] ${switchThemeDuration}`}
    >
      {/* Logo */}
      <div className="">
        <Link href="/" className="text-sm">
          <p className="text-[18px] font-semibold cursor-pointer flex dark:text-[#DEDEDE]">
            <span className="text-[#915EFF]">&lt;</span> Tejas Saindane{" "}
            <span className="text-[#915EFF]">&nbsp;/</span>
            <span className="text-[#915EFF]">&gt;</span>
          </p>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 text-black dark:text-[#DEDEDE] ">
        {links.map((link) => (
          // <Link href={link.url} key={link.title}>
          //   {link.title}
          // </Link>
          <Navlink link={link} key={link.title} />
        ))}
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className=" text-[#DEDEDE] dark:text-[#DEDEDE] " />
          ) : (
            <Menu className="dark:text-[#DEDEDE] " />
          )}
        </button>
        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-[#DEDEDE] flex justify-center items-center flex-col gap-8 text-2xl z-102">
            {links.map((link) => (
              <Link href={link.url} key={link.title} onClick={handleLinkClick}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
