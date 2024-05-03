"use client";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { Navigation } from "./Navigation";
import logo from "../../public/assets/image/next.webp";
import { MobileMenu } from "../headerFooterContent/MobileMenu";
import { useState } from "react";
import { HeaderIcon } from "./HeaderIcon";
import Link from "next/link";
// import { LogOutButton } from "../logOutButton/LogOutButton";
import ThemeMode from "./ThemeMode";
// import { LangButton } from "../languageChange/LangButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#ffffff] py-4 px-0 border-b border-[#111827] dark:bg-[#111827] dark:border-[#ffffff] sticky top-0 left-0">
      <div className="w-4/5 flex items-center justify-between mx-auto">
        {" "}
        <Link href="/">
          {" "}
          <Image className="w-[50px] h-[50px]" src={logo} alt="logo" />
        </Link>
        <GiHamburgerMenu
          className="w-7 h-7 text-red-600 cursor-pointer lg:hidden"
          onClick={() => setOpen(true)}
        />
        <div className="hidden lg:block">
          <Navigation marginLeft="30px" display="flex" />
        </div>
        <HeaderIcon marginRight="20px" alignItems="center" />
        {/* <LogOutButton />
        <LangButton /> */}
        <ThemeMode />
      </div>
      {open && <MobileMenu setOpen={setOpen} />}
    </header>
  );
}
