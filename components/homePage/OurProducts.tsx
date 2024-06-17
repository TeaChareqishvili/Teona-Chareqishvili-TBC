"use server";
import Image from "next/image";
import { getProducts } from "@/apiUsers";
import { VercelProduct } from "@/app/[locale]/interface";
import Link from "next/link";

export default async function OurProducts() {
  const homeProducts = await getProducts();
  const selectedProducts = homeProducts.slice(0, 3);

  return (
    <div className="w-full bg-[#D3D4D9] flex flex-col items-center justify-center py-[40px] px-[30px] lg:justify-between dark:bg-[#2E3944]">
      <Link
        href="/ProductVercel"
        className="text-center  mb-[20px] text-[24px] md:text-[30px] lg:text-[34px] uppercase  text-[#ffffff] my-[25px] underline cursor-pointer  "
      >
        Our Products
      </Link>
      <div className=" w-full flex flex-wrap items-center justify-center gap-4  lg:p-4 lg:justify-between lg:w-4/5">
        {selectedProducts.map((item: VercelProduct) => (
          <div
            key={item.id}
            className=" max-w-xs bg-white shadow-lg rounded-lg p-5  space-y-4 overflow-hidden mb-[40px]"
          >
            <Link
              href="/ProductVercel"
              className="flex flex-col items-center justify-center"
            >
              {" "}
              <Image
                width={300}
                height={300}
                src={item.imageurl}
                alt={`Article ${item.id}`}
                className=" hover mb-[30px] cursor-pointer"
              />
              <div className="h-[1px] w-[30px] bg-[#747775]"></div>
              <p className="text-[16px] italic text-[#747775] hover:text-[#454645] hover:scale-110 tracking-wider py-[20px] text-center cursor-pointer transition-all duration-200 mt-[15px]">
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
