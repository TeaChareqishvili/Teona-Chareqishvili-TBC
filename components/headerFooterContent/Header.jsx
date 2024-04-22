"use server";
import Image from "next/image";
// import { GiHamburgerMenu } from "react-icons/gi";
import { Navigation } from "./Navigation";
// import logo from "../../../../public/assets/image/footerLogo.webp";
// import { MobileMenu } from "../headerFooterContent/MobileMenu";
// import { useState } from "react";
import { HeaderIcon } from "./HeaderIcon";
import Link from "next/link";
// import { logout } from "../../app/actions";
import { LogOutButton } from "../logOutButton/LogOutButton";
import ThemeMode from "./ThemeMode";

async function Header() {
  // const [open, setOpen] = useState(false);

  //function for user log out
  // const handleLogOut = async () => {
  //   "use server";
  //   await logout();
  // };

  return (
    <header className="w-full bg-[#BECADA] py-4 px-0 border-b border-[#939898] dark:bg-[#111827]">
      <div className="w-4/5 flex items-center justify-between mx-auto">
        {" "}
        <Link href="/"> {/* <Image src={logo} alt="logo" /> */}</Link>
        {/* <GiHamburgerMenu
          className="w-7 h-7 text-red-600 cursor-pointer lg:hidden"
          onClick={() => setOpen(true)}
        /> */}
        <div className="hidden lg:block">
          <Navigation marginLeft="30px" display="flex" />
        </div>
        {/* <HeaderIcon marginRight="20px" alignItmes="center" /> */}
        <LogOutButton />
        <ThemeMode />
      </div>

      {/* {open && <MobileMenu setOpen={setOpen} />} */}
    </header>
  );
}

export default Header;
