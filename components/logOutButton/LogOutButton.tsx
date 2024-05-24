"use client";

import { useRouter } from "next/navigation";
import { handleLogout } from "@/helper/userLogOut";

import { HiOutlineLogout } from "react-icons/hi";
const LogOutButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    await handleLogout();
    localStorage.removeItem("theme");
    router.push("/logIn");
  };

  return (
    <div>
      <HiOutlineLogout
        onClick={handleClick}
        className="w-[20px] h-[20px] text-[#264653] cursor-pointer dark:text-[#ffffff] "
      />
    </div>
  );
};
export { LogOutButton };
