"use server";
import { getSession } from "@auth0/nextjs-auth0";
// import Image from "next/image";
import AvatarUpload from "./AvatarUpload";
import { Host } from "@/apiUsers";
// import { getScopedI18n } from "@/locales/server";
import UserInfo from "./UserInfo";
import { getUserInfo } from "../../apiUsers";
import CurrentUserOrders from "./CurrentUserOrders";

export default async function UserProfile({ usersOrder }: any) {
  const session = await getSession();
  // const t = await getScopedI18n("profile");
  console.log(session, "sesion");
  const response = await fetch(`${Host}/api/get-updated-info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ session }),
  });

  const data = await response.json();

  if (!session || !session.user) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        No user session found.
      </div>
    );
  }

  const currentUser = await getUserInfo();
  const { user } = session;

  return (
    <div className="w-[90%] m-auto flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between m-auto">
        <AvatarUpload userimg={user} data={data} />
        <UserInfo user={currentUser} id={currentUser.serial_id} />
      </div>
      <CurrentUserOrders usersOrder={usersOrder} />
    </div>
  );
}
