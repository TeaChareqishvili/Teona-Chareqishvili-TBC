"use client";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { Navigation } from "../headerFooterContent/Navigation";
import logo from "../../public/assets/image/logo.webp";
import { MobileMenu } from "../headerFooterContent/MobileMenu";
import { useState } from "react";
import { HeaderIcon } from "../headerFooterContent/HeaderIcon";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white py-4 px-0 border-b border-gray-700">
      <div className="w-4/5 flex items-center justify-between mx-auto">
        {" "}
        <Link href="/">
          {" "}
          <Image src={logo} alt="logo" />
        </Link>
        <GiHamburgerMenu
          className="w-7 h-7 text-red-600 cursor-pointer lg:hidden"
          onClick={() => setOpen(true)}
        />
        <div className="hidden lg:block">
          <Navigation marginLeft="30px" display="flex" />
        </div>
        <HeaderIcon marginRight="20px" alignItmes="center" />
      </div>
      {open && <MobileMenu setOpen={setOpen} />}
    </header>
  );
};

export { Header };
