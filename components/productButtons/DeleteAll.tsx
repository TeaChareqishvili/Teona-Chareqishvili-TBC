"use client";
import { handleClearCart } from "../../app/[locale]/actions";

const DeleteAll = () => {
  return (
    <>
      <button
        onClick={() => handleClearCart()}
        className="w-[100px] text-[black]"
      >
        Delete All{" "}
      </button>
    </>
  );
};

export { DeleteAll };
