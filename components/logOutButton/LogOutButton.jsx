"use client";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { handleLogout } from "../../something/userLogOut";

const LogOutButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    await handleLogout();
    localStorage.removeItem("theme");
    router.push("/logIn");
  };

  const { t, i18n: translation } = useTranslation();

  return (
    <div>
      <button
        className="border-double border border-[#70cbcb] rounded-md cursor: pointer bg-green font-lg text-[#70cbcb] py-[7px] px-[15px]"
        onClick={handleClick}
      >
        {t("logOut")}
      </button>
    </div>
  );
};
export { LogOutButton };
