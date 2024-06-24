"use server";

import { getProducts } from "@/apiUsers";
import { VercelProduct } from "@/app/[locale]/interface";
import Link from "next/link";
import { getScopedI18n } from "@/locales/server";

export default async function OurProducts() {
  const homeProducts = await getProducts();
  const selectedProducts = homeProducts?.slice(0, 3);
  const t = await getScopedI18n("product");

  return (
    <div className="w-full bg-[#D3D9D4] flex flex-col items-center justify-center py-[40px] px-[30px] lg:justify-between dark:bg-[#2E3944]">
      <Link
        href="/ProductVercel"
        className="text-center mb-[20px] text-[24px] md:text-[30px] lg:text-[34px] uppercase dark:text-[white] text-[#264653] lg:my-[25px] lg:mb-0 underline cursor-pointer "
      >
        {t("products")}
      </Link>
      <div className=" w-full flex flex-wrap items-center justify-center gap-4 lg:p-4 lg:justify-between lg:w-4/5">
        {selectedProducts?.map((item: VercelProduct) => (
          <div
            key={item.id}
            className=" max-w-xs bg-white shadow-lg rounded-lg p-5  space-y-4 overflow-hidden mb-[40px]"
          >
            <Link
              href="/ProductVercel"
              className="flex flex-col items-center justify-center"
            >
              {" "}
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundImage: `url(${item.imageurl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="hover mb-[30px] cursor-pointer"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
