"use client";

// import { useRouter } from "next/navigation";
// import { handleLogout } from "@/helper/userLogOut";
import { useUser } from '@auth0/nextjs-auth0/client';
import { HiOutlineLogout } from "react-icons/hi";
import { IoLogIn } from "react-icons/io5";
import Link from 'next/link';

const LogOutButton = () => {
  // const router = useRouter();
  const { user } = useUser();

  // const handleClick = async () => {
  //   await handleLogout();
  //   localStorage.removeItem("theme");
  //   router.push("/logIn");
  // };

  return (
    <div>
      {user ? (
        <Link href="/api/auth/logout"><HiOutlineLogout
          className="w-[20px] h-[20px] text-[#264653] cursor-pointer dark:text-[#ffffff] "
        /></Link>
      ) : (
        <Link href="/api/auth/login">
          <IoLogIn
            className="w-[20px] h-[20px] text-[#264653] cursor-pointer dark:text-[#ffffff] "
          />
        </Link>
      )}
    </div>
  );
};
export { LogOutButton };
