import OrdersList from "@/components/userOrders/OrderList";
import { getOrders } from "@/apiUsers";
export default async function Orders() {
  const orders = await getOrders();
  console.log(orders, "orders");
  return (
    <>
      <h1>Orders</h1>
      <OrdersList orders={orders} />
    </>
  );
}
