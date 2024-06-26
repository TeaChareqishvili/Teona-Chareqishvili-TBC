"use client";
import { handleAddToCart } from "@/app/[locale]/actions";
import { handleDecrementCart } from "@/app/[locale]/actions";
import { handleRemoveProductFromCart } from "../../app/[locale]/actions";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

const SingleProductButtons = ({ id }: any) => {
  return (
    <div className="flex  md:flex-col items-center center text-[white] mt-[10px] mb-[10px] md:px-[20px]">
      <FaCirclePlus
        className="text-[#264653] mr-[7px] md:mr-0 w-[20px] h-[20px] md:mb-[10px] cursor-pointer hover:text-[#9b2226] hover:scale-150 transition-all duration-200"
        onClick={() => handleAddToCart(id)}
      />
      <FaCircleMinus
        className="text-[#264653]  mr-[7px] md:mr-0  w-[20px] h-[20px] md:mb-[10px]  cursor-pointer hover:text-[#9b2226] hover:scale-150 transition-all duration-200"
        onClick={() => handleDecrementCart(id)}
      />
      <RiDeleteBin4Fill
        className="text-[#264653]  mr-[7px] md:mr-0  w-[20px] h-[20px]  md:mb-[10px] cursor-pointer hover:text-[#9b2226] hover:scale-150 transition-all duration-200"
        onClick={() => handleRemoveProductFromCart(id)}
      />
    </div>
  );
};

export { SingleProductButtons };
