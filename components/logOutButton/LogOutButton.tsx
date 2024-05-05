"use client";

import { useRouter } from "next/navigation";
import { handleLogout } from "@/helper/userLogOut";
import { useScopedI18n } from "../../locales/client";

const LogOutButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    await handleLogout();
    localStorage.removeItem("theme");
    router.push("/logIn");
  };
  const scopedT = useScopedI18n("logOutbtn");

  return (
    <div>
      <button
        className=" w-[100px] hover:border-double hover:border hover:scale-125 border-[#111827] text-[#111827] dark:border-[#728a85] rounded-md cursor: pointer bg-green font-lg dark:text-[#ffffff] py-[6px] px-[12px] dark:hover:border-[#ffffff] dark:hover:text-[#ffffff] transition duration-200"
        onClick={handleClick}
      >
        {scopedT("logOut")}
      </button>
    </div>
  );
};
export { LogOutButton };
