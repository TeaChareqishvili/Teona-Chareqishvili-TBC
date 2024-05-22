"use client";
import React from "react";
import { AddToCartButtonProps } from "../../app/[locale]/interface";
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
