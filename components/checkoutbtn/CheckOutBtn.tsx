"use client";

export default function CheckOutBtn({ checkout }: any) {
  const handleCheckout = async () => {
    console.log("Checkout button clicked");
    try {
      await checkout();
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <>
      <button
        onClick={handleCheckout}
        className="bg-[#9b2226] text-[#ffffff] py-2 px-4 rounded-md w-[150px] mt-[15px] cursor-pointer hover:bg-[#f5ebe0] hover:text-[#264653] transition-all duration-200"
      >
        Buy Now
      </button>
    </>
  );
}
