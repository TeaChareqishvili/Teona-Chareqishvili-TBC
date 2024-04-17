"use client";
import { useRouter } from "next/navigation";
const LogOutButton = ({ handleLogOut }) => {
  const router = useRouter();

  // function for redirecting user to log in page
  const handleClick = () => {
    handleLogOut();
    router.push("/logIn");
  };

  return (
    <div>
      <button
        className=" border: 1px solid grey border-radius: 6px cursor: pointer;"
        onClick={handleClick}
      >
        Log Out
      </button>
    </div>
  );
};
export { LogOutButton };
