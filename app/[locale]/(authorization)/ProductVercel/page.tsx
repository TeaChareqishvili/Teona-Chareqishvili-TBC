import NewProduct from "@/components/newProductVercel/NewProduct";
import { getProducts } from "../../../../apiUsers";

export default async function ProductVercel() {
  const Product = await getProducts();

  return (
    <div className=" mt-[130px] w-4/5 m-auto">
      <div className="flex items-center justify-center flex-wrap w-full h-full">
        {" "}
        <NewProduct product={Product} />
      </div>
    </div>
  );
}
