import NewProduct from "@/components/newProductVercel/NewProduct";
import { getProducts } from "../../../../apiUsers";

export default async function ProductVercel() {
  const Product = await getProducts();

  return (
    <div className=" mt-[40px]  w-full  bg-[#D3D9D4] dark:bg-[#2E3944]">
      <div className="flex items-center justify-center flex-wrap w-4/5 h-full mt-[50px] m-auto">
        {" "}
        <NewProduct product={Product} />
      </div>
    </div>
  );
}
