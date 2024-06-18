import { getSession } from "@auth0/nextjs-auth0";
import { getOrders } from "../../../../apiUsers";

export default async function userOrders() {
  const session = await getSession();
  const orders = await getOrders();

  const userSub = session?.users?.sub;
  const usersOrder = orders.filter((order) => order.metadata.id === userSub);
  console.log(usersOrder, "ordersss");

  return <div></div>;
}
