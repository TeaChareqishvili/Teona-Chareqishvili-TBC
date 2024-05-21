import { getProducts } from "../../../../apiUsers";
import { getUserCart } from "../../../../apiUsers";
import Image from "next/image";
import productImg from "../../../../public/assets/image/blogImages/blog3.webp";
export default async function ProductVercel() {
  const Product = await getProducts();

  const cart = await getUserCart(46);
  const cartProducts = Object.entries(cart.products);
  //   console.log(Product);
  console.log(cartProducts, "cart");
  //   console.log(Product);
  return (
    <div className=" mt-[130px] text-[black] flex flex-col ml-[20px]">
      <h1 className="tetx-[black] text-[20px] text-center mt-[20px]">
        Products
      </h1>
      <div className="flex items-center justify-center flex-wrap w-full h-full">
        {" "}
        {Product?.map((product: any) => (
          <div
            key={product.id}
            className="border border-black w-[300px]  mx-[15px] my-[20px] p-[15px] flex items-center flex-col"
          >
            <Image width={200} height={200} src={productImg} alt="bag" />
            <p className="text-[black]">{product.title}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>${product.discount}</p>
            <button className="border border-black text-[black] mt-[10px] px-[10px] py-[7px]">
              details
            </button>
            <button className="border border-black text-[black] mt-[10px] px-[10px] py-[7px]">
              Add To cart
            </button>
          </div>
        ))}
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
