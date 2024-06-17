import { getUserInfo } from "@/apiUsers";
import Image from "next/image";

export default async function UserAvatar() {
  const userAvatar = await getUserInfo();

  return (
    <>
      <Image
        className="rounded-lg"
        width={22}
        height={22}
        src={userAvatar.img}
        alt="avatar"
      />
    </>
  );
}
