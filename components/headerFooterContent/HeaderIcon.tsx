import { NavigationProps } from "@/app/[locale]/interface";
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
    <div style={{ alignItems: alignItems }} className=" lg:flex w-full">
      <div
        style={{ display: "flex", alignItems: "center" }}
        className="w-full flex items-center justify-evenly"
      >
        <Cart />
        {session?.user && (
          <Link href="/profile">
            <UserAvatar />
          </Link>
        )}
        <LangButton />
        <ThemeMode />
        <LogOutButton />
      </div>
    </div>
  );
};

export { HeaderIcon };
