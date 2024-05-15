"use client";
import useProductCart from "@/hook";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const CartProducts = () => {
  const {
    items,
    incrementProductQuantity,
    decrementProductQuantity,
    clearCart,
  } = useProductCart();

  return (
    <div className="mt-[130px] w-[4/5] mx-auto text-[black]">
      {items?.map((item, index) => (
        <div
          key={index}
          className="w-full border border-[#344e41] py-[20px] px-[30px] my-[30px] flex items-center justify-between"
        >
          <Image src={item.imgUrl} alt="product-img" width={150} height={150} />
          <div>
            {" "}
            <p>BRAND:{item.brand}</p>
            <p>TITLE:{item.title}</p>
            <p>PRICE:{item.price}</p>
            <p>QUANTITY:{item.quantity}</p>
          </div>
          <div className="ml-[20px]">
            <FaPlus
              className="cursor-pointer mb-[10px]"
              onClick={() => incrementProductQuantity(item.id)}
            />
            <FaMinus
              className="cursor-pointer mb-[10px]"
              onClick={() => decrementProductQuantity(item.id)}
            />
          </div>
        </div>
      ))}
      <button className="bg-[red] text-[white]" onClick={clearCart}>
        Clear all
      </button>
    </div>
  );
};

export default CartProducts;
