import NewProduct from "@/components/newProductVercel/NewProduct";
import { getProducts } from "../../../../apiUsers";

export default async function ProductVercel() {
  const Product = await getProducts();
  console.log(Product, "product");
  return (
    <div className=" mt-[40px] lg:mt-[120px] w-full  bg-[#dad7cd]">
      <div className="flex items-center justify-center flex-wrap w-4/5 h-full mt-[50px] m-auto">
        {" "}
        <NewProduct product={Product} />
      </div>
    </div>
  );
}
