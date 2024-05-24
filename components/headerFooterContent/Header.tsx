"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { Navigation } from "./Navigation";
import { MobileMenu } from "../headerFooterContent/MobileMenu";
import { useState } from "react";
import { HeaderIcon } from "./HeaderIcon";
import Link from "next/link";
import { LogOutButton } from "../logOutButton/LogOutButton";
import ThemeMode from "./ThemeMode";
import { LangButton } from "../languageChange/LangButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleCheck = () => {
    setOpen(true);
  };
  return (
    <header className="w-full bg-[#dbe0da] py-4 px-0 border-b border-[#111827] dark:bg-[#264653] dark:border-[#ffffff] fixed top-0 left-0 z-10 ">
      <div className="w-full  p-[15px] flex items-center justify-center mobile">
        <LogOutButton />
        <LangButton />
        <ThemeMode />
      </div>

      <div className="w-4/5 flex items-center justify-between mx-auto">
        {" "}
        <Link href="/">
          {" "}
          {/* <svg
            width="150"
            height="50"
            viewBox="0 0 600 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <style>
              {`
        .text {
          font-family: 'Great Vibes', cursive;
          font-size: 120px;
          fill: white;
          font-weight: bold;
        }
      `}
            </style>
            <rect width="100%" height="100%" fill="none" />
            <text
              x="50%"
              y="50%"
              className="text"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              LOGO
            </text>
          </svg> */}
          <h1>Logo</h1>
        </Link>
        <GiHamburgerMenu
          className="w-7 h-7 text-[#264653] cursor-pointer lg:hidden"
          onClick={handleCheck}
        />
        <div className="hidden lg:block">
          <Navigation marginLeft="30px" display="flex" />
        </div>
        <HeaderIcon marginRight="20px" alignItems="center" />
      </div>
      {open && <MobileMenu setOpen={setOpen} />}
    </header>
  );
}
