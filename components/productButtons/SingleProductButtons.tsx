"use client";
import { handleAddToCart } from "@/app/[locale]/actions";
import { handleDecrementCart } from "@/app/[locale]/actions";

const SingleProductButton = ({ id }: number) => {
  return (
    <>
      <button onClick={() => handleAddToCart(id)}>+</button>
      <button onClick={() => handleDecrementCart(id)}>-</button>
      <button>Delete</button>
    </>
  );
};

export { SingleProductButton };
