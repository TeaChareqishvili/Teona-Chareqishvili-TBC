"use client";
import { NavigationProps } from "@/app/[locale]/interface";
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import useProductCart from "@/hook";

const HeaderIcon: React.FC<NavigationProps> = ({ alignItems }) => {
  const { totalProductCount } = useProductCart();
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
            <span className="absolute top-[-9px] left-[19px] text-[red]">
              {totalProductCount}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { HeaderIcon };
