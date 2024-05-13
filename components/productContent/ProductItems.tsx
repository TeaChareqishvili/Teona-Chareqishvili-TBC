"use client";
// import { useSaveProducts } from "@/hook";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "../../app/[locale]/interface";
import { useReducer } from "react";

interface SelectedProduct {
  id: number;
  count: number;
}

type Action =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET" };

const reducer = (state: SelectedProduct[], action: Action) => {
  switch (action.type) {
    case "INCREMENT": {
      const selectedProductIdx = state.findIndex(
        (p) => p.id === action.payload
      );
      if (selectedProductIdx === -1)
        return [...state, { id: action.payload, count: 1 }];
      const clone = [...state];
      const selectedProduct = clone[selectedProductIdx];
      const updatedSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count + 1,
      };
      clone[selectedProductIdx] = updatedSelectedProduct;
      return clone;
    }

    case "DECREMENT": {
      const selectedProductIdx = state.findIndex(
        (p) => p.id === action.payload
      );
      if (selectedProductIdx === -1)
        return [...state, { id: action.payload, count: 1 }];
      const clone = [...state];
      const selectedProduct = clone[selectedProductIdx];
      const updatedSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count - 1,
      };
      clone[selectedProductIdx] = updatedSelectedProduct;
      return clone;
    }
    case "RESET":
      return initialState;
  }
};

const initialState: SelectedProduct[] = [];
const ProductItems = ({
  imgUrl,
  title,
  brand,
  category,
  discountPercentage,
  price,
  rating,
  stock,
  id,
}: ProductCard) => {
  const [selectedProducts, dispatch] = useReducer(reducer, initialState);

  const handleAddProduct = (id: number) => {
    dispatch({ type: "INCREMENT", payload: id });
  };
  console.log(selectedProducts, "selected");
  return (
    <>
      <div>
        <span className="text-black">{selectedProducts.length}num</span>
      </div>
      <div className="item-wrapper flex flex-col items-center justify-center border border-gray-300 shadow transition-shadow  cursor-pointer  rounded p-2 mb-2 hover:shadow-lg">
        <div className="product-img">
          <Image
            className="object-fill"
            src={imgUrl}
            alt="product"
            width={100}
            height={100}
          />
          <div className="add-cart">
            <button onClick={() => handleAddProduct(id)}>ADD TO CART</button>
          </div>
          <span>Rating-{rating}</span>
        </div>
        <div>
          <p className="font-medium text green-950 font-tbc-helbetica-bold">
            {title}
          </p>
          <p className="font-base text green-950 font-tbc-helbetica-bold">
            {brand} / {category}
          </p>
          <p className="text-[#ff1f1f] font-[18px] font-tbc-helbetica-bold">
            {price}$
          </p>
          <p className="text-[#678E6C] text-base font-tbc-helvetica-bold">
            {discountPercentage}%
          </p>
          <p className="product-description">{stock} left in stock</p>
          <Link href={`/product/${id}`}>view details</Link>
        </div>
      </div>
    </>
  );
};

export { ProductItems };
