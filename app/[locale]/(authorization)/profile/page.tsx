import UserProfile from "../../../../components/userProfile/UserProfile";
import { getSession } from "@auth0/nextjs-auth0";
import { getOrders } from "../../../../apiUsers";

export default async function ProfilePage() {
  const session = await getSession();
  const orders = await getOrders();

  const userSub = session?.user?.sub;

  const usersOrder = orders.filter(
    (order: any) => order.metadata.id === userSub
  );
  console.log(usersOrder, "ordersss");
  return (
    <div className="w-full m-auto min-h-[300px] bg-[#D3D9D4] lg:mt-[158px] mt-[60px] py-[50px] dark:bg-[#2E3944]">
      <UserProfile usersOrder={usersOrder} />
    </div>
  );
}
