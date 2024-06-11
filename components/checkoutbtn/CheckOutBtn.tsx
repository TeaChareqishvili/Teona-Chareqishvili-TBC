"use client";
// import { Host } from "../../apiUsers";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function CheckOutBtn({ filteredProducts }: any) {
  const { user } = useUser();
  const checkout = async () => {
    await fetch("http://localhost:3000/api/checkOut", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: filteredProducts, user }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.url) {
          window.location.href = response.url;
        }
      })
      .catch((error) => {
        console.error("Error during checkout:", error);
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
