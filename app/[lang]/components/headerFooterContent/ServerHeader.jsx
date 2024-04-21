"use server";
import { logout } from "../../../actions";
import { AUTH_COOKIE_KEY } from "../../../contants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// import { LogOutButton } from "../logOutButton/LogOutButton";
// import { LogOutButton } from "../logOutButton/LogOutButton";

export default function ServerHeader() {
  const handleLogOut = async () => {
    "use server";
    await logout();
    const cookieStore = cookies();
    const cookie = cookieStore.get(AUTH_COOKIE_KEY);

    if (!cookie?.value) {
      redirect("/logIn");
    }

    return <div>fuck</div>;
  };
}
