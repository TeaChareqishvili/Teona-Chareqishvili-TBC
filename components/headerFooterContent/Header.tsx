import { Navigation } from "./Navigation";
import { HeaderIcon } from "./HeaderIcon";
import Link from "next/link";
import { LogOutButton } from "../logOutButton/LogOutButton";
import ThemeMode from "./ThemeMode";
import { LangButton } from "../languageChange/LangButton";
// import Image from "next/image";
// import LogoImage from "../../public/assets/image/logo.png";

import { Claims } from "@auth0/nextjs-auth0";
import Burger from "../Burger";

export default function Header({ session }: { session: Claims | undefined }) {
  // const [open, setOpen] = useState(false);

  // const handleCheck = () => {
  //   setOpen(true);
  // };

  return (
    <header className="w-full bg-[#f4f6f3] py-4 px-0 border-b border-[#ffffff] dark:bg-[#264653] dark:border-[#ffffff] fixed top-0 left-0 z-10 ">
      <div className="w-full p-[15px] flex items-center justify-center absolute bottom-[10px] lg:static ">
        <LogOutButton session={session} />
        <LangButton />
        <ThemeMode />
      </div>
      <div className="w-4/5 flex items-center justify-between mx-auto">
        {" "}
        <Link href="/">
          {/* <Image src={LogoImage} alt="Logo" width={100} height={50} /> */}
          <h1>logo</h1>
        </Link>
        <div className="hidden lg:block">
          <Navigation marginLeft="30px" display="flex" />
        </div>
        <HeaderIcon marginRight="20px" alignItems="center" />
        <Burger />
      </div>
    </header>
  );
}
