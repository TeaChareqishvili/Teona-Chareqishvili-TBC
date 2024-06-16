import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import AvatarUpload from "./AvatarUpload";
import { Host } from "@/apiUsers";
// import { getScopedI18n } from "@/locales/server";
import UserInfo from "./UserInfo";
import { getUserInfo } from "../../apiUsers";

export default async function UserProfile() {
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
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
      <div className=" w-[250px] h-[250px]">
        <Image
          src={data.user.img}
          alt={user.name}
          width={250}
          height={250}
          className="object-cover rounded-full w-full h-full"
        />
      </div>
      <UserInfo user={currentUser} id={currentUser.serial_id} />
      <AvatarUpload />
    </div>
  );
}
