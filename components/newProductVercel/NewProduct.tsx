"use client";
import Link from "next/link";
import { AddProductToCart } from "../productButtons/AddProductToCart";
import { VercelProduct, NewProductProps } from "../../app/[locale]/interface";
import { handleAddToCart } from "../../app/[locale]/actions";

import Image from "next/image";

export default function NewProduct({ product }: NewProductProps) {
  return (
    <>
      {product.map((product: VercelProduct) => (
        <div
          key={product.id}
          className="max-w-xs bg-white shadow-lg rounded-lg p-5 space-y-4 overflow-hidden mb-10"
        >
          <Image
            width={300}
            height={300}
            src={product.imageurl}
            alt={`Product ${product.id}`}
            className="hover mb-7 cursor-pointer"
          />
          <div className="h-1 w-7 bg-gray-500"></div>
          <p className="text-lg italic text-gray-500 hover:text-gray-700 hover:scale-110 tracking-wider py-5 text-center cursor-pointer transition-all duration-200 mt-4">
            {product.title}
          </p>
          <Link
            className="border border-gray-400 text-center w-36 text-white mt-2 px-2 py-2 bg-green-700 rounded-md hover:bg-green-800 transition-colors duration-300"
            href={`/singleProductVercel/${product.id}`}
          >
            View Details
          </Link>
          <AddProductToCart
            productId={product.id}
            handleAddToCart={handleAddToCart}
          />
        </div>
      ))}
    </>
  );
}
