"use server";
import { getProducts, getUserCart } from "@/apiUsers";
import { DeleteAll } from "@/components/productButtons/DeleteAll";
import { SingleProductButtons } from "@/components/productButtons/SingleProductButtons";
import { SelectedProduct } from "../../interface";

import Image from "next/image";

export default async function NewCartProducts() {
  const cart = await getUserCart();

  const cartProductsArray = Object.entries(cart.shop);

  const cartProducts = await getProducts();

  // //Create a map of cart product IDs and their quantities
  const cartProductMap = new Map(cartProductsArray);

  //Filter and map the products to include the quantity
  const filteredProducts = cartProducts
    .filter((product: SelectedProduct) =>
      cartProductMap.has(product.id.toString())
    )
    .map((product: SelectedProduct) => ({
      ...product,
      quantity: cartProductMap.get(product.id.toString()),
    }));

  return (
    <div className=" flex flex-col items-center justify-center  w-full dark:bg-[#2E3944] px-[20px] py-[20px] lg:justify-between lg:flex-row lg:items-start lg:px-[30px]">
      <div className="flex   flex-col mt-[150px]">
        <div className="w-full flex flex-col items-center lg:items-start ">
          {" "}
          {filteredProducts.map((product: SelectedProduct) => (
            <div
              key={product.id}
              className=" bg-white rounded-md py-[12px] md:px-[30px] dark:border-[#264653]  flex flex-col items-center  justify-center   mb-[15px] w-full md:flex-row lg:flex-row lg:justify-between"
            >
              <Image
                width={300}
                height={300}
                src={product.imageurl}
                alt="bag"
                className="mb-[20px] lg:mb-[0] rounded-lg"
              />{" "}
              <div className="md:flex md:flex-col md:px-[25px] md:w-[300px]">
                {" "}
                <p className="text-[#264653] text-[13px]  md:text-[15px] md:font-bold">
                  {product.title}
                </p>
                <p className="text-[#264653]">{product.category}</p>
                <p className="text-[#264653]">${product.price}</p>
                <p className="text-[#264653]">Quantity:{product.quantity}</p>
              </div>
              <SingleProductButtons id={product.id} />
              <p className="flex flex-col items-center  dark:text-[#9b2226] font-extrabold lg:mr-[20px] ">
                {" "}
                Total Price
                <span className="dark:text-[#9b2226] font-extrabold ">
                  ${" "}
                  {(
                    (product.quantity || 0) * parseFloat(product.price)
                  ).toFixed(2)}
                </span>
              </p>
            </div>
          ))}
          <DeleteAll />
        </div>
      </div>
      {/* <div className="bg-[#999e97] dark:bg-[#264653] mt-[150px] px-[15px] py-[30px] flex flex-col items-center justify-center rounded-md lg:ml-[20px]">
        <h2 className="text-[18px] font-bold text-[#ffffff] uppercase mb-[10px]">
          Total Price{" "}
        </h2>
        <p className="text-[#ffffff] font-extrabold text-[16px] text-left underline mb-[15px]">
          {filteredProducts
            .reduce(
              (
                acc: number,
                product: { quantity: string | number; price: string | number }
              ) => {
                const quantity = parseFloat(product.quantity as string) || 0;
                const price = parseFloat(product.price as string) || 0;
                return acc + quantity * price;
              },
              0
            )
            .toFixed(2)}
        </p>
        <Link href="/userCheckOutInfo">Buy Now</Link>
      </div> */}
    </div>
  );
}
