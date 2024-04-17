"use server";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../contants";
import { redirect } from "next/navigation";
import { UserAuthorization } from "../../components/userLogIn/UserAuthorization";
import { Userlogin } from "../actions";

export async function LogIn() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (cookie?.value) {
    redirect("/");
  }
  // console.log(cookie, "log");
  const handleLogIn = async (username, password) => {
    "use server";
    await Userlogin(username, password);
  };

  return (
    <div className="log-in-wrapper">
      <UserAuthorization handleLogIn={handleLogIn} />
    </div>
  );
}

export default LogIn;
