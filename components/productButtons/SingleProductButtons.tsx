"use client";
import { handleAddToCart } from "@/app/[locale]/actions";
import { handleDecrementCart } from "@/app/[locale]/actions";
import { handleRemoveProductFromCart } from "../../app/[locale]/actions";

const SingleProductButton = ({ id }: any) => {
  return (
    <>
      <button onClick={() => handleAddToCart(id)}>+</button>
      <button onClick={() => handleDecrementCart(id)}>-</button>
      <button onClick={() => handleRemoveProductFromCart(id)}>Delete</button>
    </>
  );
};

export { SingleProductButton };
