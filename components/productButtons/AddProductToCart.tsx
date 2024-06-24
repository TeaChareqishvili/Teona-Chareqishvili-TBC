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
        className="px-4 uppercase py-2 bg-[#2E3944] text-white rounded-md hover:bg-[#171d23] dark:bg-[#D3D9D4] dark:text-[#2E3944] dark:hover:bg-[#748D92] dark:hover:text-white transition"
      >
        Add To cart
      </button>
    </>
  );
};

export { AddProductToCart };
