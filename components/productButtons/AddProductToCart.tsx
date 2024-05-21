"use client";
import React from "react";
interface AddToCartButtonProps {
  productId: number;
  handleAddToCart: (productId: number) => void;
}
const AddProductToCart: React.FC<AddToCartButtonProps> = ({
  productId,
  handleAddToCart,
}) => {
  return (
    <>
      <button
        onClick={() => handleAddToCart(productId)}
        className="border border-black text-black mt-[10px] px-[10px] py-[7px]"
      >
        Add To cart
      </button>
    </>
  );
};

export { AddProductToCart };
