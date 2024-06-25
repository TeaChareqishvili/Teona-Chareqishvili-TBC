import OrdersList from "@/components/userOrders/OrderList";
import { getOrders } from "@/apiUsers";
export default async function Orders() {
  const orders = await getOrders();

  return (
    <>
      <OrdersList orders={orders} />
    </>
  );
}
