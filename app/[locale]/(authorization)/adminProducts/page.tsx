import { getProducts } from "../../../../apiUsers";

import AddNewProduct from "../../../../components/productButtons/AddNewProduct";
import Products from "@/components/adminPage/Products";

export default async function ProductVercel() {
  const Product = await getProducts();

  return (
    <div className=" mt-[40px] lg:mt-[120px] w-full  bg-[#dad7cd]">
      <div className="flex items-center justify-center flex-wrap w-4/5 h-full mt-[50px] m-auto">
        {" "}
        <Products product={Product} />
      </div>
      <AddNewProduct />
    </div>
  );
}