import { NavigationProps } from "@/app/[locale]/interface";
// import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import Cart from "./Cart";
import { getSession } from "@auth0/nextjs-auth0";
import { LogOutButton } from "../logOutButton/LogOutButton";
import ThemeMode from "./ThemeMode";
import { LangButton } from "../languageChange/LangButton";
import UserAvatar from "../userProfile/UserAvatar";

const HeaderIcon: React.FC<NavigationProps> = async ({ alignItems }) => {
  const session = await getSession();

  return (
    <div style={{ alignItems: alignItems }} className="hidden lg:flex">
      <div style={{ display: "flex", alignItems: "center" }}>
        <LogOutButton />
        <LangButton />
        <ThemeMode />

        {session?.user && (
          <Link href="/profile">
            <UserAvatar />
            {/* <BsPerson className="w-7 h-7 text-[#38393b] transition-all duration-400  dark:hover:text-[#70cbcb] dark:text-[#ffffff] " /> */}
          </Link>
        )}
        <Cart />
      </div>
    </div>
  );
};

export { HeaderIcon };
