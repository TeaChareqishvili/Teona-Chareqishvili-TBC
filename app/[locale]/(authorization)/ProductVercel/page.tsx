import NewProduct from "@/components/newProductVercel/NewProduct";
import { getProducts } from "../../../../apiUsers";

// import { getUserCart } from "../../../../apiUsers";

export default async function ProductVercel() {
  const Product = await getProducts();

  //   const cart = await getUserCart(46);
  //   const cartProducts = Object.entries(cart.products);
  //   const num = Object.values(cart.products);
  //   const finalNum = num.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     0
  //   );
  //   console.log(finalNum, "cart");

  return (
    <div className=" mt-[130px] text-[black] flex flex-col ml-[20px]">
      <h1 className="tetx-[black] text-[20px] text-center mt-[20px]">
        Products
      </h1>
      <div className="flex items-center justify-center flex-wrap w-full h-full">
        {" "}
        <NewProduct product={Product} />
      </div>

      <div>
        {/* {cartProducts.map(([id, count]) => (
          <div key={`prod-cart-count-${id}`}>
            <span className="text-[black]">{id}</span>
            <span className="text-black">{count}</span>
          </div>
        ))} */}
      </div>
    </div>
  );
}
