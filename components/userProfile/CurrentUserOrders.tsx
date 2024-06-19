"use client";
import { useState } from "react";

export default function CurrentUserOrders({ usersOrder }: any) {
  const [orders, setOrders] = useState(false);
  const handleShowOrders = () => {
    setOrders(!orders);
  };
  return (
    <div className="p-4 mt-[30px]">
      {usersOrder && (
        <button
          onClick={handleShowOrders}
          className="dark:bg-[#212A31] flex items-center h-[40px] justify-center bg-[#748D82] w-[150px] hover:bg-[#124E66] transition-all duration-200  text-white py-2 px-4 rounded"
        >
          {orders ? "Close" : "See your orders"}
        </button>
      )}
      {orders && (
        <div className="mt-4">
          {usersOrder.map((order: any) => (
            <div
              key={order.latest_charge.id}
              className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md"
            >
              <p className="text-lg font-semibold dark:text-white">
                Amount: ${(order.amount / 100).toFixed(2)}
              </p>
              <p className="text-sm `${order.latest_charge.refunded ? text-[#d62828] : text-[#52b69a]}`">
                status:{" "}
                {order.latest_charge.refunded === true ? "Refunded" : "Paid"}
              </p>
              <p className="text-sm text-white">
                Address: {order.metadata.address}
              </p>
              <p className="text-sm text-white">
                Phone: {order.metadata.phone_number}
              </p>
              <p className="text-sm text-blue-600 underline">
                <a
                  href={order.latest_charge.receipt_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Receipt
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
