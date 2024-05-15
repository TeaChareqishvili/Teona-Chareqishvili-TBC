"use client";
import { NavigationProps } from "@/app/[locale]/interface";
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import useProductCart from "@/hook";
import { useState, useEffect } from "react";
import { Card } from "@/hook";

const HeaderIcon: React.FC<NavigationProps> = ({ alignItems }) => {
  const { totalProductCount } = useProductCart();
  const [count, setCount] = useState(totalProductCount);

  useEffect(() => {
    const updateCartCount = () => {
      const products = window.localStorage.getItem("product");
      if (products) {
        const parsedProducts = JSON.parse(products);
        const total = parsedProducts.reduce(
          (sum: number, product: Card) => sum + product.quantity,
          0
        );
        setCount(total);
      }
    };

    // Initialize the cart count on component mount
    updateCartCount();

    const handleCartUpdate = () => {
      updateCartCount();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("storage", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("storage", handleCartUpdate);
    };
  }, []);
  return (
    <div style={{ alignItems: alignItems }} className="hidden lg:flex">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="#">
          <CiSearch className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#728a85] dark:text-[#ffffff] dark:hover:text-[#728a85]" />
        </Link>
        <Link href="#">
          <BsPerson className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#728a85] dark:text-[#ffffff] dark:hover:text-[#728a85]" />
        </Link>
        <Link href="/cartProducts">
          <div className="relative">
            {" "}
            <IoCartOutline className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#728a85] dark:text-[#ffffff] dark:hover:text-[#728a85]" />{" "}
            <span className=" absolute top-[-9px] left-[19px] text-[#780000] font-bold text-[15px]">
              {count}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { HeaderIcon };
