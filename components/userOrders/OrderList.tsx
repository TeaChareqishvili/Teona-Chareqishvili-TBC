"use client";

import { createRefund } from "../../app/[locale]/actions";
const OrdersList = ({ orders }: any) => {
  console.log(orders, "orders");

  const refundHandler = async (charge: string) => {
    await createRefund(charge);
  };

  return (
    <div className="mt-[50px] dark:bg-[#e5e5e5] p-[50px]">
      {orders.map((order: any) => (
        <div
          key={order.latest_charge.id}
          className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-4 flex justify-between">
            <div>
              <p className="text-xl font-semibold">
                <span className="text-red">
                  ${(order.amount / 100).toFixed(2)}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                {/* Additional information can be placed here */}
              </p>
            </div>
            <a
              href={order.latest_charge.receipt_url}
              aria-label="Order Receipt"
              target="_blank"
              className="text-red underline"
              rel="noopener noreferrer"
            >
              View Receipt
            </a>
            {order.latest_charge.refunded === true ? "Refunded" : "Paid"}
            {order.latest_charge.refunded === false && (
              <button
                onClick={() => refundHandler(order.latest_charge.id)}
                type="button"
                className="p-1 px-[25px] border border-solid border-red text-[18px] text-black font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 bg-red hover:bg-lightred w-[150px]"
              >
                refund
              </button>
            )}
          </div>
          <div className="space-y-2">
            <p className="text-gray-700">
              {/* Any other information can be placed here */}
            </p>
            <p className="text-gray-700">City: {order.metadata.city}</p>
            <p className="text-gray-700">
              {/* Additional information can be placed here */}
            </p>
            <p>
              <span
                className={`font-bold ${
                  order.latest_charge.refunded === true
                    ? "text-gray"
                    : "text-green"
                }`}
              >
                {order.latest_charge.refunded === true ? "Refunded" : "Paid"}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
