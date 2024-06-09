"use client";
import { Host } from "../../apiUsers";
export default function CheckOutBtn({ filteredProducts }: any) {
  const checkout = async () => {
    await fetch(Host + "/api/checkOut", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: filteredProducts }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.url) {
          window.location.href = response.url;
        }
      });
  };

  return (
    <>
      <button
        onClick={checkout}
        className="bg-[#9b2226] text-[#ffffff] py-2 px-4 rounded-md w-[150px] mt-[15px] cursor-pointer hover:bg-[#f5ebe0] hover:text-[#264653] transition-all duration-200"
      >
        Buy Now
      </button>
    </>
  );
}
