import { Navigation } from "./Navigation";
import { HeaderIcon } from "./HeaderIcon";
import Link from "next/link";

import Burger from "../Burger";
import HeaderWrapper from "./HeaderWrapper";
import Image from "next/image";
import Logo from "../../public/assets/image/logo.png";

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="w-[95%] flex items-center justify-between mx-auto">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              className="text-white "
              src={Logo}
              alt="Logo"
              width={60}
              height={50}
            />
          </Link>
          <div className="hidden lg:block">
            <Navigation marginLeft="30px" display="flex" />
          </div>
        </div>
        <div className="w-[60%] lg:w-[30%]">
          <HeaderIcon marginRight="20px" alignItems="center" />
        </div>
        <Burger />
      </div>
    </HeaderWrapper>
  );
}
