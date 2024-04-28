"use client";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { handleLogout } from "../../helper/userLogOut";

const LogOutButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    await handleLogout();
    localStorage.removeItem("theme");
    router.push("/logIn");
  };

  const { t } = useTranslation();

  return (
    <div>
      <button
        className=" w-[100px] border-double border hover:scale-125 border-[#111827] text-[#111827] dark:border-[#70cbcb] rounded-md cursor: pointer bg-green font-lg dark:text-[#70cbcb] py-[6px] px-[12px] dark:hover:border-[#ffffff] dark:hover:text-[#ffffff] transition duration-700"
        onClick={handleClick}
      >
        {t("logOut")}
      </button>
    </div>
  );
};
export { LogOutButton };
