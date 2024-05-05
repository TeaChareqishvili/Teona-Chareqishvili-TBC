"use client";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { Navigation } from "./Navigation";
import logo from "../../public/assets/image/logo.webp";
import { MobileMenu } from "../headerFooterContent/MobileMenu";
import { useState } from "react";
import { HeaderIcon } from "./HeaderIcon";
import Link from "next/link";
import { LogOutButton } from "../logOutButton/LogOutButton";
import ThemeMode from "./ThemeMode";
import { LangButton } from "../languageChange/LangButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#ffffff] py-4 px-0 border-b border-[#111827] dark:bg-[#dbe0da] dark:border-[#ffffff] fixed top-0 left-0 z-10 ">
      <div className="w-full  p-[15px] flex items-center justify-center">
        <LogOutButton />
        <LangButton />
        <ThemeMode />
      </div>
      <div className="w-4/5 flex items-center justify-between mx-auto">
        {" "}
        <Link href="/">
          {" "}
          {/* <Image
            className="w-[70px] h-[70px] rounded-md"
            src={logo}
            alt="logo"
          /> */}
          <h1>Logo</h1>
        </Link>
        <GiHamburgerMenu
          className="w-7 h-7 text-red-600 cursor-pointer lg:hidden"
          onClick={() => setOpen(true)}
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
