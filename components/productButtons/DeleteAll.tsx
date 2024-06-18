"use client";
import { handleClearCart } from "../../app/[locale]/actions";

const DeleteAll = () => {
  return (
    <>
      <button
        onClick={() => handleClearCart()}
        className="w-[130px] px-[10px] py-[7px] border text-[#ffffff]  border-[#212A31] bg-[#212A31] mb-[40px] dark:bg-[#D3D9D4] dark:border-[#D3D9D4] dark:text-[#2E3944] cursor-pointer rounded-md dark:hover:bg-[#9b2226] dark:hover:text-white dark:hover:border-[#9b2226] hover:bg-[#9b2226]"
      >
        Delete All{" "}
      </button>
    </>
  );
};

export { DeleteAll };
