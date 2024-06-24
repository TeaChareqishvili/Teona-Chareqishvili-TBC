"use server";
import { getProducts, getUserCart } from "@/apiUsers";
import { DeleteAll } from "@/components/productButtons/DeleteAll";
import { SingleProductButtons } from "@/components/productButtons/SingleProductButtons";
import { SelectedProduct } from "../../interface";
import Link from "next/link";
import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";

export default async function NewCartProducts() {
  const cart = await getUserCart();
  const session = await getSession();

  console.log(session, "check");

  const cartProductsArray = Object.entries(cart?.shop);

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
    <div className=" flex flex-col items-center justify-center  w-full dark:bg-[#2E3944] px-[20px] py-[20px] lg:justify-around lg:flex-row lg:items-start lg:px-[30px]">
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
              <p className="flex flex-col items-center  text-[#9b2226] font-extrabold lg:mr-[20px] ">
                {" "}
                Total Price
                <span className="text-[#9b2226] font-extrabold ">
                  ${" "}
                  {(
                    (product.quantity || 0) * parseFloat(product.price)
                  ).toFixed(2)}
                </span>
              </p>
            </div>
          ))}
          {filteredProducts.length > 0 ? (
            <DeleteAll />
          ) : (
            <p className=" tracking-in-contract-bck h-[300px] text-center text-[24px] tracking-widest dark:text-white text-[#212A31] lg:text-[34px]">
              {session?.user?.given_name} Your Cart is Empty
            </p>
          )}
        </div>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="bg-white w-full px-[15px] py-[30px] flex flex-col items-center justify-center rounded-md lg:w-[250px] lg:mt-[150px] lg:ml-[20px]">
          <h2 className="text-[20px] font-bold text-[#212A31] uppercase mb-[10px]">
            Total Price{" "}
          </h2>
          <p className="text-[#212A31] font-extrabold text-[18px] text-left underline mb-[15px]">
            $
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
          <Link
            className="text-[#212A31] border-2 w-[150px] text-center px-[10px] py-[7px] rounded-md cursor-pointer hover:bg-[#212A31] hover:text-white transition-all duration-200  border-[#212A31] text-[18px] "
            href="/userCheckOutInfo"
          >
            Buy Now
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
