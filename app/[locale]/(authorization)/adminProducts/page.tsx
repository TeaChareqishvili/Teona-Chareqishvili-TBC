import { getProducts } from "../../../../apiUsers";

import AddNewProduct from "../../../../components/productButtons/AddNewProduct";
import Products from "@/components/adminPage/Products";

export default async function ProductVercel() {
  const Product = await getProducts();

  return (
    <div className=" mt-[40px] lg:mt-[90px] w-full  bg-[#D3D9D4] dark:bg-[#2E3944]">
      <div className="flex items-center justify-center flex-wrap w-4/5 h-full mt-[50px] m-auto">
        {" "}
        <Products product={Product} />
        <AddNewProduct />
      </div>
    </div>
  );
}
