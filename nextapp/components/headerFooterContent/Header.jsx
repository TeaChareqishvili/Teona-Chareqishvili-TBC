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
    <header className="header">
      <div className="header-container">
        {" "}
        <Link href="/">
          {" "}
          <Image src={logo} alt="logo" />
        </Link>
        <GiHamburgerMenu
          className="burger-menu"
          onClick={() => setOpen(true)}
        />
        <div className="header-navigation">
          <Navigation marginLeft="30px" display="flex" />
        </div>
        <HeaderIcon marginRight="20px" alignItmes="center" />
      </div>
      {open && <MobileMenu setOpen={setOpen} />}
    </header>
  );
};

export { Header };
