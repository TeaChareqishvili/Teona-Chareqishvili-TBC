"use client";
import Link from "next/link";
import { AddProductToCart } from "../productButtons/AddProductToCart";
import { VercelProduct, NewProductProps } from "../../app/[locale]/interface";
import { handleAddToCart } from "../../app/[locale]/actions";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import ProductDeleteAdmin from "../../components/productButtons/ProductDeleteAdmin";

export default function NewProduct({ product }: NewProductProps) {
  const { user } = useUser();

  const isAdmin = Array.isArray(user?.role) && user.role.includes("admin");
  return (
    <>
      {product?.map((product: VercelProduct) => (
        <div
          key={product.id}
          className="bg-[#eeede9] border border-[#3d5a4b] w-[300px] mx-[15px] my-[20px] p-[15px] flex items-center flex-col rounded-lg shadow-md hover:shadow-lg   hover:scale-110 transition-scale transition-transform duration-300 cursor-pointer"
        >
          <div className="relative img-hover ">
            <div className="w-[250px] h-[250px]">
              {" "}
              <Image
                width={300}
                height={300}
                src={product.imageurl}
                alt="bag"
                className="rounded-lg w-full h-full"
              />
            </div>

            <div className=" cover absolute top-0 left-0 w-full h-full  flex items-center justify-center">
              <span className="text-white italic text-[18px] font-bold">
                New
              </span>
            </div>
          </div>

          <p className="text-[#3d5a4b] text-lg font-semibold">
            {product.title}
          </p>
          <p className="text-[#3d5a4b]">{product.category}</p>
          <p className="text-[#3d5a4b]">${product.price}</p>
          <p className="text-[#3d5a4b]">In Stock: {product.stock}</p>
          <Link
            className="border border-[#b5b4b0] text-center w-[150px] text-white mt-[10px] px-[10px] py-[7px] bg-[#4f7760] rounded-md hover:bg-[#5f8973] transition-colors duration-300"
            href={`/singleProductVercel/${product.id}`}
          >
            View Details
          </Link>

          <AddProductToCart
            productId={product.id}
            handleAddToCart={handleAddToCart}
          />
          {isAdmin && <ProductDeleteAdmin id={product.id} />}
        </div>
      ))}
    </>
  );
}
