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
    <div className="mr-[7px] ">
      {user ? (
        <a href="/api/auth/logout">
          <HiOutlineLogout className="lg:w-[20px] lg:h-[20px] text-[#ffffff] cursor-pointer dark:text-[#ffffff] dark:hover:text-[#74bD92] " />
        </a>
      ) : (
        <a href="/api/auth/login">
          <IoLogIn className="lg:w-[25px] lg:h-[25px] text-[#ffffff] cursor-pointer dark:text-[#ffffff] dark:hover:text-[#74bD92] " />
        </a>
      )}
    </div>
  );
};
export { LogOutButton };
