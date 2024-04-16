"use server";
import { cookies } from "next/headers";
import { UserLog } from "@/components/userLogIn/UserLog";
import { AUTH_COOKIE_KEY } from "../contants";
import { redirect } from "next/navigation";
import { Userlogin } from "../actions";

export async function LogIn() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie) {
    redirect("/");
  }

  const handleLogIn = async (username, password) => {
    "use server";
    await Userlogin(username, password);
  };
  return (
    <div className="log-in-wrapper">
      <UserLog handleLogIn={handleLogIn} />
    </div>
  );
}

export default LogIn;
