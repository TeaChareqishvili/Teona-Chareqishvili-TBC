"use client";
import useProductCart from "@/hook";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useState, useEffect } from "react";

const CartProducts = () => {
  const [buttonRender, setButtonRender] = useState(true);
  const {
    items,
    incrementProductQuantity,
    decrementProductQuantity,
    clearCart,
    removeProduct,
    totalProductCount,
  } = useProductCart();

  useEffect(() => {
    if (totalProductCount === 0) {
      setButtonRender(false);
    } else {
      setButtonRender(true);
    }
  }, [totalProductCount]);

  const handleClear = () => {
    clearCart();
  };
  return (
    <div className="mt-[130px] w-4/5 mx-auto text-[black]">
      {buttonRender ? (
        <button
          className="mt-[20px] w-[100px] py-[7px] px-[15px] text-[#ffffff] bg-[#780000] rounded-md cursor-pointer hover:bg-[#546e6d] transition-all delay-200"
          onClick={handleClear}
        >
          Clear all
        </button>
      ) : (
        <p className="mx-auto h-[300px] text-[#780000] font-[30px] text-center mt-[40px]">
          There are No items !{" "}
        </p>
      )}

      {items?.map((item, index) => (
        <div
          key={index}
          className="w-full border-b-2 border-[#344e41] py-[20px] px-[30px] my-[30px] flex items-center justify-between"
        >
          <Image src={item.imgUrl} alt="product-img" width={100} height={100} />
          <div>
            {" "}
            <p>BRAND:{item.brand}</p>
            <p>TITLE:{item.title}</p>
            <p>PRICE:{item.price}</p>
            <p>QUANTITY:{item.quantity}</p>
          </div>
          <div className="ml-[20px]">
            <FaPlus
              className="cursor-pointer mb-[10px] text-[#780000] w-[20px] h-[20px] hover:text-[#546e6d]"
              onClick={() => incrementProductQuantity(item.id)}
            />
            <FaMinus
              className="cursor-pointer mb-[10px] text-[#780000] w-[20px] h-[20px] hover:text-[#546e6d]"
              onClick={() => decrementProductQuantity(item.id)}
            />
            <MdDeleteForever
              className="cursor-pointer mb-[10px] text-[#780000] w-[20px] h-[20px] hover:text-[#546e6d]"
              onClick={() => removeProduct(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
