"use client";
import { useRouter } from "next/navigation";
const LogOutButton = () => {
  const router = useRouter();

  // function for redirecting user to log in page
  const handleClick = () => {
    // handleLogOut();
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
