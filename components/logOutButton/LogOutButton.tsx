"use client";

// import { useRouter } from "next/navigation";
// import { handleLogout } from "@/helper/userLogOut";
import { HiOutlineLogout } from "react-icons/hi";
import { IoLogIn } from "react-icons/io5";
// import { Claims } from '@auth0/nextjs-auth0';
import { useUser } from "@auth0/nextjs-auth0/client";
const LogOutButton = () => {
  const { user } = useUser();
  return (
    <div>
      {user ? (
        <a href="/api/auth/logout">
          <HiOutlineLogout className="w-7 h-7 text-[#264653] cursor-pointer dark:text-[#ffffff] " />
        </a>
      ) : (
        <a href="/api/auth/login">
          <IoLogIn className="w-7 h-7 text-[#264653] cursor-pointer dark:text-[#ffffff] " />
        </a>
      )}
    </div>
  );
};
export { LogOutButton };
