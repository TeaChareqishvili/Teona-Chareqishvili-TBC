"use client";

import { createRefund } from "../../app/[locale]/actions";

const OrdersList = ({ orders }: any) => {
  console.log(orders, "orders");

  const refundHandler = async (charge: string) => {
    await createRefund(charge);
  };

  return (
    <div className="mt-12 dark:bg-gray-200 p-12 min-h-screen">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#1d273d]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                City
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order: any) => (
              <tr key={order.latest_charge.id}>
                <td className="px-6 py-7 whitespace-nowrap text-sm font-semibold text-gray-900">
                  ${((order.amount || 0) / 100).toFixed(2)}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                    order.latest_charge.refunded
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {order.latest_charge.refunded ? "Refunded" : "Paid"}
                </td>
                <td className="px-6 py-7 whitespace-nowrap text-sm text-gray-500">
                  {order.metadata.city || "N/A"}
                </td>
                <td className="px-6 py-7 whitespace-nowrap text-sm">
                  <div className="flex items-center space-x-4">
                    <a
                      href={order.latest_charge.receipt_url}
                      aria-label="Order Receipt"
                      target="_blank"
                      className="text-[#3559a5] underline"
                      rel="noopener noreferrer"
                    >
                      View Receipt
                    </a>
                    {!order.latest_charge.refunded && (
                      <button
                        onClick={() => refundHandler(order.latest_charge.id)}
                        type="button"
                        className="p-1 px-6 border border-solid border-red-500 text-red-500 font-medium uppercase flex items-center justify-center gap-2 bg-red-100 hover:bg-red-200 w-32"
                      >
                        Refund
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
