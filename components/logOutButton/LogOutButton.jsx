"use client";
import { useRouter } from "next/navigation";
import { handleLogout } from "../../handler/userLogOut";
const LogOutButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    await handleLogout();
    localStorage.removeItem("theme");
    router.push("/logIn");
  };

  return (
    <div>
      <button
        className="border-double border border-[#70cbcb] rounded-md cursor: pointer bg-green font-lg text-[#70cbcb] py-[7px] px-[15px]"
        onClick={handleClick}
      >
        Log Out
      </button>
    </div>
  );
};
export { LogOutButton };
