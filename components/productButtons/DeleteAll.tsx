"use client";
import { handleClearCart } from "../../app/[locale]/actions";

const DeleteAll = () => {
  return (
    <>
      <button
        onClick={() => handleClearCart()}
        className="w-[100px] px-[10px] py-[7px] border border-[#ffffff] mb-[40px]"
      >
        Delete All{" "}
      </button>
    </>
  );
};

export { DeleteAll };
