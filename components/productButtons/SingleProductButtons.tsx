"use client";
import { handleAddToCart } from "@/app/[locale]/actions";
import { handleDecrementCart } from "@/app/[locale]/actions";
import { handleRemoveProductFromCart } from "../../app/[locale]/actions";

const SingleProductButtons = ({ id }: any) => {
  return (
    <div className="flex flex-col items-center mr-[30px] text-[white]">
      <button onClick={() => handleAddToCart(id)}>+</button>
      <button onClick={() => handleDecrementCart(id)}>-</button>
      <button onClick={() => handleRemoveProductFromCart(id)}>Delete</button>
    </div>
  );
};

export { SingleProductButtons };
