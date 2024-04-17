"use client";
import { useRouter } from "next/navigation";
const LogOutButton = ({ handleLogOut }) => {
  // console.log("handleLogOut received in LogOutButton:", handleLogOut);
  const router = useRouter();
  const handleClick = () => {
    handleLogOut();
    router.push("/logIn");
  };

  return (
    <div>
      <button className="delete" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
};
export { LogOutButton };
