import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { getUserCart } from "@/apiUsers";
export default async function Cart() {
  const cart = await getUserCart(46);

  const num = Object.values(cart.products);
  const finalNum = num.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <>
      <Link href="/newCartProducts">
        <div className="relative">
          {" "}
          <IoCartOutline className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#728a85] dark:text-[#ffffff] dark:hover:text-[#728a85]" />{" "}
          <span className=" absolute top-[-9px] left-[19px] text-[#780000] font-bold text-[15px]">
            {finalNum}
          </span>
        </div>
      </Link>
    </>
  );
}
