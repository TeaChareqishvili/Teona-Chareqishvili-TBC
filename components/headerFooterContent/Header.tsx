import { Navigation } from "./Navigation";
import { HeaderIcon } from "./HeaderIcon";
import Link from "next/link";
import { Claims } from "@auth0/nextjs-auth0";
import Burger from "../Burger";
import HeaderWrapper from "./HeaderWrapper";

export default function Header({ session }: { session: Claims | undefined }) {
  return (
    <HeaderWrapper>
      <div className="w-4/5 flex items-center justify-between mx-auto">
        {" "}
        <Link href="/">
          {/* "  <Image
            className="text-white"
            src={LogoImage}
            alt="Logo"
            width={100}
            height={50}
          />" */}
          <h1>logo</h1>
        </Link>
        <div className="hidden lg:block">
          <Navigation marginLeft="30px" display="flex" />
        </div>
        <HeaderIcon marginRight="20px" alignItems="center" />
        <Burger />
      </div>
    </HeaderWrapper>
  );
}
