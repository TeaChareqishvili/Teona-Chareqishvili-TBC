"use server";
import UserProfile from "../../../../components/userProfile/UserProfile";

import { getOrders, getUserInfo } from "../../../../apiUsers";

export default async function ProfilePage() {
  const user = await getUserInfo();
  const orders = await getOrders();

  const userSub = user?.serial_id;

  const usersOrder = orders.filter(
    (order: any) => order.metadata.id == userSub
  );

  return (
    <div className="w-full m-auto min-h-[300px] bg-[#D3D9D4] lg:mt-[90px] mt-[60px] py-[50px] dark:bg-[#2E3944]">
      <UserProfile usersOrder={usersOrder} />
    </div>
  );
}
