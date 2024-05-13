"use client";
import { NavigationProps } from "@/app/[locale]/interface";
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
// import {useSaveProducts} from "@/hook";
// import { useState, useEffect } from "react";

const HeaderIcon: React.FC<NavigationProps> = ({ alignItems }) => {
  // const [cartCount, setCartCount] = useState(0);

  // avoids mismatches because the initial render is the same on both the server and client
  // useEffect(() => {
  //   const cartProducts = JSON.parse(
  //     localStorage.getItem("cartProducts") || "[]"
  //   );
  //   setCartCount(cartProducts.length);
  // }, []);

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
          <IoCartOutline className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#728a85] dark:text-[#ffffff] dark:hover:text-[#728a85]" />
        </Link>

        {/* <span>{cartCount}num</span> */}
      </div>
    </div>
  );
};

export { HeaderIcon };
