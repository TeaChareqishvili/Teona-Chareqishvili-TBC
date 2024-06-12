import NewProduct from "@/components/newProductVercel/NewProduct";
import { getProducts } from "../../../../apiUsers";
import { getSession } from "@auth0/nextjs-auth0";
import AddNewProduct from "../../../../components/productButtons/AddNewProduct";

export default async function ProductVercel() {
  const Product = await getProducts();

  const session = await getSession();

  const isAdmin =
    Array.isArray(session?.user?.role) && session.user.role.includes("admin");

  return (
    <div className=" mt-[40px] lg:mt-[120px] w-full  bg-[#dad7cd]">
      <div className="flex items-center justify-center flex-wrap w-4/5 h-full mt-[50px] m-auto">
        {" "}
        <NewProduct product={Product} />
      </div>
      {isAdmin && <AddNewProduct />}
    </div>
  );
}
